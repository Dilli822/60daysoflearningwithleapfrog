#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define HASH_TABLE_SIZE 10
// Hash table structure
struct KeyValue {
    char key[20];
    int value;
};
struct KeyValue hash_table[HASH_TABLE_SIZE];
// Hash function example
unsigned int hash_function(const char* key) {
    unsigned int hash = 0;
    int i;
    for (i = 0; i < strlen(key); i++) {
        hash += key[i];
    }
    return hash % HASH_TABLE_SIZE;
}

// Inserting key-value pairs into the hash table
void insert(const char* key, int value) {
    unsigned int index = hash_function(key);
    strcpy(hash_table[index].key, key);
    hash_table[index].value = value;
}

// Retrieving value based on key from the hash table
int retrieve(const char* key) {
    unsigned int index = hash_function(key);
    return hash_table[index].value;
}

int main() {
    insert("apple", 5);
    insert("banana", 10);
    insert("orange", 7);

    printf("Apple Hash key: %d\n", retrieve("apple"));   // Output: 5
    printf("Banana Hash Key: %d\n", retrieve("banana"));  // Output: 10
    printf("Orange Hash Key: %d\n", retrieve("orange"));  // Output: 7

    return 0;
}
