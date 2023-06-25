#include <stdio.h>
#include <stdlib.h>

struct Node {
    int priority;
    int value;
    struct Node* next;
};

typedef struct Node* PriorityQueue;

PriorityQueue createPriorityQueue() {
    return NULL;
}

void insert(PriorityQueue* pq, int value, int priority) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->value = value;
    newNode->priority = priority;
    newNode->next = NULL;

    if (*pq == NULL) {
        // If the priority queue is empty, make the new node the head
        *pq = newNode;
    } else {
        struct Node* current = *pq;
        struct Node* prev = NULL;

        while (current != NULL && current->priority <= priority) {
            prev = current;
            current = current->next;
        }

        if (prev == NULL) {
            // If the new node has the highest priority, make it the new head
            newNode->next = *pq;
            *pq = newNode;
        } else {
            // Insert the new node after the previous node
            prev->next = newNode;
            newNode->next = current;
        }
    }
}

int removeHighestPriority(PriorityQueue* pq) {
    if (*pq == NULL) {
        printf("Priority queue is empty.\n");
        return -1; // Return a sentinel value to indicate an empty queue or handle it differently
    }

    struct Node* temp = *pq;
    int value = temp->value;
    *pq = (*pq)->next;
    free(temp);

    return value;
}

int getHighestPriority(PriorityQueue pq) {
    if (pq == NULL) {
        printf("Priority queue is empty.\n");
        return -1; // Return a sentinel value to indicate an empty queue or handle it differently
    }

    return pq->value;
}

void displayPriorityQueue(PriorityQueue pq) {
    if (pq == NULL) {
        printf("Priority queue is empty.\n");
        return;
    }

    struct Node* current = pq;
    printf("Priority Queue: ");
    while (current != NULL) {
        printf("(%d, %d) ", current->value, current->priority);
        current = current->next;
    }
    printf("\n");
}

int main() {
    PriorityQueue pq = createPriorityQueue();

    insert(&pq, 10, 2);
    insert(&pq, 20, 1);
    insert(&pq, 30, 3);
    insert(&pq, 40, 2);

    displayPriorityQueue(pq);

    int highestPriority = getHighestPriority(pq);
    printf("Highest priority: %d\n", highestPriority);

    int removedValue = removeHighestPriority(&pq);
    printf("Removed value: %d\n", removedValue);

    displayPriorityQueue(pq);

    return 0;
}
