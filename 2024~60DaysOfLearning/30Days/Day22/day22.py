import sympy as sp
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt

# Define variables
x, y = sp.symbols('x y')

# Define the function
f = x**2 * y + 3*x*y + y**2

# Compute partial derivatives
partial_x = sp.diff(f, x)
partial_y = sp.diff(f, y)

print("Partial derivative with respect to x:", partial_x)
print("Partial derivative with respect to y:", partial_y)

# Define the function and its gradient
def f(x):
    return x**2

def gradient_f(x):
    return 2 * x

# Gradient descent algorithm with history tracking
def gradient_descent(starting_point, learning_rate, num_iterations):
    x = starting_point
    x_history = [x]
    for _ in range(num_iterations):
        grad = gradient_f(x)
        x = x - learning_rate * grad
        x_history.append(x)
    return x, x_history

# Parameters
starting_point = 10.0
# learning rate is like step to ascent the steep
learning_rate = 0.1
num_iterations = 20  # Adjust the number of iterations as needed

# Perform gradient descent
min_x, x_history = gradient_descent(starting_point, learning_rate, num_iterations)

# Generate values for plotting the function
x_vals = np.linspace(-starting_point, starting_point, 400)
y_vals = f(x_vals)

# Plotting the function plot without gradient descent
plt.figure(figsize=(8, 6))
plt.plot(x_vals, y_vals, label='f(x) = x^2')
plt.scatter([starting_point], [f(starting_point)], color='red', label='Starting Point', marker='o', s=100)
plt.annotate(f'Starting Point: ({starting_point}, {f(starting_point)})', xy=(starting_point, f(starting_point)), xytext=(starting_point - 5, f(starting_point) + 50),
            arrowprops=dict(facecolor='black', arrowstyle='->'),
            color='red', fontsize=12
            )
plt.title('Function Plot (f(x) = x^2)')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.tight_layout()
# plt.show()

# Plotting the gradient descent path with annotated points
plt.figure(figsize=(8, 6))
plt.plot(x_vals, y_vals, label='f(x) = x^2')
plt.scatter(x_history, f(np.array(x_history)), color='red', label='Gradient Descent Points', marker='o', s=50)

for i, txt in enumerate(x_history):
    if txt >= 1.5:  # Only annotate points where x >= 0.2
        plt.annotate(f'{i}: ({txt:.2f}, {f(txt):.2f})', (txt, f(txt)), textcoords="offset points", xytext=(-15,-10), ha='center', fontsize=8)

plt.annotate(f'Minimum Point: ({min_x:.2f}, {f(min_x):.2f})', xy=(min_x, f(min_x)), xytext=(min_x - 5, f(min_x) + 50),
            arrowprops=dict(arrowstyle='->'),
            )

plt.title('Gradient Descent Optimization')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.tight_layout()
# plt.show()

print("The minimum value of x found by gradient descent is:", min_x)


# Define the function and its gradient
def f3d(x, y):
    return x**2 * y + 3*x*y + y**2

def gradient_f3d(x, y):
    grad_x = 2*x*y + 3*y  # Partial derivative of f with respect to x
    grad_y = x**2 + 3*x + 2*y  # Partial derivative of f with respect to y
    return grad_x, grad_y

# Gradient descent algorithm in 2D
def gradient_descent_2d(starting_point, learning_rate, num_iterations):
    x, y = starting_point
    x_history = [x]
    y_history = [y]
    for _ in range(num_iterations):
        grad_x, grad_y = gradient_f3d(x, y)
        x = x - learning_rate * grad_x
        y = y - learning_rate * grad_y
        x_history.append(x)
        y_history.append(y)
    return x, y, x_history, y_history

# Parameters
starting_point = (5.0, 5.0)
learning_rate = 0.01
num_iterations = 100

# Perform gradient descent
min_x, min_y, x_history, y_history = gradient_descent_2d(starting_point, learning_rate, num_iterations)

# Generate data for plotting the function surface
x_vals = np.linspace(-10, 10, 100)
y_vals = np.linspace(-10, 10, 100)
X, Y = np.meshgrid(x_vals, y_vals)
Z = f3d(X, Y)

# Plotting in 3D
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')

# Plot the surface
ax.plot_surface(X, Y, Z, cmap='viridis', alpha=0.8)

# Plot the gradient descent path
ax.scatter(x_history, y_history, f3d(np.array(x_history), np.array(y_history)), color='red', label='Gradient Descent Points', s=50)

# Annotate the minimum point
ax.text(min_x, min_y, f3d(min_x, min_y), f'Minimum Point: ({min_x:.2f}, {min_y:.2f}, {f3d(min_x, min_y):.2f})', color='black')

# Set labels and title
ax.set_title('Gradient Descent Optimization in 3D')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.set_zlabel('f(x, y)')
ax.legend()

# Show plot
plt.tight_layout()
plt.show()

print("The minimum value of (x, y) found by gradient descent is:", (min_x, min_y))
print("Minimum value of f(x, y) found by gradient descent is:", f3d(min_x, min_y))
