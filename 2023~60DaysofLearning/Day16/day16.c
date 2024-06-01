#include <stdio.h>

// Function to count down from a given number to 1
void linear_countdown(int n) {
    if (n == 0)
        return;
    else {
        printf("%d\n", n);
        linear_countdown(n - 1);
    }
}

// Function to perform linear search in an array
int linear_search(int arr[], int n, int target, int index) {
    if (index == n) {
        return -1;  // Element not found
    }
    if (arr[index] == target) {
        return index;  // Element found at current index
    }
    return linear_search(arr, n, target, index + 1);
}

// Function to calculate the nth Fibonacci number
int fibonacci(int n, int a, int b) {
    if (n == 0) {
        return a;
    }
    return fibonacci(n - 1, b, a + b);
}

// Function to calculate the sum of elements in an array
int sum_array(int arr[], int n, int index, int result) {
    if (index == n) {
        return result;
    }
    return sum_array(arr, n, index + 1, result + arr[index]);
}

int binary_search(int arr[], int low, int high, int target) {
    if (low > high) {
        return -1;  // Element not found
    }
    int mid = (low + high) / 2;
    if (arr[mid] == target) {
        return mid;  // Element found
    } else if (arr[mid] > target) {
        return binary_search(arr, low, mid - 1, target);  // Search left half
    } else {
        return binary_search(arr, mid + 1, high, target);  // Search right half
    }
}

int fibonacci_tail(int n, int a, int b) {
    if (n == 0) {
        return a;
    }
    return fibonacci_tail(n - 1, b, a + b);
}

int main() {
    // Example usage of the tail-recursive functions

    // Linear countdown from 5 to 1
    linear_countdown(5);
    
    // Example array for linear search and sum calculation
    int arr[] = {1, 2, 3, 4, 5};

    // Linear search for element 3 in the array
    int search_index = linear_search(arr, 5, 3, 0);
    if (search_index != -1) {
        printf("Element found at index: %d\n", search_index);
    } else {
        printf("Element not found.\n");
    }

    // Calculate the sum of elements in the array
    int sum = sum_array(arr, 5, 0, 0);
    printf("Sum of array elements: %d\n", sum);

    // Binary search in a sorted array
    int binary_search_index = binary_search(arr, 0, 4, 4);
    if (binary_search_index != -1) {
        printf("Element found at index: %d\n", binary_search_index);
    } else {
        printf("Element not found.\n");
    }

    // Calculate the nth Fibonacci number using tail recursion
    int fibonacci_number = fibonacci_tail(6, 0, 1);
    printf("6th Fibonacci number: %d\n", fibonacci_number);

    return 0;
}
