
#include <stdio.h> #include <stdlib.h>
// Structure representing a node in the linked list
struct Node {
    int data;           // Data stored in the node
    struct Node* next;  // Pointer to the next node
};
// Function to create a linked list
void createLinkedList(struct Node** head, int value) {
    // Create a new node
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    
    // If the list is empty, set the new node as the head
    if (*head == NULL) {
        *head = newNode;
    } else {
        // Find the last node and make it point to the new node
        struct Node* current = *head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode; }
}
// Function to display the linked list
void displayLinkedList(struct Node* head) {
    // Traverse the list and print the data of each node
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    struct Node* head = NULL;
    // Create a linked list by adding nodes
    createLinkedList(&head, 5);
    createLinkedList(&head, 8);
     displayLinkedList(head);  // Display the linked list
    return 0;
}
