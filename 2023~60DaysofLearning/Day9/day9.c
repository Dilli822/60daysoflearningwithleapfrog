#include <stdio.h>
#include <stdbool.h>

#define STACK_SIZE 100

char stack[STACK_SIZE];
int top = -1;

void push(char value) {
    stack[++top] = value;
}

char pop() {
    return stack[top--];
}

char getMatchingOpeningSymbol(char closingSymbol);

bool isBalanced(char* expression) {
    for (int i = 0; expression[i] != '\0'; i++) {
        if (expression[i] == '(' || expression[i] == '{' || expression[i] == '[') {
            push(expression[i]);
        } else if (expression[i] == ')' || expression[i] == '}' || expression[i] == ']') {
            if (top == -1 || pop() != getMatchingOpeningSymbol(expression[i])) {
                return false;
            }
        }
    }

    return (top == -1);
}

char getMatchingOpeningSymbol(char closingSymbol) {
    if (closingSymbol == ')') {
        return '(';
    } else if (closingSymbol == '}') {
        return '{';
    } else if (closingSymbol == ']') {
        return '[';
    }
    
    return '\0'; // Return null character for any other symbols
}

int main() {
    char expression[STACK_SIZE];

    printf("Enter an expression: ");
    scanf("%s", expression);

    if (isBalanced(expression)) {
        printf("Symbols are balanced\n");
    } else {
        printf("Symbols are not balanced\n");
    }

    return 0;
}
