#include <stdio.h>
#include <math.h>

/* Define the equation f(x) and its derivative f'(x) */
float f(float x) {
    return x*x*x - 5*x + 1; // Equation: x^2 - 4
}

float f_prime(float x) {
    return 3*x*x - 5; // Derivative: 2x
}

int main() {
    float x0, x1, x2, epsilon;
    int maxIterations, iteration = 1;

    printf("Enter initial guess x0: ");
    scanf("%f", &x0);

    printf("Enter initial guess x1: ");
    scanf("%f", &x1);

    printf("Enter tolerance level (epsilon): ");
    scanf("%f", &epsilon);

    printf("Enter maximum number of iterations: ");
    scanf("%d", &maxIterations);

    // Perform Newton-Raphson iterations
    do {
        // Calculate x2 using the formula x2 = x1 - f(x1) / f'(x1)
        x2 = x1 - f(x1) / f_prime(x1);

        // Update x0 and x1
        x0 = x1;
        x1 = x2;

        iteration++;

        // Check if the stopping criteria is satisfied
        if (iteration > maxIterations || fabs(x2 - x0) < epsilon) {
            break;
        }
    } while (1);

    printf("Root approximation: %.4f\n", x2);

    return 0;
}
