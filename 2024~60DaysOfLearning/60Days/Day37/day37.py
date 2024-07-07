import networkx as nx
import matplotlib.pyplot as plt
import seaborn as sns

# Set the style using seaborn
sns.set(style='whitegrid')

# Create a directed graph
G = nx.DiGraph()

# Add nodes with labels
nodes = {
    'J(w, b)': "Cost Function",
    '1/m': "Average Loss",
    'Σ': "Summation",
    'L(ŷ(i), y(i))': "Logistic Loss",
    'y(i)': "Label",
    'ŷ(i)': "Predicted",
    'log p(y|x)': "Log Probability",
    'p(y|x)': "Probability"
}

# Adding nodes to the graph
for node, label in nodes.items():
    G.add_node(node, label=label)

# Add edges with labels
edges = [
    ('L(ŷ(i), y(i))', 'Σ', "Loss"),
    ('Σ', '1/m', "Sum"),
    ('1/m', 'J(w, b)', "Average Loss"),
    ('ŷ(i)', 'L(ŷ(i), y(i))', "Predicted"),
    ('y(i)', 'L(ŷ(i), y(i))', "Label"),
    ('p(y|x)', 'log p(y|x)', "Probability")
]

# Adding edges to the graph
for u, v, label in edges:
    G.add_edge(u, v, label=label)

# Define positions for all nodes with more separation
pos = {
    'J(w, b)': (6, 0),
    '1/m': (4, 2),
    'Σ': (2, 2),
    'L(ŷ(i), y(i))': (0, 0),
    'y(i)': (1, 1.5),
    'ŷ(i)': (-1, 1.5),
    'log p(y|x)': (-4, 0),
    'p(y|x)': (-6, 0)
}


# Draw the nodes
nx.draw_networkx_nodes(G, pos, edgecolors='skyblue', node_color="#fff", node_size=2000, alpha=0.9)

# Draw the edges
nx.draw_networkx_edges(G, pos, edgelist=G.edges(), arrowstyle='->', arrowsize=20, edge_color='black')

# Draw the labels for the nodes
nx.draw_networkx_labels(G, pos, labels={node: node for node in G.nodes()}, font_size=10, font_color='black')

# Draw the edge labels
edge_labels = {(u, v): label for u, v, label in edges}
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='red')

# Title
plt.title('Cost Function in Logistic Regression')

# Show the plot
plt.show()

import matplotlib.pyplot as plt

# Define the nodes and their labels
nodes = {
    'J(w, b)': (6, 0),
    '1/m': (4, 2),
    'Σ': (2, 2),
    'L(ŷ(i), y(i))': (0, 0),
    'y(i)': (1, 1.5),
    'ŷ(i)': (-1, 1.5),
    'log p(y|x)': (-4, 0),
    'p(y|x)': (-6, 0)
}

# Define the edges and their labels
edges = [
    ('L(ŷ(i), y(i))', 'Σ', "Loss"),
    ('Σ', '1/m', "Sum"),
    ('1/m', 'J(w, b)', "Average Loss"),
    ('ŷ(i)', 'L(ŷ(i), y(i))', "Predicted"),
    ('y(i)', 'L(ŷ(i), y(i))', "Label"),
    ('p(y|x)', 'log p(y|x)', "Probability")
]

# Plot the nodes
plt.figure(figsize=(12, 8))
for node, (x, y) in nodes.items():
    plt.scatter(x, y, s=2000, c='skyblue', alpha=0.9)
    plt.text(x, y, node, fontsize=10, ha='center', va='center', fontweight='bold')

# Plot the edges
for (start, end, label) in edges:
    start_pos = nodes[start]
    end_pos = nodes[end]
    plt.annotate(
        '', xy=end_pos, xytext=start_pos,
        arrowprops=dict(arrowstyle='->', color='black', lw=2)
    )
    mid_x = (start_pos[0] + end_pos[0]) / 2
    mid_y = (start_pos[1] + end_pos[1]) / 2
    plt.text(mid_x, mid_y, label, fontsize=10, color='red', ha='center', va='center')

# Title
plt.title('Cost Function in Logistic Regression')

# Remove axes
plt.axis('off')

# Show the plot
plt.show()


import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris

# Load dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the dataset
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# One-hot encoding the target
y_train = tf.keras.utils.to_categorical(y_train, 3)
y_test = tf.keras.utils.to_categorical(y_test, 3)

# Define the ANN model
model = Sequential()
model.add(Dense(8, input_shape=(X_train.shape[1],), activation='relu'))
model.add(Dense(8, activation='relu'))
model.add(Dense(3, activation='softmax'))

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(X_train, y_train, epochs=50, batch_size=5, validation_data=(X_test, y_test))

# Evaluate the model
loss, accuracy = model.evaluate(X_test, y_test)
print(f'Test Accuracy: {accuracy:.4f}')

import seaborn as sns
import matplotlib.pyplot as plt

# Extract loss and accuracy from training history
history_df = pd.DataFrame(history.history)

# Plot training and validation loss
plt.figure(figsize=(12, 5))
sns.lineplot(data=history_df[['loss', 'val_loss']])
plt.title('Training and Validation Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.show()

# Plot training and validation accuracy
plt.figure(figsize=(12, 5))
sns.lineplot(data=history_df[['accuracy', 'val_accuracy']])
plt.title('Training and Validation Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.show()

import networkx as nx

# Define the ANN structure
layers = [4, 8, 8, 3]

# Create a graph
G = nx.DiGraph()

# Add nodes
layer_nodes = []
for i, layer_size in enumerate(layers):
    layer_nodes.append([])
    for j in range(layer_size):
        node_name = f'{i}_{j}'
        G.add_node(node_name, layer=i)
        layer_nodes[-1].append(node_name)

# Add edges
for i in range(len(layers) - 1):
    for u in layer_nodes[i]:
        for v in layer_nodes[i + 1]:
            G.add_edge(u, v)

# Define the position of nodes
pos = {}
for i, layer in enumerate(layer_nodes):
    layer_width = len(layer)
    for j, node in enumerate(layer):
        pos[node] = (i, j - layer_width / 2.0)

# Draw the graph
plt.figure(figsize=(12, 8))
nx.draw(G, pos, with_labels=True, node_size=700, node_color="lightblue", font_size=10, font_weight="bold")
plt.title('ANN Structure Visualization')
plt.show()
