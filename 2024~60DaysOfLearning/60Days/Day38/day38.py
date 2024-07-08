import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # Importing 3D plotting tools

# Generate synthetic data
np.random.seed(0)
m = 1000  # number of examples
n_x = 2  # number of input features
X = np.random.randn(n_x, m)
Y = (np.dot([2, -3], X) > 0).astype(int).reshape(1, m)

# Activation functions
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def tanh(z):
    return np.tanh(z)

def relu(z):
    return np.maximum(0, z)

def leaky_relu(z, alpha=0.01):
    return np.where(z > 0, z, alpha * z)

# Gradients of activation functions
def sigmoid_grad(z):
    return sigmoid(z) * (1 - sigmoid(z))

def tanh_grad(z):
    return 1 - np.tanh(z)**2

def relu_grad(z):
    return np.where(z > 0, 1, 0)

def leaky_relu_grad(z, alpha=0.01):
    return np.where(z > 0, 1, alpha)

# Initialize parameters
def initialize_parameters(n_x, n_h, n_y):
    np.random.seed(1)
    W1 = np.random.randn(n_h, n_x) * 0.01
    b1 = np.zeros((n_h, 1))
    W2 = np.random.randn(n_y, n_h) * 0.01
    b2 = np.zeros((n_y, 1))
    return {"W1": W1, "b1": b1, "W2": W2, "b2": b2}

# Forward propagation
def forward_propagation(X, parameters, activation_func):
    W1 = parameters['W1']
    b1 = parameters['b1']
    W2 = parameters['W2']
    b2 = parameters['b2']
    
    Z1 = np.dot(W1, X) + b1
    A1 = activation_func(Z1)
    Z2 = np.dot(W2, A1) + b2
    A2 = sigmoid(Z2)
    
    cache = {"Z1": Z1, "A1": A1, "Z2": Z2, "A2": A2}
    return A2, cache

# Compute cost
def compute_cost(A2, Y):
    m = Y.shape[1]
    cost = -np.sum(Y * np.log(A2) + (1 - Y) * np.log(1 - A2)) / m
    return np.squeeze(cost)

# Backward propagation
def backward_propagation(parameters, cache, X, Y, activation_grad):
    m = X.shape[1]
    W1 = parameters['W1']
    W2 = parameters['W2']
    
    A1 = cache['A1']
    A2 = cache['A2']
    
    dZ2 = A2 - Y
    dW2 = np.dot(dZ2, A1.T) / m
    db2 = np.sum(dZ2, axis=1, keepdims=True) / m
    
    dA1 = np.dot(W2.T, dZ2)
    dZ1 = dA1 * activation_grad(cache['Z1'])
    dW1 = np.dot(dZ1, X.T) / m
    db1 = np.sum(dZ1, axis=1, keepdims=True) / m
    
    grads = {"dW1": dW1, "db1": db1, "dW2": dW2, "db2": db2}
    return grads

# Update parameters
def update_parameters(parameters, grads, learning_rate=0.01):
    W1 = parameters['W1']
    b1 = parameters['b1']
    W2 = parameters['W2']
    b2 = parameters['b2']
    
    dW1 = grads['dW1']
    db1 = grads['db1']
    dW2 = grads['dW2']
    db2 = grads['db2']
    
    W1 -= learning_rate * dW1
    b1 -= learning_rate * db1
    W2 -= learning_rate * dW2
    b2 -= learning_rate * db2
    
    parameters = {"W1": W1, "b1": b1, "W2": W2, "b2": b2}
    return parameters

# Neural network model
def nn_model(X, Y, n_h, num_iterations=10000, learning_rate=0.01, activation_func=relu, activation_grad=relu_grad):
    n_x = X.shape[0]
    n_y = Y.shape[0]
    parameters = initialize_parameters(n_x, n_h, n_y)
    
    costs = []
    
    for i in range(num_iterations):
        A2, cache = forward_propagation(X, parameters, activation_func)
        cost = compute_cost(A2, Y)
        grads = backward_propagation(parameters, cache, X, Y, activation_grad)
        parameters = update_parameters(parameters, grads, learning_rate)
        
        if i % 1000 == 0:
            costs.append(cost)
            print(f"Iteration {i} cost: {cost}")
    
    return parameters, costs

def plot_decision_boundary(model, X, Y, activation_func, activation_grad):
    # Define the boundaries of the plot
    x_min, x_max = X[0, :].min() - 1, X[0, :].max() + 1
    y_min, y_max = X[1, :].min() - 1, X[1, :].max() + 1
    
    # Generate a mesh grid of points
    xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.01), np.arange(y_min, y_max, 0.01))
    
    # Predict the model's output for each point on the mesh grid
    Z = model(np.c_[xx.ravel(), yy.ravel()].T, activation_func, activation_grad)
    Z = Z.reshape(xx.shape)
    
    # Plot the decision boundary
    plt.contourf(xx, yy, Z, alpha=0.8)
    
    # Plot the data points
    plt.scatter(X[0, :], X[1, :], c=Y, edgecolors='k', marker='o')
    
    # Add labels and titles
    plt.xlabel('Feature 1')
    plt.ylabel('Feature 2')
    plt.title('Decision Boundary Plot')
    
    # Show the plot
    plt.show()


def plot_decision_boundary_3d(model, X, Y, activation_func, activation_grad):
    # Define the boundaries of the plot
    x_min, x_max = X[0, :].min() - 1, X[0, :].max() + 1
    y_min, y_max = X[1, :].min() - 1, X[1, :].max() + 1
    
    # Generate a mesh grid of points
    xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.1), np.arange(y_min, y_max, 0.1))
    
    # Predict the model's output for each point on the mesh grid
    Z = model(np.c_[xx.ravel(), yy.ravel()].T, activation_func, activation_grad)
    Z = Z.reshape(xx.shape)
    
    # Plot the decision boundary in 3D
    fig = plt.figure(figsize=(10, 8))
    ax = fig.add_subplot(111, projection='3d')
    ax.plot_surface(xx, yy, Z, cmap='viridis', alpha=0.8)
    
    # Plot the data points
    ax.scatter(X[0, :], X[1, :], c=Y, edgecolors='k', marker='o')
    
    # Add labels and titles
    ax.set_xlabel('Feature 1')
    ax.set_ylabel('Feature 2')
    ax.set_zlabel('Prediction')
    ax.set_title('Decision Boundary Plot (3D)')
    
    # Show the plot
    plt.show()
    
# Model function to be used for plotting
def model(X, activation_func, activation_grad):
    A2, _ = forward_propagation(X, trained_parameters, activation_func)
    return (A2 > 0.5).astype(int)

# Train and compare the models
activations = {'Sigmoid': (sigmoid, sigmoid_grad), 'Tanh': (tanh, tanh_grad), 'ReLU': (relu, relu_grad), 'Leaky ReLU': (leaky_relu, leaky_relu_grad)}
n_h = 5

for activation_name, (activation_func, activation_grad) in activations.items():
    print(f"Training with {activation_name} activation...")
    trained_parameters, costs = nn_model(X, Y, n_h, num_iterations=10000, learning_rate=0.01, activation_func=activation_func, activation_grad=activation_grad)
    plt.plot(costs, label=activation_name)

plt.ylabel('Cost')
plt.xlabel('Iterations (per hundreds)')
plt.title('Cost reduction over time')
plt.legend()
plt.show()



# Plot decision boundaries in 3D
for activation_name, (activation_func, activation_grad) in activations.items():
    print(f"Decision boundary with {activation_name} activation:")
    plot_decision_boundary_3d(model, X, Y, activation_func, activation_grad)
    plot_decision_boundary(model, X, Y, activation_func, activation_grad)