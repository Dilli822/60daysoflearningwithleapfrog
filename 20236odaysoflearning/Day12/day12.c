#include <stdio.h>
#include <stdlib.h>
#define MAX 50
int queue_arr[MAX];
int rear = -1;
int front = -1;

// Function to insert an element into the queue
void insert() {
    int added_item;
    if (rear == MAX - 1) {
        printf("\nQueue Overflow\n");
        getch();
        return;
    } else {
        printf("Enter the element to be inserted: ");
        scanf("%d", &added_item);
        if (front == -1) {
            front = 0;
        }
        rear++;
        queue_arr[rear] = added_item;
    }
}

// Function to delete (or pop) an element from the queue
void del() {
    if (front == -1 || front > rear) {
        printf("\nQueue Underflow\n");
        return;
    } else {
        printf("Element deleted from queue is: %d\n", queue_arr[front]);
        front++;
    }
}

// Function to display all the elements of the queue
void display() {
    int i;
    if (front == -1 || front > rear) {
        printf("\nQueue is empty\n");
        return;
    } else {
        printf("\nQueue is: ");
        for (i = front; i <= rear; i++) {
            printf("%d ", queue_arr[i]);
        }
        printf("\n");
    }
}

int main() {
    int choice;
    while (1) {
        system("cls"); // Use system("clear") on Unix-like systems instead of "cls" for Windows
        printf("Queue Operations:\n");
        printf("1. Insert\n");
        printf("2. Delete\n");
        printf("3. Display\n");
        printf("4. Quit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                insert();
                getch();
                break;
            case 2:
                del();
                getch();
                break;
            case 3:
                display();
                getch();
                break;
            case 4:
                exit(0);
            default:
                printf("Wrong choice\n");
                getch();
                break;
        }
    }
    return 0;
}
