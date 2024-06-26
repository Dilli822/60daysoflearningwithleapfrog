import numpy as np
import matplotlib.pyplot as plt
import networkx as nx

# Define the sigmoid activation function
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Define the neural network parameters
weights = np.array([0.1, 0.2, 0.3])  # Weights array
bias = 1.0  # Bias

# Function to compute the output of the neuron
def simple_neuron(inputs):
    z = np.dot(inputs, weights) + bias  # Weighted sum of inputs + bias
    return sigmoid(z)  # Apply sigmoid activation function

# Generate input values for plotting
z_values = np.linspace(-10, 10, 100)  # Range of z values

# Compute sigmoid output for each z value
sigmoid_values = sigmoid(z_values)

# Define ReLU activation function
def ReLU(x):
    return np.maximum(0, x)

# Define inputs, weights, and biases
inputs = np.array([1, 2, 3, 2.5])
weights1 = np.array([0.2, 0.8, 0.5, 1.0])
weights2 = np.array([0.5, 0.91, 0.26, -0.5])
weights3 = np.array([-0.26, 0.27, 0.17, 0.87])
bias1 = 0
bias2 = 0.5
bias3 = 0.5 # Assuming this was intended as bias for the output layer

# Initialize the input for the first layer
current_input = inputs

# Apply ReLU activation iteratively until output is less than 1
while True:
    # Calculate outputs of each layer
    hidden_layer1 = ReLU(np.dot(current_input, weights1) + bias1)
    hidden_layer2 = ReLU(np.dot(hidden_layer1, weights2) + bias2)
    output = ReLU(np.dot(hidden_layer2, weights3) + bias3)
    
    # Print the current output for observation
    print("Current Output:", output)
    
    # Check if all elements in the output array are less than 1
    if np.all(output < 1):
        print("Condition met. Exiting loop.")
        break
    
    # Update current_input to output for the next iteration
    current_input = output

print("Final Output (Sum of all layers until less than 1):", output)

# Define tanh activation function
def tanh(x):
    return np.tanh(x)

# Define inputs, weights, and biases for each layer
inputs = np.array([1.0, 2.0, 3.0])  # Input vector xi
bias1 = np.array([0.1, 0.2, 0.3])   # Bias vector b1 for layer 1
weights1 = np.array([[0.2, 0.3, 0.5], [0.1, 0.7, 0.9], [0.6, 0.4, 0.8]])  # Weight matrix W1 for layer 1

bias2 = np.array([0.4, 0.5, 0.6])   # Bias vector b2 for layer 2
weights2 = np.array([[0.2, 0.5, 0.3], [0.7, 0.1, 0.4], [0.9, 0.8, 0.6]])  # Weight matrix W2 for layer 2

bias3 = np.array([0.7, 0.8, 0.9])   # Bias vector b3 for layer 3
weights3 = np.array([[0.3, 0.6, 0.8], [0.1, 0.4, 0.7], [0.2, 0.5, 0.9]])  # Weight matrix W3 for layer 3

# Calculate outputs of each layer using tanh activation
output1 = tanh(np.dot(weights1, inputs) + bias1)
output2 = tanh(np.dot(weights2, output1) + bias2)
output3 = tanh(np.dot(weights3, output2) + bias3)

# Print outputs
print("Output of Layer 1:", output1)
print("Output of Layer 2:", output2)
print("Output of Layer 3 (Final Output):", output3)

# Create a directed graph
G = nx.DiGraph()

# Add nodes for each layer and neuron
input_nodes = [f'Input {i+1}' for i in range(len(inputs))]
layer1_nodes = [f'Layer 1 Neuron {i+1}' for i in range(output1.shape[0])]
layer2_nodes = [f'Layer 2 Neuron {i+1}' for i in range(output2.shape[0])]
layer3_nodes = [f'Layer 3 Neuron {i+1}' for i in range(output3.shape[0])]

# Add input nodes with biases
G.add_nodes_from(input_nodes, layer='Input', bias=0)
for i, node in enumerate(layer1_nodes):
    G.add_node(node, layer='Layer 1', bias=bias1[i])
for i, node in enumerate(layer2_nodes):
    G.add_node(node, layer='Layer 2', bias=bias2[i])
for i, node in enumerate(layer3_nodes):
    G.add_node(node, layer='Layer 3', bias=bias3[i])

# Add edges representing the flow of activations with weights
for i in range(len(inputs)):
    for j in range(output1.shape[0]):
        G.add_edge(input_nodes[i], layer1_nodes[j], weight=weights1[j, i])

for i in range(output1.shape[0]):
    for j in range(output2.shape[0]):
        G.add_edge(layer1_nodes[i], layer2_nodes[j], weight=weights2[j, i])

for i in range(output2.shape[0]):
    for j in range(output3.shape[0]):
        G.add_edge(layer2_nodes[i], layer3_nodes[j], weight=weights3[j, i])

# Position nodes for visualization
pos = nx.multipartite_layout(G, subset_key='layer')

# Draw the neural network graph
plt.figure(figsize=(12, 8))
# nx.draw(G, pos, with_labels=True, node_size=4000, node_color='skyblue', font_size=10, font_color='black', arrows=True)
nx.draw(G, pos, with_labels=False, node_size=3500, node_color='white', 
        edgecolors='black', font_size=10, font_color='black', arrows=True)

# Add node labels for biases
bias_labels = {node: f'b={data["bias"]:.2f}' for node, data in G.nodes(data=True) if data["bias"] != 0}
nx.draw_networkx_labels(G, pos, labels=bias_labels, font_color='red')

# Add edge weights
edge_labels = {(u, v): f'w={d["weight"]:.2f}' for u, v, d in G.edges(data=True)}
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='green')


# Add the final output values at the bottom of the diagram
output_labels = {node: f'Output={output3[i]:.2f}' for i, node in enumerate(layer3_nodes)}
for node, label in output_labels.items():
    x, y = pos[node]
    plt.text(x, y - 0.12, label, fontsize=12, ha='center', color='purple')

plt.title('Neural Network Architecture')
plt.axis('off')
plt.show()
