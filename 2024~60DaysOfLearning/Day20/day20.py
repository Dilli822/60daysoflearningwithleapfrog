import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
# Given data points
x1 = np.array([1, 2, 3, 4])
x2 = np.array([4, 5, 8, 2])
y = np.array([1, 6, 8, 12])

# Number of data points
n = len(y)

# Summations
sum_y = np.sum(y)
sum_x1 = np.sum(x1)
sum_x2 = np.sum(x2)
sum_x1_y = np.sum(x1 * y)
sum_x2_y = np.sum(x2 * y)
sum_x1_x2 = np.sum(x1 * x2)
sum_x1_squared = np.sum(x1 ** 2)
sum_x2_squared = np.sum(x2 ** 2)

# Construct the matrices for the normal equations
A = np.array([
    [n, sum_x1, sum_x2],
    [sum_x1, sum_x1_squared, sum_x1_x2],
    [sum_x2, sum_x1_x2, sum_x2_squared]
])

B = np.array([sum_y, sum_x1_y, sum_x2_y])

# Calculate the determinant of matrix A
D = np.linalg.det(A)

# Construct the matrices for D1, D2, and D3 by replacing columns of A with B
A1 = np.copy(A)
A1[:, 0] = B
D1 = np.linalg.det(A1)

A2 = np.copy(A)
A2[:, 1] = B
D2 = np.linalg.det(A2)

A3 = np.copy(A)
A3[:, 2] = B
D3 = np.linalg.det(A3)

# Calculate the coefficients using Cramer's rule
a = D1 / D
b1 = D2 / D
b2 = D3 / D

print(" >>>>> Multiple Linear Regression Output  <<<<< \n")
print(f"Intercept (a): {a} \n")
print(f"Coefficient for x1 (b1): {b1} \n")
print(f"Coefficient for x2 (b2): {b2} \n")

# Predict function for multiple linear regression
def predict(X1, X2, a, b1, b2):
    return a + b1 * X1 + b2 * X2

# Calculate the predicted values
y_pred = predict(x1, x2, a, b1, b2)

# Calculate the Total Sum of Squares (TSS)
mean_y = np.mean(y)
TSS = np.sum((y - mean_y) ** 2)
# Calculate Mean Squared Error (MSE)
MSE = np.mean((y - y_pred) ** 2)
print(f"Mean Squared Error (MSE): {MSE} \n")


# Calculate the Sum of Squares of the Regression (SSR)
SSR = np.sum((y_pred - mean_y) ** 2)

# Calculate the Sum of Squares of Residuals (SSE)
SSE = np.sum((y - y_pred) ** 2)

# Calculate the R-squared value
R_squared = SSR / TSS

print(f"R-squared: {R_squared} \n")

# Example predictions
new_X1 = np.array([1, 4])
new_X2 = np.array([2, 5])
predictions = predict(new_X1, new_X2, a, b1, b2)
print(f"Predictions: {predictions}")

# Visualization
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Plot original data points
ax.scatter(x1, x2, y, color='blue', label='Original Data')

# Create a grid for x1 and x2
x1_grid, x2_grid = np.meshgrid(np.linspace(x1.min(), x1.max(), 20),
                               np.linspace(x2.min(), x2.max(), 20))

# Predict y values for the grid
y_grid = predict(x1_grid, x2_grid, a, b1, b2)

# Plot the regression plane
ax.plot_surface(x1_grid, x2_grid, y_grid, color='red', alpha=0.5, label='Regression Plane')

# Plot the new predictions
ax.scatter(new_X1, new_X2, predictions, color='green', label='Predictions', marker='x')

# Set labels and title
ax.set_xlabel('X1')
ax.set_ylabel('X2')
ax.set_zlabel('Y')
ax.set_title('Multiple Linear Regression')

# Show the legend
ax.legend()
# Show the plot
plt.show()

# Visualization for x1 vs y
plt.figure(figsize=(14, 6))
plt.subplot(1, 2, 1)
plt.scatter(x1, y, color='blue', label='Original Data')
x1_fit = np.linspace(min(x1), max(x1), 100)
y_fit = predict(x1_fit, np.mean(x2), a, b1, b2)
plt.plot(x1_fit, y_fit, color='red', label='Best Fit Line')
plt.xlabel('X1')
plt.ylabel('Y')
plt.title('Regression Line (X1 vs Y)')
plt.legend()
plt.grid(True)

# Visualization for x2 vs y
plt.subplot(1, 2, 2)
plt.scatter(x2, y, color='blue', label='Original Data')
x2_fit = np.linspace(min(x2), max(x2), 100)
y_fit = predict(np.mean(x1), x2_fit, a, b1, b2)
plt.plot(x2_fit, y_fit, color='red', label='Best Fit Line')
plt.xlabel('X2')
plt.ylabel('Y')
plt.title('Regression Line (X2 vs Y)')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()