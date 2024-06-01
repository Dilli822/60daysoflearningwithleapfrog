#include <stdio.h>
#define SIZE 5
int queue[SIZE];
int front = -1;
int rear = -1;
// Function to check if the circular queue is empty
int isEmpty() {
    return (front == -1);
}
// Function to check if the circular queue is full
int isFull() {
    return ((rear + 1) % SIZE == front);
}

// Function to perform the enqueue operation
void enqueue(int data) {
    if (isFull()) {
        printf("Queue is full. Cannot enqueue element.\n");
        return;
    }

    rear = (rear + 1) % SIZE;
    queue[rear] = data;

    if (front == -1) {
        front = 0;
    }
    printf("Enqueued element: %d\n", data);
}
// Function to perform the dequeue operation
void dequeue() {
    if (isEmpty()) {
        printf("Queue is empty. Cannot dequeue element.\n");
        return;
    }

    int data = queue[front];

    if (rear == front) {
        front = -1;
        rear = -1;
    } else {
        front = (front + 1) % SIZE;
    }
    printf("Dequeued element: %d\n", data);
}

int main() {
    dequeue(); // Trying to dequeue from an empty circular queue
    // Enqueue some elements for demonstration
    enqueue(10);
    enqueue(20);
    enqueue(30);
    dequeue();
    dequeue();
    dequeue();
    dequeue(); // Trying to dequeue when the circular queue is already empty
    return 0;
}
