import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Define the function and its gradient
def f(x):
    return x**2

def gradient_f(x):
    return 2 * x

# Standard Gradient Descent
def gradient_descent(starting_point, learning_rate, num_iterations):
    x = starting_point
    x_history = [x]
    for i in range(num_iterations):
        grad = gradient_f(x)
        x = x - learning_rate * grad
        x_history.append(x)
    return x, x_history

# Stochastic Gradient Descent with random dataset
def stochastic_gradient_descent(data, starting_point, learning_rate, num_iterations):
    x = starting_point
    x_history = [x]
    for i in range(num_iterations):
        random_index = np.random.randint(0, len(data))
        grad = gradient_f(data[random_index])
        x = x - learning_rate * grad
        x_history.append(x)
    return x, x_history

# Batch Gradient Descent with random dataset
def batch_gradient_descent(data, starting_point, learning_rate, num_iterations):
    x = starting_point
    x_history = [x]
    for i in range(num_iterations):
        grad = np.mean([gradient_f(xi) for xi in data])
        x = x - learning_rate * grad
        x_history.append(x)
    return x, x_history

# Parameters
starting_point = 10.0
learning_rate = 0.1
num_iterations = 100

# Data for SGD and BGD
data = np.random.uniform(-10, 10, 100)

# Perform gradient descent
# Your custom data
# your_data = np.array([1.0, 2.0, 3.0, 4.0, 5.0]) 
# min_x_gd, x_history_gd = gradient_descent(your_data, starting_point, learning_rate, num_iterations)
min_x_gd, x_history_gd = gradient_descent(starting_point, learning_rate, num_iterations)
min_x_sgd, x_history_sgd = stochastic_gradient_descent(data, starting_point, learning_rate, num_iterations)
min_x_bgd, x_history_bgd = batch_gradient_descent(data, starting_point, learning_rate, num_iterations)

# Generate values for plotting the function
x_vals = np.linspace(-starting_point, starting_point, 400)
y_vals = f(x_vals)

# Plot without applying gradient descent
plt.figure(figsize=(12, 8))
plt.plot(x_vals, y_vals, label='f(x) = x^2')
plt.scatter([starting_point], [f(starting_point)], color='red', label='Starting Point', marker='o', s=100)
plt.annotate(f'Starting Point: ({starting_point}, {f(starting_point)})', xy=(starting_point, f(starting_point)), xytext=(starting_point - 5, f(starting_point) + 50),
             arrowprops=dict(facecolor='black', arrowstyle='->'), color='red', fontsize=12)
plt.title('Function Plot (f(x) = x^2) Without Applying Gradients')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

# Plotting the results of standard gradient descent
plt.figure(figsize=(12, 8))
plt.plot(x_vals, y_vals, label='f(x) = x^2')
plt.scatter(x_history_gd, f(np.array(x_history_gd)), color='red', label='Gradient Descent', marker='o', s=50)
plt.annotate(f'GD Final: ({min_x_gd:.2f}, {f(min_x_gd):.2f})', xy=(min_x_gd, f(min_x_gd)), xytext=(min_x_gd - 5, f(min_x_gd) + 50),
             arrowprops=dict(arrowstyle='->'), color='red')
plt.title('Standard Gradient Descent Optimization')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

# Plotting the results of stochastic gradient descent
plt.figure(figsize=(12, 8))
plt.plot(x_vals, y_vals, label='f(x) = x^2')
plt.scatter(x_history_sgd, f(np.array(x_history_sgd)), color='green', label='Stochastic Gradient Descent', marker='x', s=50)
plt.annotate(f'SGD Final: ({min_x_sgd:.2f}, {f(min_x_sgd):.2f})', xy=(min_x_sgd, f(min_x_sgd)), xytext=(min_x_sgd - 5, f(min_x_sgd) + 50),
             arrowprops=dict(arrowstyle='->'), color='green')
plt.title('Stochastic Gradient Descent Optimization')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

# Plotting the results of batch gradient descent
plt.figure(figsize=(12, 8))
plt.plot(x_vals, y_vals, label='f(x) = x^2')
plt.scatter(x_history_bgd, f(np.array(x_history_bgd)), color='blue', label='Batch Gradient Descent', marker='s', s=50)
plt.annotate(f'BGD Final: ({min_x_bgd:.2f}, {f(min_x_bgd):.2f})', xy=(min_x_bgd, f(min_x_bgd)), xytext=(min_x_bgd - 5, f(min_x_bgd) + 50),
             arrowprops=dict(arrowstyle='->'), color='blue')
plt.title('Batch Gradient Descent Optimization')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

print("The minimum value of x found by standard gradient descent is:", min_x_gd)
print("The minimum value of x found by stochastic gradient descent is:", min_x_sgd)
print("The minimum value of x found by batch gradient descent is:", min_x_bgd)


# Data for SGD and BGD
data = np.random.uniform(-10, 10, 100)

# Perform gradient descent
min_x_gd, x_history_gd = gradient_descent(starting_point, learning_rate, num_iterations)
min_x_sgd, x_history_sgd = stochastic_gradient_descent(data, starting_point, learning_rate, num_iterations)
min_x_bgd, x_history_bgd = batch_gradient_descent(data, starting_point, learning_rate, num_iterations)

# Generate values for plotting the function
x_vals = np.linspace(-starting_point, starting_point, 400)
y_vals = f(x_vals)

# Plotting the results in 3D
fig = plt.figure(figsize=(18, 6))

# Plot for Standard Gradient Descent
ax1 = fig.add_subplot(131, projection='3d')
ax1.plot(x_history_gd, f(np.array(x_history_gd)), range(len(x_history_gd)), label='Gradient Descent', color='red')
ax1.scatter(x_history_gd[-1], f(min_x_gd), len(x_history_gd) - 1, color='red', marker='o', s=100, label='Final Point')
ax1.set_title('Standard Gradient Descent Optimization')
ax1.set_xlabel('x')
ax1.set_ylabel('f(x)')
ax1.set_zlabel('Iteration')
ax1.legend()

# Plot for Stochastic Gradient Descent
ax2 = fig.add_subplot(132, projection='3d')
ax2.plot(x_history_sgd, f(np.array(x_history_sgd)), range(len(x_history_sgd)), label='Stochastic Gradient Descent', color='green')
ax2.scatter(x_history_sgd[-1], f(min_x_sgd), len(x_history_sgd) - 1, color='green', marker='x', s=100, label='Final Point')
ax2.set_title('Stochastic Gradient Descent Optimization')
ax2.set_xlabel('x')
ax2.set_ylabel('f(x)')
ax2.set_zlabel('Iteration')
ax2.legend()

# Plot for Batch Gradient Descent
ax3 = fig.add_subplot(133, projection='3d')
ax3.plot(x_history_bgd, f(np.array(x_history_bgd)), range(len(x_history_bgd)), label='Batch Gradient Descent', color='blue')
ax3.scatter(x_history_bgd[-1], f(min_x_bgd), len(x_history_bgd) - 1, color='blue', marker='s', s=100, label='Final Point')
ax3.set_title('Batch Gradient Descent Optimization')
ax3.set_xlabel('x')
ax3.set_ylabel('f(x)')
ax3.set_zlabel('Iteration')
ax3.legend()

plt.tight_layout()
plt.show()

print("The minimum value of x found by standard gradient descent is:", min_x_gd)
print("The minimum value of x found by stochastic gradient descent is:", min_x_sgd)
print("The minimum value of x found by batch gradient descent is:", min_x_bgd)
