#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};
// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}
int main() {
    // Create nodes
    struct Node* head = createNode(1);
    struct Node* second = createNode(2);
    struct Node* tail = createNode(3);

    // Link nodes
    head->next = second;
    second->next = tail;

    // Print the iteration table
    printf("Node\t\tData \t\tAddress\t\t\tNext\n");
    printf("------------------------------------------------------\n");

    struct Node* current = head;
    while (current != NULL) {
        printf("%p\t%d         \t%p    \t%p\n", current, current->data, &(current->data), current->next);
        current = current->next;
    }

    return 0;
}
