
#include <stdio.h> #include <stdlib.h>
struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};
void createDoublyLinkedList(struct Node** head, struct Node** tail, int value) {
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
        *head = newNode;
    }
}
void displayDoublyLinkedList(struct Node* head) {
    struct Node* current = head;
    printf("NULL <-> ");

    while (current != NULL) {
        printf("%d <-> ", current->data);
        current = current->next;
    }printf("NULL\n");
}
int main() {
    struct Node* head = NULL;
    struct Node* tail = NULL;
    createDoublyLinkedList(&head, &tail, 5);
    createDoublyLinkedList(&head, &tail, 8);
    displayDoublyLinkedList(head);
    return 0;
}
