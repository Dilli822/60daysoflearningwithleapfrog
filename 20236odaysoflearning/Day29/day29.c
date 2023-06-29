
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Stack {
    struct Node* top;
};

struct Queue {
    struct Node* front;
    struct Node* rear;
};

struct Stack* createStack() {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    stack->top = NULL;
    return stack;
}

struct Queue* createQueue() {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
    queue->front = NULL;
    queue->rear = NULL;
    return queue;
}

void push(struct Stack* stack, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = stack->top;
    stack->top = newNode;
}

int pop(struct Stack* stack) {
    if (stack->top == NULL) {
        printf("Oops! The stack is empty.\n");
        return -1;
    }
    struct Node* temp = stack->top;
    int data = temp->data;
    stack->top = temp->next;
    free(temp);
    return data;
}

void enqueue(struct Queue* queue, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    if (queue->rear == NULL) {
        queue->front = newNode;
        queue->rear = newNode;
    } else {
        queue->rear->next = newNode;
        queue->rear = newNode;
    }
}

int dequeue(struct Queue* queue) {
    if (queue->front == NULL) {
        printf("Oops! The queue is empty.\n");
        return -1;
    }
    struct Node* temp = queue->front;
    int data = temp->data;
    queue->front = temp->next;
    if (queue->front == NULL) {
        queue->rear = NULL;
    }
    free(temp);
    return data;
}

void displayStack(struct Stack* stack) {
    struct Node* current = stack->top;
    while (current != NULL) {
        printf("%d (Next: %p) -> ", current->data, current->next);
        current = current->next;
    }
    printf("NULL\n");
}

void displayQueue(struct Queue* queue) {
    struct Node* current = queue->front;
    while (current != NULL) {
        printf("%d (Next: %p) -> ", current->data, current->next);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    struct Stack* stack = createStack();
    push(stack, 1);
    push(stack, 2);
    push(stack, 3);
    
    printf("Stack elements: ");
    displayStack(stack);
    
    printf("Popped element: %d\n", pop(stack));
    
    printf("Stack elements after pop: ");
    displayStack(stack);
    
    struct Queue* queue = createQueue();
    enqueue(queue, 4);
    enqueue(queue, 5);
    enqueue(queue, 6);
    
    printf("Queue elements: ");
    displayQueue(queue);
    
    printf("Dequeued element: %d\n", dequeue(queue));
    
    printf("Queue elements after dequeue: ");
    displayQueue(queue);
    
    return 0;
}
