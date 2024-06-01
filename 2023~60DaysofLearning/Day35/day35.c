#include <stdio.h>
void merge(int arr[], int l1, int u1, int l2, int u2) {
    int i = l1, j = l2, k = 0;
    int size = u2 - l1 + 1;
    int aux[size];

    while (i <= u1 && j <= u2) {
        if (arr[i] <= arr[j]) {
            aux[k++] = arr[i++];
        } else {
            aux[k++] = arr[j++];
        }
    }

    while (i <= u1) {
        aux[k++] = arr[i++];
    }

    while (j <= u2) {
        aux[k++] = arr[j++];
    }

    for (i = l1, k = 0; i <= u2; i++, k++) {
        arr[i] = aux[k];
    }
}
void mergeSort(int arr[], int n) {
    int size = 1;
    while (size < n) {
        int l1 = 0;
        while (l1 + size < n) {
            int l2 = l1 + size;
            int u1 = l2 - 1;
            int u2 = (l2 + size - 1 < n) ? l2 + size - 1 : n - 1;
            merge(arr, l1, u1, l2, u2);
            l1 = u2 + 1;
        }
        size *= 2;
    }
}

int main() {
    int arr[] = {1, 9, 5, 6, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Array before sorting: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    mergeSort(arr, n);

    printf("Array after sorting: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}
