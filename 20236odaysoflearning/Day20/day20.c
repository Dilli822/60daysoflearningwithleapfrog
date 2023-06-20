#include <stdio.h>

#define MAX_SIZE 100

int list[MAX_SIZE];
int count = 0;

void insert(int value, int position) {
    if (count >= MAX_SIZE) {
        printf("List is full. Unable to insert.\n");
        return;
    }

    if (position < 0 || position > count) {
        printf("Invalid position. Unable to insert.\n");
        return;
    }

    for (int i = count; i > position; i--) {
        list[i] = list[i - 1];
    }

    list[position] = value;
    count++;
}

int get(int position) {
    if (position < 0 || position >= count) {
        printf("Invalid position. Unable to get element.\n");
        return -1; // Assuming -1 represents an invalid element
    }

    return list[position];
}

void removeElement(int value) {
    int found = 0;
    for (int i = 0; i < count; i++) {
        if (list[i] == value) {
            found = 1;
            for (int j = i; j < count - 1; j++) {
                list[j] = list[j + 1];
            }
            count--;
            break;
        }
    }

    if (!found) {
        printf("Element not found in the list.\n");
    }
}

void removeAt(int position) {
    if (position < 0 || position >= count) {
        printf("Invalid position. Unable to remove element.\n");
        return;
    }

    for (int i = position; i < count - 1; i++) {
        list[i] = list[i + 1];
    }
    count--;
}

void replace(int position, int newValue) {
    if (position < 0 || position >= count) {
        printf("Invalid position. Unable to replace element.\n");
        return;
    }

    list[position] = newValue;
}

int size() {
    return count;
}

int isEmpty() {
    return count == 0;
}

int isFull() {
    return count >= MAX_SIZE;
}

void display() {
    printf("List: ");
    for (int i = 0; i < count; i++) {
        printf("%d ", list[i]);
    }
    printf("\n");
}

int main() {
    insert(5, 0);
    insert(8, 1);
    insert(12, 2);

    display();

    printf("Element at position 1: %d\n", get(1));

    removeElement(8);
    printf("Element removed is 8 \n");
    display();

    return 0;
}
