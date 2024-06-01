// Online C compiler to run C program online
#include <stdio.h>

// Linked List Node Structure
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a new node at a specified position
void insertNode(struct Node** head, int value, int position) {
    struct Node* newNode = createNode(value);
    
    // If the list is empty, make the new node the head
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    
    // If the new node is to be inserted at the beginning
    if (position == 0) {
        newNode->next = *head;
        *head = newNode;
        return;
    }
    
    struct Node* current = *head;
    struct Node* previous = NULL;
    int count = 0;
    
    // Traverse to the specified position
    while (current != NULL && count < position) {
        previous = current;
        current = current->next;
        count++;
    }
    
    // Insert the new node at the specified position
    newNode->next = current;
    previous->next = newNode;
}

// Function to delete a node from a specified position
void deleteNode(struct Node** head, int position) {
    if (*head == NULL)
        return;
    
    struct Node* current = *head;
    struct Node* previous = NULL;
    int count = 0;
    
    // Traverse to the specified position
    while (current != NULL && count < position) {
        previous = current;
        current = current->next;
        count++;
    }
    
    // If the node is found at the specified position, delete it
    if (current != NULL) {
        if (previous != NULL)
            previous->next = current->next;
        else
            *head = current->next;
        free(current);
    }
}

// Function to print the linked list
void printList(struct Node* head) {
    struct Node* current = head;
    
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

// Main function to test the linked list operations
int main() {
    struct Node* head = NULL;
    
    // Insert nodes at specified positions
    insertNode(&head, 10, 0); // Insert 10 at position 0
    insertNode(&head, 20, 1); // Insert 20 at position 1
    insertNode(&head, 30, 2); // Insert 30 at position 2
    insertNode(&head, 90, 3); // Insert 30 at position 2   
    // Print the initial list
    printf("Initial List: ");
    printList(head);
    
    // Delete node at desired position suppose 3
    deleteNode(&head, 3);
    printList(head);
    deleteNode(&head, 1);
    
    // Print the updated list
    printf("Updated List: ");
    printList(head);
    
    return 0;
}
