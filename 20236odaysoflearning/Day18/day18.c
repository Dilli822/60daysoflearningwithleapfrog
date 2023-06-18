#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(char* str, int start, int end) {
    // Base case: when the start and end indices meet or cross each other
    if (start >= end)
        return true;

    // Recursive case: check if the characters at start and end positions are equal
    if (str[start] != str[end])
        return false;

    // Recursively check the remaining substring
    return isPalindrome(str, start + 1, end - 1);
}

int main() {
    char str[100];

    printf("Enter a string: ");
    scanf("%s", str);

    int len = strlen(str);

    if (isPalindrome(str, 0, len - 1))
        printf("%s is a palindrome.\n", str);
    else
        printf("%s is not a palindrome.\n", str);

    return 0;
}
