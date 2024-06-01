#include <stdio.h>

int linear_search(int A[], int n, int data) {
    int loc = -1;
    for (int i = 0; i < n; i++) {
        if (data == A[i]) {
            loc = i;
            break;
        }
    }
    return loc;
}

int binary_search(int A[], int n, int data) {
    int LB = 0;
    int UB = n - 1;

    while (LB <= UB) {
        int mid = LB + (UB - LB) / 2;

        if (A[mid] == data)
            return mid;
        else if (A[mid] < data)
            LB = mid + 1;
        else
            UB = mid - 1;
    }
    return -1;
}
// ASSUMING THAT ARRAY IS SORTEE IF NOT WE HAVE SORT IT OURSELF FIRST
int main() {
    int arr[] = {1, 2, 3, 7, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    int element = 9;
    int result = linear_search(arr, n, element);
    
    (result >= 0) ? printf("Data is found at index %d and searching is successful.\n", result) :
    printf("Data is not found and searching is unsuccessful.\n");
    int binary_result = binary_search(arr, n, element);
    (binary_result != -1) ? printf("The data is found at index %d.\n", binary_result) :printf("The data is not found.\n");

    return 0;
}