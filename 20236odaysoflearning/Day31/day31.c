#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void bubbleSort(int arr[], int n) {
    int i, j;
    int swapped;
    for (i = 0; i < n-1; i++) {
        swapped = 0;
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = 1;
            }
        }
        // If no two elements were swapped, the list is already sorted
        if (swapped == 0) {
            break;
        }
    }
}

int main() {
    srand(time(0));
    int n = 5;
    int arr[5];

    printf("Unsorted array:\n");
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % 100;
        printf("%d ", arr[i]);
    }

    // Worst Case (Reverse Sorted List)
    bubbleSort(arr, n);
    printf("\n\nSorted array in worst case:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    // Best Case (Already Sorted List)
    bubbleSort(arr, n);
    printf("\n\nSorted array in best case:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    // Average Case (Randomly Distributed Elements)
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % 100;
    }
    bubbleSort(arr, n);
    printf("\n\nSorted array in average case:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
