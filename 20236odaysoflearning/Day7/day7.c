#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 100

typedef struct {
    char stack[MAX_SIZE];
    int top;
} Stack;

void initialize(Stack* s) {
    s->top = -1;
}

void push(Stack* s, char item) {
    s->stack[++(s->top)] = item;
}

char pop(Stack* s) {
    return s->stack[(s->top)--];
}

int is_operator(char c) {
    return (c == '+' || c == '-' || c == '*' || c == '/');
}

int precedence(char c) {
    if (c == '*' || c == '/')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return 0;
}

void infix_to_postfix(char* infix, char* postfix) {
    Stack s;
    initialize(&s);

    int length = strlen(infix);
    int j = 0;

    printf("Iteration\tCharacter\tStack\t\t\tPostfix Expression\n");

    for (int i = 0; i < length; i++) {
        char c = infix[i];

        printf("%d\t\t%c\t\t\t", i + 1, c);

        if (is_operator(c)) {
            while (s.top != -1 && precedence(s.stack[s.top]) >= precedence(c)) {
                char popped = pop(&s);
                printf("%c", popped);
                postfix[j++] = popped;
            }

            push(&s, c);
        } else {
            postfix[j++] = c;
        }

        printf("\t\t\t");

        for (int k = 0; k <= s.top; k++) {
            printf("%c", s.stack[k]);
        }

        printf("\t\t\t");

        for (int k = 0; k < j; k++) {
            printf("%c", postfix[k]);
        }

        printf("\n");
    }

    while (s.top != -1) {
        char popped = pop(&s);
        printf("%d\t\t%c\t\t\t", length + 1, popped);
        postfix[j++] = popped;
    }

    postfix[j] = '\0';

    printf("%d\t\t\t\t\t", length + 1);

    for (int k = 0; k < j; k++) {
        printf("%c", postfix[k]);
    }

    printf("\n");
}

int main() {
    char infix[] = "2+3*4";
    char postfix[MAX_SIZE];

    printf("Infix expression: %s\n", infix);
    infix_to_postfix(infix, postfix);
    printf("Postfix expression: %s\n", postfix);

    return 0;
}
