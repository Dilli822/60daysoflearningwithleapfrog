
import numpy as np
import matplotlib.pyplot as plt
import networkx as nx

# 1. Data Preparation
np.random.seed(42)  # For reproducibility

# Generating synthetic data
m = 100  # Number of examples
n_x = 2  # Number of input features
X = np.random.randn(n_x, m)  # Input features (n_x by m)

# Forward propagation parameters
n_h1 = 5  # Number of hidden units in layer 1
n_h2 = 4  # Number of hidden units in layer 2
n_h3 = 3  # Number of hidden units in layer 3
n_h4 = 2  # Number of hidden units in layer 4
n_h5 = 3  # Number of hidden units in layer 5
n_y = 1  # Number of output units

# Initialize weights and biases for a 5 hidden layer neural network
W1 = np.random.randn(n_h1, n_x) * 0.01
b1 = np.zeros((n_h1, 1))
W2 = np.random.randn(n_h2, n_h1) * 0.01
b2 = np.zeros((n_h2, 1))
W3 = np.random.randn(n_h3, n_h2) * 0.01
b3 = np.zeros((n_h3, 1))
W4 = np.random.randn(n_h4, n_h3) * 0.01
b4 = np.zeros((n_h4, 1))
W5 = np.random.randn(n_h5, n_h4) * 0.01
b5 = np.zeros((n_h5, 1))
W6 = np.random.randn(n_y, n_h5) * 0.01
b6 = np.zeros((n_y, 1))

# 2. Forward Propagation (Vectorized)
Z1 = np.dot(W1, X) + b1
A1 = np.tanh(Z1)
Z2 = np.dot(W2, A1) + b2
A2 = np.tanh(Z2)
Z3 = np.dot(W3, A2) + b3
A3 = np.tanh(Z3)
Z4 = np.dot(W4, A3) + b4
A4 = np.tanh(Z4)
Z5 = np.dot(W5, A4) + b5
A5 = np.tanh(Z5)
Z6 = np.dot(W6, A5) + b6
A6 = 1 / (1 + np.exp(-Z6))

# Plotting the input data
plt.figure(figsize=(10, 5))
plt.scatter(X[0, :], X[1, :], c='blue', label='Input Data')
plt.xlabel('x1')
plt.ylabel('x2')
plt.title('Input Data Distribution')
plt.legend()
plt.show()

# Plotting the output of the neural network
plt.figure(figsize=(10, 5))
plt.scatter(A6[0, :], np.zeros(A6.shape[1]), c='red', label='Output Data')
plt.xlabel('Output Value')
plt.ylabel('Frequency')
plt.title('Output Data Distribution after Forward Propagation')
plt.legend()
plt.show()

# 3. Explanation of Dimensions
print("Dimensions of matrices and vectors:")
print(f"W1: {W1.shape}")  # W1 is n_h1 by n_x
print(f"b1: {b1.shape}")  # b1 is n_h1 by 1
print(f"Z1: {Z1.shape}")  # Z1 is n_h1 by m
print(f"A1: {A1.shape}")  # A1 is n_h1 by m
print(f"W2: {W2.shape}")  # W2 is n_h2 by n_h1
print(f"b2: {b2.shape}")  # b2 is n_h2 by 1
print(f"Z2: {Z2.shape}")  # Z2 is n_h2 by m
print(f"A2: {A2.shape}")  # A2 is n_h2 by m
print(f"W3: {W3.shape}")  # W3 is n_h3 by n_h2
print(f"b3: {b3.shape}")  # b3 is n_h3 by 1
print(f"Z3: {Z3.shape}")  # Z3 is n_h3 by m
print(f"A3: {A3.shape}")  # A3 is n_h3 by m
print(f"W4: {W4.shape}")  # W4 is n_h4 by n_h3
print(f"b4: {b4.shape}")  # b4 is n_h4 by 1
print(f"Z4: {Z4.shape}")  # Z4 is n_h4 by m
print(f"A4: {A4.shape}")  # A4 is n_h4 by m
print(f"W5: {W5.shape}")  # W5 is n_h5 by n_h4
print(f"b5: {b5.shape}")  # b5 is n_h5 by 1
print(f"Z5: {Z5.shape}")  # Z5 is n_h5 by m
print(f"A5: {A5.shape}")  # A5 is n_h5 by m
print(f"W6: {W6.shape}")  # W6 is n_y by n_h5
print(f"b6: {b6.shape}")  # b6 is n_y by 1
print(f"Z6: {Z6.shape}")  # Z6 is n_y by m
print(f"A6: {A6.shape}")  # A6 is n_y by m

# 4. Visualizing the Neural Network using networkx
G = nx.DiGraph()

# Add nodes
input_layer = ['x1', 'x2']
hidden_layer1 = [f'h1_{i+1}' for i in range(n_h1)]
hidden_layer2 = [f'h2_{i+1}' for i in range(n_h2)]
hidden_layer3 = [f'h3_{i+1}' for i in range(n_h3)]
hidden_layer4 = [f'h4_{i+1}' for i in range(n_h4)]
hidden_layer5 = [f'h5_{i+1}' for i in range(n_h5)]
output_layer = ['y']

for node in input_layer + hidden_layer1 + hidden_layer2 + hidden_layer3 + hidden_layer4 + hidden_layer5 + output_layer:
    G.add_node(node)

# Add edges with weights
edges = [(f'x{i+1}', f'h1_{j+1}', {'weight': W1[j, i], 'bias': b1[j, 0]}) for i in range(n_x) for j in range(n_h1)]
edges += [(f'h1_{i+1}', f'h2_{j+1}', {'weight': W2[j, i], 'bias': b2[j, 0]}) for i in range(n_h1) for j in range(n_h2)]
edges += [(f'h2_{i+1}', f'h3_{j+1}', {'weight': W3[j, i], 'bias': b3[j, 0]}) for i in range(n_h2) for j in range(n_h3)]
edges += [(f'h3_{i+1}', f'h4_{j+1}', {'weight': W4[j, i], 'bias': b4[j, 0]}) for i in range(n_h3) for j in range(n_h4)]
edges += [(f'h4_{i+1}', f'h5_{j+1}', {'weight': W5[j, i], 'bias': b5[j, 0]}) for i in range(n_h4) for j in range(n_h5)]
edges += [(f'h5_{i+1}', 'y', {'weight': W6[0, i], 'bias': b6[0, 0]}) for i in range(n_h5)]  # W6[0, i] since n_y=1
G.add_edges_from(edges)

# Draw the network with labels
layer_gap = 2
node_gap = 6

# Positioning nodes
pos = {}
# Input layer positions
pos['x1'] = (0, 1)
pos['x2'] = (0, -1)
# Hidden layers positions
for i in range(n_h1):
    pos[f'h1_{i+1}'] = (layer_gap, node_gap - i * 2 * node_gap / (n_h1 - 1))
for i in range(n_h2):
    pos[f'h2_{i+1}'] = (2 * layer_gap, node_gap - i * 2 * node_gap / (n_h2 - 1))
for i in range(n_h3):
    pos[f'h3_{i+1}'] = (3 * layer_gap, node_gap - i * 2 * node_gap / (n_h3 - 1))
for i in range(n_h4):
    pos[f'h4_{i+1}'] = (4 * layer_gap, node_gap - i * 2 * node_gap / (n_h4 - 1))
for i in range(n_h5):
    pos[f'h5_{i+1}'] = (5 * layer_gap, node_gap - i * 2 * node_gap / (n_h5 - 1))
pos['y'] = (6 * layer_gap, 0)

# Customizing node colors and border colors
node_color = ['lightblue'] * len(input_layer) + ['lightgreen'] * (n_h1 + n_h2 + n_h3 + n_h4 + n_h5) + ['lightcoral']
node_border_color = ['blue'] * len(input_layer) + ['green'] * (n_h1 + n_h2 + n_h3 + n_h4 + n_h5) + ['red']

# Draw the network
plt.figure(figsize=(12, 6))
node_labels = {node: f"{node}\nBias: {G.nodes[node]['bias']:.2f}" if 'bias' in G.nodes[node] else node for node in G.nodes}
nx.draw(G, pos, with_labels=True, labels=node_labels, node_size=2000, node_color=node_color, edge_color='black',
        font_size=10, font_weight='bold', arrows=True, node_shape='o', linewidths=2, edgecolors=node_border_color)
edge_labels = {(edge[0], edge[1]): f"Weight: {G.edges[edge]['weight']:.2f}" for edge in G.edges}
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='red', font_size=8)
plt.title('Neural Network Architecture with Weights and Biases')
plt.show()
