#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 100

struct Stack {
    int top;
    char items[MAX_SIZE];
};

void initialize(struct Stack* stack) {
    stack->top = -1;
}

int isFull(struct Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

void push(struct Stack* stack, char item) {
    if (isFull(stack)) {
        printf("Stack Overflow\n");
        return;
    }
    stack->items[++stack->top] = item;
}

char pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow\n");
        return -1;
    }
    return stack->items[stack->top--];
}

void reverseString(char* str) {
    struct Stack stack;
    initialize(&stack);

    int length = strlen(str);
    int i;

    // Push each character onto the stack
    for (i = 0; i < length; i++) {
        push(&stack, str[i]);
    }

    // Pop and print each character from the stack
    for (i = 0; i < length; i++) {
        str[i] = pop(&stack);
    }
}

int main() {
    char str[] = "Hello, World!";
    printf("Original String: %s\n", str);

    reverseString(str);
    printf("Reversed String: %s\n", str);

    return 0;
}
