#include <stdio.h>
#include <stdlib.h>
#include <string.h>

unsigned int hash_function(const char* key, int table_size) {
    unsigned int hash = 0;
    int key_length = strlen(key);

    for (int i = 0; i < key_length; i++) {
        hash += key[i];
    }

    return hash % table_size;
}

int main() {
    const char* key = "example";
    int table_size = 10;
    unsigned int hash_index = hash_function(key, table_size);
    printf("The hash index for '%s' is: %u\n", key, hash_index);
    return 0;
}
