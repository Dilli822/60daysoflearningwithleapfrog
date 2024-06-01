#include <stdio.h> #include <stdlib.h>
struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};
void createCircularLinkedList(struct Node** head, struct Node** tail, int value) {
    // Create a new node
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = NULL;

    if (*head == NULL) {
        // List is empty
        *head = newNode;
        *tail = newNode;
    } else {
        // List is not empty
        newNode->next = *head;
        (*head)->prev = newNode;
        newNode->prev = *tail;
        (*tail)->next = newNode;
        *tail = newNode;
    }
}
void displayCircularLinkedList(struct Node* head) {
    struct Node* current = head;
    printf("NULL <-> ");

    do {
        printf("%d <-> ", current->data);
        current = current->next;
    } while (current != head);
    printf("NULL\n");
}
int main() {
    struct Node* head = NULL;
    struct Node* tail = NULL;
    createCircularLinkedList(&head, &tail, 15);
    createCircularLinkedList(&head, &tail, 48);
    displayCircularLinkedList(head);
    return 0;
}
