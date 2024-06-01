#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void insertAtEnd(struct Node** head, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (*head == NULL) {
        *head = newNode;
    } else {
        struct Node* current = *head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
    }
}

void displayList(struct Node* head) {
    struct Node* current = head;
    printf("Node Address\t\tData\tNext Node Address\n");
    while (current != NULL) {
        printf("%p\t.        %d\t.         %p\n", current, current->data, current->next);
        current = current->next;
    }
}

int main() {
    struct Node* head = NULL;

    insertAtEnd(&head, 5);
    insertAtEnd(&head, 8);
    insertAtEnd(&head, 12);

    displayList(head);

    return 0;
}
