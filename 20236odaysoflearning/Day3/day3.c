#include <stdio.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Upper bound example: O(n)
void upperBound(int n) {
    for (int i = 0; i < n; i++) {
        // Some constant-time operation
         printf("Running upperBound algorithm\n");
    }
}

// Lower bound example: Ω(n)
void lowerBound(int n) {
    for (int i = n; i > 0; i--) {
        // Some constant-time operation
        printf("Running lowerBound algorithm\n");
    }
}

// Tight bound example: Θ(n)
void tightBound(int n) {
    for (int i = 0; i < n; i++) {
        // Some constant-time operation
        printf("Running tightBound algorithm\n");
    }
}

int main() {
    int n = 15; // Adjust input size as needed

    clock_t start, end;
    double cpu_time_used;

    printf("Upper bound example:\n");
    start = clock();
    upperBound(n);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Execution time: %f seconds\n\n", cpu_time_used);

    printf("Lower bound example:\n");
    start = clock();
    lowerBound(n);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Execution time: %f seconds\n\n", cpu_time_used);

    printf("Tight bound example:\n");
    start = clock();
    tightBound(n);
    end = clock();
    cpu_time_used = ((double) (end - start)) / CLOCKS_PER_SEC;
    printf("Execution time: %f seconds\n\n", cpu_time_used);

    return 0;
}

