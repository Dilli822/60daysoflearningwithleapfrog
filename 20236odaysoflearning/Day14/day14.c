#include <stdio.h>

#define MAX 5

int deque[MAX];
int front = -1;
int rear = -1;

// Function to check if the deque is empty
int isEmpty() {
    return (front == -1 && rear == -1);
}

// Function to check if the deque is full
int isFull() {
    return ((rear == MAX - 1 && front == 0) || rear == front - 1);
}

// Function to remove an element from the front of the deque
void removeFront() {
    if (isEmpty()) {
        printf("Deque Underflow. Cannot remove element from the front.\n");
        return;
    }

    printf("Removed element from the front: %d\n", deque[front]);

    if (front == rear) {
        front = -1;
        rear = -1;
    } else {
        front = (front + 1) % MAX;
    }
}

// Function to remove an element from the rear of the deque
void removeRear() {
    if (isEmpty()) {
        printf("Deque Underflow. Cannot remove element from the rear.\n");
        return;
    }

    printf("Removed element from the rear: %d\n", deque[rear]);

    if (front == rear) {
        front = -1;
        rear = -1;
    } else if (rear == 0) {
        rear = MAX - 1;
    } else {
        rear--;
    }
}

int main() {
    removeFront(); // Trying to remove from an empty deque
    // Insert some elements for demonstration
    front = 0;
    rear = 0;
    deque[rear] = 10;
    rear = (rear + 1) % MAX;
    deque[rear] = 20;
    rear = (rear + 1) % MAX;
    deque[rear] = 30;

    removeFront();
    removeRear();
    removeFront();
    removeRear();
    removeFront(); // Trying to remove when the deque is already empty
    return 0;
}
