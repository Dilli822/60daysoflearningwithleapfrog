#include<stdio.h>
#include<math.h>

void main()
{
    float a[10][10], b[10], x[10], sum, u;
    int i, j, k, n;

    printf("Enter the size of the system:");
    scanf("%d", &n);

    printf("Enter the coefficients of the matrix:\n");
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n + 1; j++)
        {
            printf("a%d%d=", i, j);
            scanf("%f", &a[i][j]);
        }
    }

    // Gaussian elimination
    for (k = 1; k <= n - 1; k++)
    {
        for (i = k + 1; i <= n; i++)
        {
            u = a[i][k] / a[k][k];
            for (j = k; j <= n + 1; j++)
            {
                a[i][j] = a[i][j] - u * a[k][j];
            }
        }
    }

    // Back substitution
    x[n] = a[n][n + 1] / a[n][n];
    for (i = n - 1; i > 0; i--)
    {
        sum = 0;
        for (j = i + 1; j <= n; j++)
        {
            sum = sum + a[i][j] * x[j];
        }
        x[i] = (a[i][n + 1] - sum) / a[i][i];
    }

    printf("The values are:\n");
    for (i = 1; i <= n; i++)
    {
        printf(" x%d = %f\n", i, x[i]);
    }
}

