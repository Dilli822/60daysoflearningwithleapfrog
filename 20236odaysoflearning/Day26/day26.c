#include <stdio.h>
#include <stdlib.h>

// Structure for a linked list node
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int data) {
    // Create a new empty node
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

    // Set the data of the node
    newNode->data = data;

    // Set the next pointer of the node to NULL
    newNode->next = NULL;

    // Print a message for node creation
    printf("Created a new node with data: %d\n", data);

    // Return the newly created node
    return newNode;
}

// Function to insert a node at the beginning
void insertAtBeginning(struct Node** head, int data) {
    // Create a new node with the given data
    struct Node* newNode = createNode(data);

    // Make the new node point to the current head node
    newNode->next = *head;

    // Update the head to point to the new node
    *head = newNode;

    // Print a message for node insertion
    printf("Inserted node with data %d at the beginning\n", data);
}

// Function to delete a node from the beginning
void deleteFromBeginning(struct Node** head) {
    // Check if the linked list is empty
    if (*head == NULL) {
        printf("Linked list is empty. Cannot delete a node.\n");
        return;
    }

    // Store the current head node in a temporary variable
    struct Node* nodeToDelete = *head;

    // Update the head to point to the next node
    *head = (*head)->next;

    // Print a message for node deletion
    printf("Deleted node with data: %d\n", nodeToDelete->data);

    // Free the memory of the node to be deleted
    free(nodeToDelete);
}

// Function to display the linked list
void displayLinkedList(struct Node* head) {
    // Check if the linked list is empty
    if (head == NULL) {
        printf("Linked list is empty.\n");
        return;
    }

    // Start from the head node
    struct Node* currentNode = head;

    // Traverse the linked list
    while (currentNode != NULL) {
        // Print the data of the current node
        printf("%d ", currentNode->data);

        // Move to the next node
        currentNode = currentNode->next;
    }

    // Print a new line at the end
    printf("\n");
}

int main() {
    // Create an empty linked list
    struct Node* head = NULL;

    // Insert nodes at the beginning of the linked list
    insertAtBeginning(&head, 3);
    insertAtBeginning(&head, 2);
    insertAtBeginning(&head, 1);

    // Display the linked list
    printf("Linked list: ");
    displayLinkedList(head);

    // Delete a node from the beginning
    deleteFromBeginning(&head);

    // Display the updated linked list
    printf("Updated linked list: ");
    displayLinkedList(head);

    return 0;
}
