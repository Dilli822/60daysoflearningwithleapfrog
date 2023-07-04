
#include <stdio.h>

void shellSort(int arr[], int n) {
    int gap, i, j, temp;

    // Start with a large gap and reduce it in each iteration
    for (gap = n / 2; gap > 0; gap /= 2) {
        // Perform insertion sort on elements at current gap
        for (i = gap; i < n; i++) {
            temp = arr[i];
            j = i;

            // Shift elements until the correct position is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Place the current element at its correct position
            arr[j] = temp;
        }
    }
}

// Function to print an array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Driver program to test the shellSort function
int main() {
    int arr[] = {8, 3, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: ");
    printArray(arr, n);

    shellSort(arr, n);

    printf("Sorted array: ");
    printArray(arr, n);

    return 0;
}
