import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Define a range of input values
x = np.linspace(-5, 5, 100)

# Activation functions
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def tanh(x):
    return np.tanh(x)

def relu(x):
    return np.maximum(0, x)

def leaky_relu(x, alpha=0.1):
    return np.where(x > 0, x, alpha * x)

def prelu(x, alpha):
    return np.where(x > 0, x, alpha * x)

def elu(x, alpha=1.0):
    return np.where(x > 0, x, alpha * (np.exp(x) - 1))

# Compute activation outputs
sigmoid_output = sigmoid(x)
tanh_output = tanh(x)
relu_output = relu(x)
leaky_relu_output = leaky_relu(x)
prelu_output = prelu(x, 0.1)  # Using alpha = 0.1 for PReLU
elu_output = elu(x)

# Plotting the outputs using subplots
fig, axs = plt.subplots(2, 3, figsize=(18, 10))

# Plot for Sigmoid activation
axs[0, 0].plot(x, sigmoid_output)
axs[0, 0].set_title('Sigmoid Activation')
axs[0, 0].set_xlabel('Input')
axs[0, 0].set_ylabel('Output')

# Plot for Tanh activation
axs[0, 1].plot(x, tanh_output)
axs[0, 1].set_title('Tanh Activation')
axs[0, 1].set_xlabel('Input')
axs[0, 1].set_ylabel('Output')

# Plot for ReLU activation
axs[0, 2].plot(x, relu_output)
axs[0, 2].set_title('ReLU Activation')
axs[0, 2].set_xlabel('Input')
axs[0, 2].set_ylabel('Output')

# Plot for Leaky ReLU activation
axs[1, 0].plot(x, leaky_relu_output)
axs[1, 0].set_title('Leaky ReLU (alpha=0.1) Activation')
axs[1, 0].set_xlabel('Input')
axs[1, 0].set_ylabel('Output')

# Plot for PReLU activation (using alpha = 0.1)
axs[1, 1].plot(x, prelu_output)
axs[1, 1].set_title('PReLU (alpha=0.1) Activation')
axs[1, 1].set_xlabel('Input')
axs[1, 1].set_ylabel('Output')

# Plot for ELU activation
axs[1, 2].plot(x, elu_output)
axs[1, 2].set_title('ELU (alpha=1.0) Activation')
axs[1, 2].set_xlabel('Input')
axs[1, 2].set_ylabel('Output')

plt.tight_layout()
# plt.show()



import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Define custom weights and biases for each layer
np.random.seed(0)  # for reproducibility

# Layer 1 (input layer to hidden layer 1)
weights1 = np.random.randn(1, 10)
bias1 = np.zeros(10)

# Layer 2 (hidden layer 1 to hidden layer 2)
weights2 = np.random.randn(10, 20)
bias2 = np.zeros(20)

# Layer 3 (hidden layer 2 to hidden layer 3)
weights3 = np.random.randn(20, 30)
bias3 = np.zeros(30)

# Layer 4 (hidden layer 3 to hidden layer 4)
weights4 = np.random.randn(30, 20)
bias4 = np.zeros(20)

# Layer 5 (hidden layer 4 to hidden layer 5)
weights5 = np.random.randn(20, 10)
bias5 = np.zeros(10)

# Layer 6 (hidden layer 5 to output layer)
weights6 = np.random.randn(10, 1)
bias6 = np.zeros(1)


# Activation functions
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def tanh(x):
    return np.tanh(x)

def relu(x):
    return np.maximum(0, x)

def leaky_relu(x, alpha=0.1):
    return np.where(x > 0, x, alpha * x)

def prelu(x, alpha):
    return np.where(x > 0, x, alpha * x)

def elu(x, alpha=1.0):
    return np.where(x > 0, x, alpha * (np.exp(x) - 1))


def forward_pass(x):
    # Layer 1
    h1 = np.dot(x, weights1) + bias1
    a1 = sigmoid(h1)

    # Layer 2
    h2 = np.dot(a1, weights2) + bias2
    a2 = tanh(h2)

    # Layer 3
    h3 = np.dot(a2, weights3) + bias3
    a3 = relu(h3)

    # Layer 4
    h4 = np.dot(a3, weights4) + bias4
    a4 = leaky_relu(h4)

    # Layer 5
    h5 = np.dot(a4, weights5) + bias5
    a5 = prelu(h5, alpha=0.1)  # PReLU with alpha=0.1

    # Layer 6 (output layer)
    h6 = np.dot(a5, weights6) + bias6
    y_pred = elu(h6, alpha=0.1)  # ELU with alpha=0.1

    return y_pred.flatten()

# Generate input data (single sample for simplicity)
x = np.array([[1.0]])  # Example input

# Perform forward pass to get predictions
predictions = forward_pass(x)
print("Predictions:", predictions)

# Labels for the layers and corresponding activation functions
layer_labels = ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'Layer 5', 'Output']
activation_functions = [sigmoid, tanh, relu, leaky_relu, prelu, elu]
activation_labels = ['Sigmoid', 'Tanh', 'ReLU', 'Leaky ReLU', 'PReLU (alpha=0.1)', 'ELU (alpha=0.1)']

# Collect all activations
all_activations = []

# Compute activations for each layer
for i in range(len(layer_labels)):
    if i == 0:
        activations = sigmoid(np.dot(x, weights1) + bias1)
    elif i == 1:
        activations = tanh(np.dot(activations, weights2) + bias2)
    elif i == 2:
        activations = relu(np.dot(activations, weights3) + bias3)
    elif i == 3:
        activations = leaky_relu(np.dot(activations, weights4) + bias4)
    elif i == 4:
        activations = prelu(np.dot(activations, weights5) + bias5, alpha=0.1)
    elif i == 5:
        activations = elu(np.dot(activations, weights6) + bias6, alpha=0.1)
    
    all_activations.append(activations.flatten())

# Find the maximum length of activations
max_length = max(len(activation) for activation in all_activations)

# Pad activations to max_length
for i in range(len(all_activations)):
    current_length = len(all_activations[i])
    if current_length < max_length:
        padding = max_length - current_length
        all_activations[i] = np.pad(all_activations[i], (0, padding), mode='constant')

# Convert to numpy array after padding
all_activations = np.array(all_activations)

# Create 3D plot
fig = plt.figure(figsize=(12, 10))
ax = fig.add_subplot(111, projection='3d')

# Plotting activations as lines in 3D
for i in range(len(layer_labels) - 1):
    current_activations = all_activations[i]
    next_activations = all_activations[i + 1]
    
    neuron_indices = np.arange(1, max_length + 1)
    layer_indices = np.full_like(neuron_indices, i + 1)
    
    ax.plot(layer_indices, neuron_indices, current_activations, marker='o', label=f'{layer_labels[i]} ({activation_labels[i]})')
    ax.plot(layer_indices + 1, neuron_indices, next_activations, marker='o', label=f'{layer_labels[i+1]} ({activation_labels[i+1]})')

# Customize labels and title
ax.set_xlabel('Layer')
ax.set_ylabel('Neuron')
ax.set_zlabel('Activation Value')
ax.set_xticks(np.arange(1, len(layer_labels) + 1))
ax.set_xticklabels(layer_labels)
ax.set_title('Activations Across Layers')
ax.legend()

plt.tight_layout()
plt.show()