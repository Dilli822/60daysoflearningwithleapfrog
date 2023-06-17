#include <stdio.h>

int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

void towerOfHanoi(int n, char source, char destination, char auxiliary) {
    if (n == 1) {
        printf("Move disk 1 from rod %c to rod %c\n", source, destination);
        return;
    }

    towerOfHanoi(n - 1, source, auxiliary, destination);
    printf("Move disk %d from rod %c to rod %c\n", n, source, destination);
    towerOfHanoi(n - 1, auxiliary, destination, source);
}
int main() {
    int num1,num2;
    printf("Enter two numbers to find the gcd : \n");
    scanf("%d%d", &num1,&num2);
    
    int result = gcd(num1, num2);
    printf("GCD of %d and %d is %d\n", num1, num2, result);
    
    int n; // Number of disks
    printf("Enter the no of disks: \n");
    scanf("%d", &n);

    printf("Tower of Hanoi - Solution:\n");
    printf("Number of disks: %d\n", n);
    printf("--------------------------\n");

    // Calling the recursive function
    towerOfHanoi(n, 'A', 'C', 'B');

    printf("--------------------------\n");
    printf("Tower of Hanoi complete!\n");
    return 0;
}
