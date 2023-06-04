#include<stdio.h>
#include<stdlib.h>
#define SIZE 4

int top = -1;
int stack[SIZE];

void push();
void pop();
void show();

int main() {
    int choice;

    while (1) {
        printf("\nOperations performed by Stack");
        printf("\n1. Push an element\n2. Pop an element\n3. Show the stack\n4. End");
        printf("\n\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                push();
                break;
            case 2:
                pop();
                break;
            case 3:
                show();
                break;
            case 4:
                exit(0);
            default:
                printf("\nInvalid choice! Please try again.");
        }
    }
}

void push() {
    int element;

    if (top == SIZE - 1) {
        printf("\nStack Overflow! Cannot push an element.");
    }
    else {
        printf("\nEnter the element to be pushed: ");
        scanf("%d", &element);
        top++;
        stack[top] = element;
        printf("Element %d has been pushed to the stack.", element);
    }
}

void pop() {
    if (top == -1) {
        printf("\nStack Underflow! Cannot pop an element.");
    }
    else {
        printf("\nPopped element: %d", stack[top]);
        top--;
        show(); // Call show() to display the updated stack
    }
}

void show() {
    if (top == -1) {
        printf("\nStack is empty. No elements to display.");
    }
    else {
        printf("\nElements in the stack:\n");
        for (int i = top; i >= 0; i--) {
            printf("%d\n", stack[i]);
        }
    }
}
