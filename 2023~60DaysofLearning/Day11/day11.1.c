#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#define MAX_SIZE 100

struct Stack {
    int top;
    int data[MAX_SIZE];
};

void initialize(struct Stack* stack) {  stack->top = -1; }

int isEmpty(struct Stack* stack) {  return stack->top == -1; }

void push(struct Stack* stack, int element) {
    if (stack->top == MAX_SIZE - 1) {
        printf("Stack Overflow\n");
        exit(EXIT_FAILURE);
    }
    stack->data[++stack->top] = element;
}

int pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow\n");
        exit(EXIT_FAILURE);
    }
    return stack->data[stack->top--];
}

int evaluatePrefix(const char* expression) {
    struct Stack stack;
    initialize(&stack);

    for (int i = strlen(expression) - 1; i >= 0; i--) {
        char ch = expression[i];
        if (isdigit(ch))
            push(&stack, ch - '0');
        else {
            int operand1 = pop(&stack);
            int operand2 = pop(&stack);
            switch (ch) {
                case '+': push(&stack, operand1 + operand2); break;
                case '-': push(&stack, operand1 - operand2); break;
                case '*': push(&stack, operand1 * operand2); break;
                case '/': push(&stack, operand1 / operand2); break;
                default:
                    printf("Invalid operator\n");
                    exit(EXIT_FAILURE);
            }
        }
    }

    return pop(&stack);
}

int main() {
    const char prefixExpression[] = "+9*26"; // Example prefix expression: + 9 * 2 6
    int prefixResult = evaluatePrefix(prefixExpression);
    printf("Prefix Result: %d\n", prefixResult);

    return 0;
}
