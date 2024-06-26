import numpy as np
import matplotlib.pyplot as plt
import networkx as nx

# Single input vector (training sample)
inputs = [1, 2, 3, 2.5]
inputs_single = inputs

# Weights for three neurons, each with four input connections
weights = [
    [0.2, 0.8, -0.5, 1.0],
    [0.5, -0.91, 0.26, -0.5],
    [-0.26, -0.27, 0.17, 0.87]
]

# Biases for the three neurons
biases = [2, 3, 0.5]

# Calculate output for a single training sample
output_single = np.dot(weights, inputs) + biases
print("Output for single training sample:", output_single)

# Batch of input vectors (3 training samples)
inputs_batch = [
    [1, 2, 3, 2.5],
    [2.0, 5.0, -1.0, 2.0],
    [-1.5, 2.7, 3.3, -0.8]
]

# Weights for three neurons, each with four input connections
weights = [
    [0.12, 0.8, -0.5, 1.0],
    [0.5, -0.91, 0.26, -0.5],
    [-0.26, -0.27, 0.17, 0.87]
]

# Biases for the three neurons
biases = [2, 3, 0.5]

# Calculate output for a batch of training samples
output_batch = np.dot(inputs_batch, np.array(weights).T) + biases
print("Output for batch of training samples:", output_batch)

# Plotting the results
plt.figure(figsize=(12, 6))

# Plot for single training sample
plt.subplot(1, 2, 1)
neuron_indices = range(len(output_single))
bars = plt.bar(neuron_indices, output_single, color='b')
plt.xlabel('Neuron')
plt.ylabel('Output')
plt.title('Single Training Sample')
# Label the values
for bar in bars:
    yval = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2.0, yval, round(yval, 2), va='bottom') 

# Plot for batch of training samples
plt.subplot(1, 2, 2)
for i, output in enumerate(output_batch):
    plt.plot(neuron_indices, output, label=f'Sample {i+1}', marker='o')
    # Label the values
    for j, value in enumerate(output):
        plt.text(j, value, round(value, 2), ha='right', va='bottom')

plt.xlabel('Neuron')
plt.ylabel('Output')
plt.title('Batch of Training Samples')
plt.legend()

plt.tight_layout()
plt.show()


def plot_neural_network(ax, inputs, weights, biases, outputs, title):
    G = nx.DiGraph()
    
    input_layer = ['Input' + str(i+1) for i in range(len(inputs[0]))]
    hidden_layer = ['Neuron' + str(i+1) for i in range(len(weights))]
    output_layer = ['Output' + str(i+1) for i in range(len(outputs[0]))]

    for i in range(len(input_layer)):
        G.add_node(input_layer[i], layer=0)
    for i in range(len(hidden_layer)):
        G.add_node(hidden_layer[i], layer=1)
    for i in range(len(output_layer)):
        G.add_node(output_layer[i], layer=2)

    for i, input_node in enumerate(input_layer):
        for j, hidden_node in enumerate(hidden_layer):
            G.add_edge(input_node, hidden_node, weight=weights[j][i])

    for i, hidden_node in enumerate(hidden_layer):
        for j, output_node in enumerate(output_layer):
            G.add_edge(hidden_node, output_node, weight=1)  # Example weights, can be customized

    pos = nx.multipartite_layout(G, subset_key='layer')
    edge_labels = nx.get_edge_attributes(G, 'weight')
    
    nx.draw(G, pos, with_labels=True, node_size=3000, node_color='white', 
        edgecolors='black', font_size=10, font_weight='bold', arrows=True, ax=ax)
    nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='red', ax=ax)
    
    # Annotate nodes with output values
    for i, hidden_node in enumerate(hidden_layer):
        ax.text(pos[hidden_node][0], pos[hidden_node][1]+0.1, f'Output: {round(outputs[0][i], 2)}', fontsize=12, color='blue')
    
    ax.set_title(title)

# Create subplots
fig1, axes1 = plt.subplots(1, 2, figsize=(20, 10))
fig2, axes2 = plt.subplots(1, 2, figsize=(20, 10))

# Plot for single training sample
plot_neural_network(axes1[0], [inputs_single], weights, biases, [output_single], "Single Training Sample Neural Network")

# Plot for batch of training samples
plot_neural_network(axes1[1], inputs_batch, weights, biases, output_batch, "Batch Training Samples Neural Network")

# Plot for the first two samples in the batch
plot_neural_network(axes2[0], [inputs_batch[0]], weights, biases, [output_batch[0]], "Batch Training Sample 1 Neural Network")
plot_neural_network(axes2[1], [inputs_batch[1]], weights, biases, [output_batch[1]], "Batch Training Sample 2 Neural Network")

plt.tight_layout()
plt.show()