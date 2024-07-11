import matplotlib.pyplot as plt
import networkx as nx
from mpl_toolkits.mplot3d import Axes3D

# Create a 3D NetworkX graph
G = nx.DiGraph()

# Define nodes for layers
input_layer = ['x1', 'x2']
hidden_layer1 = [f'h1_{i+1}' for i in range(5)]
hidden_layer2 = [f'h2_{i+1}' for i in range(4)]
hidden_layer3 = [f'h3_{i+1}' for i in range(3)]
hidden_layer4 = [f'h4_{i+1}' for i in range(2)]
hidden_layer5 = [f'h5_{i+1}' for i in range(3)]
output_layer = ['y']

# Add nodes to the graph
G.add_nodes_from(input_layer + hidden_layer1 + hidden_layer2 + hidden_layer3 + hidden_layer4 + hidden_layer5 + output_layer)

# Define edges between nodes
edges = []
edges += [('x1', f'h1_{i+1}') for i in range(5)]
edges += [('x2', f'h1_{i+1}') for i in range(5)]
edges += [(f'h1_{i+1}', f'h2_{j+1}') for i in range(5) for j in range(4)]
edges += [(f'h2_{i+1}', f'h3_{j+1}') for i in range(4) for j in range(3)]
edges += [(f'h3_{i+1}', f'h4_{j+1}') for i in range(3) for j in range(2)]
edges += [(f'h4_{i+1}', f'h5_{j+1}') for i in range(2) for j in range(3)]
edges += [(f'h5_{i+1}', 'y') for i in range(3)]

# Add edges to the graph
G.add_edges_from(edges)

# Define positions for each node in 3D space
pos = {}
# Input layer positions
pos['x1'] = (0, 0, 0)
pos['x2'] = (0, 0, 1)
# Hidden layers positions
layer_gap = 2
node_gap = 6
for i in range(5):
    pos[f'h1_{i+1}'] = (1 * layer_gap, node_gap - i * 2 * node_gap / (5 - 1), 0.5)
for i in range(4):
    pos[f'h2_{i+1}'] = (2 * layer_gap, node_gap - i * 2 * node_gap / (4 - 1), 0.5)
for i in range(3):
    pos[f'h3_{i+1}'] = (3 * layer_gap, node_gap - i * 2 * node_gap / (3 - 1), 0.5)
for i in range(2):
    pos[f'h4_{i+1}'] = (4 * layer_gap, node_gap - i * 2 * node_gap / (2 - 1), 0.5)
for i in range(3):
    pos[f'h5_{i+1}'] = (5 * layer_gap, node_gap - i * 2 * node_gap / (3 - 1), 0.5)
pos['y'] = (6 * layer_gap, 0, 0.5)

# Create lists for node colors and labels
node_colors = []
labels = {}

# Assign colors and labels based on layers
for node in G.nodes:
    if node in input_layer:
        node_colors.append('lightblue')  # Input layer nodes color
        labels[node] = f'{node}'
    elif node in output_layer:
        node_colors.append('lightgreen')  # Output layer node color
        labels[node] = f'{node}'
    else:
        node_colors.append('lightcoral')  # Hidden layer nodes color
        labels[node] = f'{node}'

# Plotting the 3D graph
fig = plt.figure(figsize=(12, 8))
ax = fig.add_subplot(111, projection='3d')

# Draw nodes
for node, color in zip(G.nodes, node_colors):
    x, y, z = pos[node]
    ax.scatter(x, y, z, color=color, s=300, edgecolors='black', linewidths=2, label=node)

# Draw edges
for edge in G.edges:
    x1, y1, z1 = pos[edge[0]]
    x2, y2, z2 = pos[edge[1]]
    ax.plot([x1, x2], [y1, y2], [z1, z2], color='gray', alpha=0.5)

# Add labels
for node, (x, y, z) in pos.items():
    ax.text(x, y, z, labels[node], color='black', fontsize=12, ha='center', va='center')

# Set plot parameters
ax.set_xlabel('X Axis')
ax.set_ylabel('Y Axis')
ax.set_zlabel('Z Axis')
ax.set_title('3D Neural Network Architecture')

# Hide background axes and graph box
ax.xaxis.line.set_color((1.0, 1.0, 1.0, 0.0))  # Hides the x-axis line
ax.yaxis.line.set_color((1.0, 1.0, 1.0, 0.0))  # Hides the y-axis line
ax.zaxis.line.set_color((1.0, 1.0, 1.0, 0.0))  # Hides the z-axis line
ax.set_axis_off()  # Hides the axes completely

# Add subtitles for node colors
subtitles = [
    f'Light Blue: Input Layer ({", ".join(input_layer)})',
    f'Light Coral: Hidden Layers ({", ".join(hidden_layer1 + hidden_layer2 + hidden_layer3 + hidden_layer4 + hidden_layer5)})',
    f'Light Green: Output Layer ({", ".join(output_layer)})'
]
fig.text(0.5, 0.05, '\n'.join(subtitles), ha='center', fontsize=12)

# Show plot
plt.legend()
plt.show()


