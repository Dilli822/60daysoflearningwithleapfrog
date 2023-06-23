void deleteNode(struct Node** head, int value) {
    // Check if the list is empty
    if (*head == NULL) {
        printf("List is empty. Unable to delete.\n");
        return;
    }

    // Check if the node to be deleted is the head node
    if ((*head)->data == value) {
        struct Node* temp = *head;
        *head = (*head)->next;
        free(temp);
        return;
    }

    // Traverse the list to find the node to be deleted
    struct Node* current = *head;
    struct Node* prev = NULL;

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


void deleteNode(struct Node** head, int value) {
    // Check if the list is empty
    if (*head == NULL) {
        printf("List is empty. Unable to delete.\n");
        return;
    }

    // Check if the node to be deleted is the head node
    if ((*head)->data == value) {
        struct Node* temp = *head;
        *head = (*head)->next;
        if (*head != NULL) {
            (*head)->prev = NULL;
        }
        free(temp);
        return;
    }

    // Traverse the list to find the node to be deleted
    struct Node* current = *head;

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


void deleteNode(struct Node** head, int value) {
    // Check if the list is empty
    if (*head == NULL) {
        printf("List is empty. Unable to delete.\n");
        return;
    }

    // Check if the node to be deleted is the only node in the list
    if ((*head)->data == value && (*head)->next == *head) {
        free(*head);
        *head = NULL;
        return;
    }

    // Find the node to be deleted and its previous node
    struct Node* current = *head;
    struct Node* prev = NULL;

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

