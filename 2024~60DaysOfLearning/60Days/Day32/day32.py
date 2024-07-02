import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import seaborn as sns

# Sigmoid function
def sigmoid(z):
    """Sigmoid activation function."""
    return 1 / (1 + np.exp(-z))

# Gradient descent function for a single training example
def gradient_descent_single(X, y, w, b, learning_rate, num_iterations):
    """Perform gradient descent for a single training example."""
    m = X.shape[0]
    cost_history = []

    for i in range(num_iterations):
        # Compute the linear combination
        z = np.dot(X, w) + b
        
        # Compute the prediction
        a = sigmoid(z)
        
        # Compute the cost
        cost = -y * np.log(a) - (1 - y) * np.log(1 - a)
        cost_history.append(cost)
        
        # Compute the error term
        dz = a - y
        
        # Compute the gradients
        dw = X.T * dz
        db = dz
        
        # Update the parameters
        w -= learning_rate * dw
        b -= learning_rate * db
    
    return w, b, cost_history

# Example usage for a single training example
X_single = np.array([2, 3])  # Feature vector for a single training example
y_single = 1                 # Label for a single training example
w_single = np.array([0.0, 0.0])  # Initial weights
b_single = 0.0                  # Initial bias
learning_rate = 0.01
num_iterations = 1000

w_single, b_single, cost_history_single = gradient_descent_single(X_single, y_single, w_single, b_single, learning_rate, num_iterations)
print("Weights (Single):", w_single)
print("Bias (Single):", b_single)
print("Cost history (Single):", cost_history_single[-10:])  # Print the last 10 costs


# Gradient descent function for multiple training examples
def gradient_descent_multiple(X, y, w, b, learning_rate, num_iterations):
    """Perform gradient descent for multiple training examples."""
    m = X.shape[0]
    cost_history = []

    for i in range(num_iterations):
        # Compute the linear combination
        z = np.dot(X, w) + b
        
        # Compute the prediction
        a = sigmoid(z)
        
        # Compute the cost
        cost = -np.mean(y * np.log(a) + (1 - y) * np.log(1 - a))
        cost_history.append(cost)
        
        # Compute the error term
        dz = a - y
        
        # Compute the gradients
        dw = np.dot(X.T, dz) / m
        db = np.sum(dz) / m
        
        # Update the parameters
        w -= learning_rate * dw
        b -= learning_rate * db
    
    return w, b, cost_history

# Example usage for multiple training examples
X_multiple = np.array([[1, 2], [2, 3], [3, 4]])  # Feature matrix (each row is a training example)
y_multiple = np.array([0, 1, 1])                 # Labels
w_multiple = np.array([0.0, 0.0])                # Initial weights
b_multiple = 0.0                                 # Initial bias
learning_rate = 0.01
num_iterations = 1000

w_multiple, b_multiple, cost_history_multiple = gradient_descent_multiple(X_multiple, y_multiple, w_multiple, b_multiple, learning_rate, num_iterations)
print("Weights (Multiple):", w_multiple)
print("Bias (Multiple):", b_multiple)
print("Cost history (Multiple):", cost_history_multiple[-10:])  # Print the last 10 costs

# Calculate gradients for a single training example
def calculate_gradients_single(X, y, w, b):
    """Calculate gradients for a single training example."""
    z = np.dot(X, w) + b
    a = sigmoid(z)
    dz = a - y
    dw = X * dz
    db = dz
    return dw, db

# Calculate gradients for single training example
dw_single, db_single = calculate_gradients_single(X_single, y_single, w_single, b_single)

# Plot gradients in 2D for a single training example with increased arrow sizes
plt.figure(figsize=(10, 8))
plt.quiver(0, 0, dw_single[0], dw_single[1], scale=100, color='b', label='Gradient (Weights)', angles='xy', scale_units='xy', width=0.025)
plt.quiver(0, 0, 0, db_single, scale=100, color='r', label='Gradient (Bias)', angles='xy', scale_units='xy', width=0.015)
plt.text(dw_single[0], dw_single[1], f'({dw_single[0]:.2f}, {dw_single[1]:.2f})', fontsize=15, va='bottom', ha='right')
plt.text(0, db_single, f'({0:.2f}, {db_single:.2f})', fontsize=20, va='bottom', ha='right')
plt.xlim(-0.5, 0.5)
plt.ylim(-0.5, 0.5)
plt.xlabel('Weight 1 Gradient')
plt.ylabel('Weight 2 Gradient / Bias Gradient')
plt.title('Gradients Visualization for Single Training Example (Increased Arrow Sizes)')
plt.legend()
plt.grid(True)
plt.show()


# Calculate gradients for multiple training examples
def calculate_gradients_multiple(X, y, w, b):
    """Calculate gradients for multiple training examples."""
    z = np.dot(X, w) + b
    a = sigmoid(z)
    dz = a - y
    dw = np.dot(X.T, dz) / len(y)
    db = np.sum(dz) / len(y)
    return dw, db

# Calculate gradients for multiple training examples
dw_multiple, db_multiple = calculate_gradients_multiple(X_multiple, y_multiple, w_multiple, b_multiple)

# Plot gradients in 3D for multiple training examples
fig = plt.figure(figsize=(12, 10))
ax = fig.add_subplot(111, projection='3d')
ax.quiver(0, 0, 0, dw_multiple[0], dw_multiple[1], 0, color='b', label='Gradient (Weights)', arrow_length_ratio=0.1)
ax.quiver(0, 0, 0, 0, 0, db_multiple, color='r', label='Gradient (Bias)', arrow_length_ratio=0.1)
ax.text(dw_multiple[0], dw_multiple[1], 0, f'({dw_multiple[0]:.2f}, {dw_multiple[1]:.2f}, 0)', fontsize=10, va='bottom', ha='right')
ax.text(0, 0, db_multiple, f'(0, 0, {db_multiple:.2f})', fontsize=10, va='bottom', ha='right')
ax.set_xlim([-0.5, 0.5])
ax.set_ylim([-0.5, 0.5])
ax.set_zlim([-0.5, 0.5])
ax.set_xlabel('Weight 1 Gradient')
ax.set_ylabel('Weight 2 Gradient')
ax.set_zlabel('Bias Gradient')
ax.set_title('Gradients Visualization for Multiple Training Examples')
ax.legend()
plt.show()

# Plot cost history for single training example with markers for each iteration
plt.figure(figsize=(10, 6))
plt.plot(cost_history_single, color='b', marker='o', markersize=5, linestyle='-', linewidth=1)
for i, cost in enumerate(cost_history_single):
    plt.text(i, cost, f'{cost:.2f}', fontsize=8, va='bottom', ha='left')
plt.xlabel('Iterations')
plt.ylabel('Cost')
plt.title('Cost History for Single Training Example')
plt.grid(True)
plt.show()

# Plot cost history for multiple training examples with markers for each iteration
plt.figure(figsize=(10, 6))
plt.plot(cost_history_multiple, color='r', marker='o', markersize=5, linestyle='-', linewidth=1)
for i, cost in enumerate(cost_history_multiple):
    plt.text(i, cost, f'{cost:.2f}', fontsize=8, va='bottom', ha='left')
plt.xlabel('Iterations')
plt.ylabel('Cost')
plt.title('Cost History for Multiple Training Examples')
plt.grid(True)
plt.show()
