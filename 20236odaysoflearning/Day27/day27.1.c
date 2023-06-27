#include <stdio.h>
float f(float x) {
    return x*x*x - 5*x + 1; // Equation: x^3 - 5x + 1
}


float f_derivative(float x) {
    return 3*x*x - 5; // Derivative: 3x^2 - 5
}

int main() {
    float x1, x0, epsilon;

    // Take initial guess x1
    printf("Enter the initial guess (x1): ");
    scanf("%f", &x1);

    // Take the stopping criteria (epsilon)
    printf("Enter the stopping criteria (epsilon): ");
    scanf("%f", &epsilon);

    // Initialize x0 with x1
    x0 = x1;

    // Perform Newton-Raphson iterations
    do {
        x1 = x0 - (f(x0) / f_derivative(x0));

        // Update x0 with x1 for the next iteration
        x0 = x1;
    } while (fabs(f(x1)) > epsilon);

    // Print the root (x1)
    printf("Root: %.4f\n", x1);

    return 0;
}
