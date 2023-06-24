#include <stdio.h>
#include <stdlib.h>

// Structure for a node in the singly linked list
struct SinglyNode {
    int data;
    struct SinglyNode* next;
};

// Structure for a node in the doubly linked list
struct DoublyNode {
    int data;
    struct DoublyNode* prev;
    struct DoublyNode* next;
};

// Structure for a node in the circular linked list
struct CircularNode {
    int data;
    struct CircularNode* next;
};

// Function to delete a node from a singly linked list
void deleteSinglyNode(struct SinglyNode** head, int value) {
    // Check if the list is empty
    if (*head == NULL) {
        printf("List is empty. Unable to delete.\n");
        return;
    }

    // Check if the node to be deleted is the head node
    if ((*head)->data == value) {
        struct SinglyNode* temp = *head;
        *head = (*head)->next;
        free(temp);
        return;
    }

    // Traverse the list to find the node to be deleted
    struct SinglyNode* current = *head;
    struct SinglyNode* prev = NULL;

    while (current != NULL && current->data != value) {
        prev = current;
        current = current->next;
    }

    // If the node is found, update the links and free memory
    if (current != NULL) {
        prev->next = current->next;
        free(current);
    } else {
        printf("Node with value %d not found in the list.\n", value);
    }
}

// Function to delete a node from a doubly linked list
void deleteDoublyNode(struct DoublyNode** head, int value) {
    // Check if the list is empty
    if (*head == NULL) {
        printf("List is empty. Unable to delete.\n");
        return;
    }

    // Check if the node to be deleted is the head node
    if ((*head)->data == value) {
        struct DoublyNode* temp = *head;
        *head = (*head)->next;
        if (*head != NULL) {
            (*head)->prev = NULL;
        }
        free(temp);
        return;
    }

    // Traverse the list to find the node to be deleted
    struct DoublyNode* current = *head;

    while (current != NULL && current->data != value) {
        current = current->next;
    }

    // If the node is found, update the links and free memory
    if (current != NULL) {
        if (current->prev != NULL) {
            current->prev->next = current->next;
        }
        if (current->next != NULL) {
            current->next->prev = current->prev;
        }
        free(current);
    } else {
        printf("Node with value %d not found in the list.\n", value);
    }
}

// Function to delete a node from a circular linked list
void deleteCircularNode(struct CircularNode** head, int value) {
    // Check if the list is empty
    if (*head == NULL) {
        printf("List is empty. Unable to delete.\n");
        return;
    }

    // Find the node to be deleted and its previous node
    struct CircularNode* current = *head;
    struct CircularNode* prev = NULL;

    while (current->data != value) {
        if (current->next == *head) {
            printf("Node with value %d not found in the list.\n", value);
            return;
        }
        prev = current;
        current = current->next;
    }

    // If the node to be deleted is the head node, update the head pointer
    if (current == *head) {
        *head = (*head)->next;
    }

    // Update the links and free memory
    prev->next = current->next;
    free(current);
}

// Function to print a singly linked list
void printSinglyList(struct SinglyNode* head) {
    printf("Singly Linked List: ");
    while (head != NULL) {
        printf("%d ", head->data);
        head = head->next;
    }
    printf("\n");
}

// Function to print a doubly linked list
void printDoublyList(struct DoublyNode* head) {
    printf("Doubly Linked List: ");
    while (head != NULL) {
        printf("%d ", head->data);
        head = head->next;
    }
    printf("\n");
}

// Function to print a circular linked list
void printCircularList(struct CircularNode* head) {
    if (head == NULL) {
        printf("Circular Linked List is empty.\n");
        return;
    }

    struct CircularNode* current = head;

    printf("Circular Linked List: ");
    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != head);

    printf("\n");
}

int main() {
    // Singly Linked List
    struct SinglyNode* singlyHead = NULL;

    // Insert nodes into the singly linked list
    struct SinglyNode* node1 = (struct SinglyNode*)malloc(sizeof(struct SinglyNode));
    node1->data = 1;
    node1->next = NULL;
    singlyHead = node1;

    struct SinglyNode* node2 = (struct SinglyNode*)malloc(sizeof(struct SinglyNode));
    node2->data = 2;
    node2->next = NULL;
    node1->next = node2;

    struct SinglyNode* node3 = (struct SinglyNode*)malloc(sizeof(struct SinglyNode));
    node3->data = 3;
    node3->next = NULL;
    node2->next = node3;

    // Print the initial singly linked list
    printf("Initial ");
    printSinglyList(singlyHead);

    // Delete a node from the singly linked list
    int singlyValueToDelete = 2;
    deleteSinglyNode(&singlyHead, singlyValueToDelete);

    // Print the modified singly linked list
    printf("Modified ");
    printSinglyList(singlyHead);

    // Doubly Linked List
    struct DoublyNode* doublyHead = NULL;

    // Insert nodes into the doubly linked list
    struct DoublyNode* dNode1 = (struct DoublyNode*)malloc(sizeof(struct DoublyNode));
    dNode1->data = 1;
    dNode1->prev = NULL;
    dNode1->next = NULL;
    doublyHead = dNode1;

    struct DoublyNode* dNode2 = (struct DoublyNode*)malloc(sizeof(struct DoublyNode));
    dNode2->data = 2;
    dNode2->prev = NULL;
    dNode2->next = NULL;
    dNode1->next = dNode2;
    dNode2->prev = dNode1;

    struct DoublyNode* dNode3 = (struct DoublyNode*)malloc(sizeof(struct DoublyNode));
    dNode3->data = 3;
    dNode3->prev = NULL;
    dNode3->next = NULL;
    dNode2->next = dNode3;
    dNode3->prev = dNode2;

    // Print the initial doubly linked list
    printf("Initial ");
    printDoublyList(doublyHead);

    // Delete a node from the doubly linked list
    int doublyValueToDelete = 2;
    deleteDoublyNode(&doublyHead, doublyValueToDelete);

    // Print the modified doubly linked list
    printf("Modified ");
    printDoublyList(doublyHead);

    // Circular Linked List
    struct CircularNode* circularHead = NULL;

    // Insert nodes into the circular linked list
    struct CircularNode* cNode1 = (struct CircularNode*)malloc(sizeof(struct CircularNode));
    cNode1->data = 1;
    cNode1->next = NULL;
    circularHead = cNode1;
    cNode1->next = circularHead;

    struct CircularNode* cNode2 = (struct CircularNode*)malloc(sizeof(struct CircularNode));
    cNode2->data = 2;
    cNode2->next = NULL;
    cNode1->next = cNode2;
    cNode2->next = circularHead;

    struct CircularNode* cNode3 = (struct CircularNode*)malloc(sizeof(struct CircularNode));
    cNode3->data = 3;
    cNode3->next = NULL;
    cNode2->next = cNode3;
    cNode3->next = circularHead;

    // Print the initial circular linked list
    printf("Initial ");
    printCircularList(circularHead);

    // Delete a node from the circular linked list
    int circularValueToDelete = 2;
    deleteCircularNode(&circularHead, circularValueToDelete);

    // Print the modified circular linked list
    printf("Modified ");
    printCircularList(circularHead);

    return 0;
}
