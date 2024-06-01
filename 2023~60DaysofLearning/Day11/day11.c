#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
int evaluatePostfix(const char* exp) {
    int stack[100];  // Stack to store operands
    int top = -1;    // Top index of the stack

    for (int i = 0; exp[i] != '\0'; i++) {
        if (isdigit(exp[i])) {
            stack[++top] = exp[i] - '0';  // Push operand to stack
        } else {
            int operand2 = stack[top--];  // Pop top two operands
            int operand1 = stack[top--];

            switch (exp[i]) {
                case '+':
                    stack[++top] = operand1 + operand2;  // Evaluate and push the result
                    break;
                case '-':
                    stack[++top] = operand1 - operand2;
                    break;
                case '*':
                    stack[++top] = operand1 * operand2;
                    break;
                case '/':
                    stack[++top] = operand1 / operand2;
                    break;
            }
        }}
    return stack[top];  // Result will be at the top of the stack
}

int main() {
    char exp[100];
    printf("Enter a postfix expression: ");
    fgets(exp, sizeof(exp), stdin);
    exp[strcspn(exp, "\n")] = '\0';  // Remove trailing newline character

    int result = evaluatePostfix(exp);
    printf("Postfix evaluation: %d\n", result);

    return 0;
}
