import numpy as np
import matplotlib.pyplot as plt
import networkx as nx

# Neural Network functions

def initialize_parameters(n_x, n_h, n_y):
    """
    Initialize the parameters for a 2-layer neural network.
    
    Args:
    n_x -- size of the input layer
    n_h -- size of the hidden layer
    n_y -- size of the output layer
    
    Returns:
    parameters -- dictionary containing initialized parameters "W1", "b1", "W2", "b2"
    """
    np.random.seed(1)
    W1 = np.random.randn(n_h, n_x) * 0.01  # weight matrix for layer 1
    b1 = np.zeros((n_h, 1))                # bias vector for layer 1
    W2 = np.random.randn(n_y, n_h) * 0.01  # weight matrix for layer 2
    b2 = np.zeros((n_y, 1))                # bias vector for layer 2
    
    parameters = {"W1": W1, "b1": b1,
                  "W2": W2, "b2": b2}
    
    return parameters

def sigmoid(Z):
    """
    Compute the sigmoid of Z
    
    Args:
    Z -- numpy array of any shape
    
    Returns:
    A -- sigmoid(Z)
    """
    return 1 / (1 + np.exp(-Z))

def relu(Z):
    """
    Compute the ReLU of Z
    
    Args:
    Z -- numpy array of any shape
    
    Returns:
    A -- relu(Z)
    """
    return np.maximum(0, Z)

def forward_propagation(X, parameters):
    """
    Implement forward propagation.
    
    Args:
    X -- input data of size (n_x, m)
    parameters -- dictionary containing parameters "W1", "b1", "W2", "b2"
    
    Returns:
    A2 -- the output of the second activation (sigmoid)
    cache -- a dictionary containing "Z1", "A1", "Z2", "A2"
    """
    W1 = parameters["W1"]
    b1 = parameters["b1"]
    W2 = parameters["W2"]
    b2 = parameters["b2"]
    
    # Z1 = W1 * X + b1
    Z1 = np.dot(W1, X) + b1
    A1 = relu(Z1)
    
    # Z2 = W2 * A1 + b2
    Z2 = np.dot(W2, A1) + b2
    A2 = sigmoid(Z2)
    
    cache = {"Z1": Z1, "A1": A1,
             "Z2": Z2, "A2": A2}
    
    return A2, cache

def compute_cost(A2, Y):
    """
    Compute the cross-entropy cost.
    
    Args:
    A2 -- The sigmoid output of the second activation, of shape (1, number of examples)
    Y -- "true" labels vector of shape (1, number of examples)
    
    Returns:
    cost -- cross-entropy cost
    """
    m = Y.shape[1]  # number of examples

    # Compute the cross-entropy cost
    cost = -np.sum(Y * np.log(A2) + (1 - Y) * np.log(1 - A2)) / m
    return np.squeeze(cost)  # makes sure cost is a scalar value

def relu_derivative(Z):
    """
    Compute the gradient of the ReLU function.
    
    Args:
    Z -- numpy array of any shape
    
    Returns:
    dZ -- gradient of the ReLU function
    """
    return Z > 0

def backward_propagation(parameters, cache, X, Y):
    """
    Implement backward propagation.
    
    Args:
    parameters -- dictionary containing parameters "W1", "b1", "W2", "b2"
    cache -- dictionary containing "Z1", "A1", "Z2", "A2"
    X -- input data of shape (n_x, m)
    Y -- "true" labels vector of shape (1, m)
    
    Returns:
    grads -- dictionary containing gradients with respect to different parameters
    """
    m = X.shape[1]  # number of examples
    
    W1 = parameters["W1"]
    W2 = parameters["W2"]
    
    A1 = cache["A1"]
    A2 = cache["A2"]
    Z1 = cache["Z1"]
    
    # Backward propagation: calculate dW1, db1, dW2, db2
    dZ2 = A2 - Y
    dW2 = np.dot(dZ2, A1.T) / m
    db2 = np.sum(dZ2, axis=1, keepdims=True) / m
    
    dA1 = np.dot(W2.T, dZ2)
    dZ1 = dA1 * relu_derivative(Z1)
    dW1 = np.dot(dZ1, X.T) / m
    db1 = np.sum(dZ1, axis=1, keepdims=True) / m
    
    grads = {"dW1": dW1, "db1": db1,
             "dW2": dW2, "db2": db2}
    
    return grads

def update_parameters(parameters, grads, learning_rate=0.01):
    """
    Update parameters using gradient descent.
    
    Args:
    parameters -- dictionary containing parameters "W1", "b1", "W2", "b2"
    grads -- dictionary containing gradients "dW1", "db1", "dW2", "db2"
    
    Returns:
    parameters -- dictionary containing updated parameters
    """
    W1 = parameters["W1"]
    b1 = parameters["b1"]
    W2 = parameters["W2"]
    b2 = parameters["b2"]
    
    dW1 = grads["dW1"]
    db1 = grads["db1"]
    dW2 = grads["dW2"]
    db2 = grads["db2"]
    
    W1 -= learning_rate * dW1
    b1 -= learning_rate * db1
    W2 -= learning_rate * dW2
    b2 -= learning_rate * db2
    
    parameters = {"W1": W1, "b1": b1,
                  "W2": W2, "b2": b2}
    
    return parameters

def model(X, Y, n_h, num_iterations=10000, learning_rate=0.01, print_cost=False):
    """
    Train the neural network model.
    
    Args:
    X -- input data of shape (n_x, m)
    Y -- true "label" vector of shape (1, m)
    n_h -- size of the hidden layer
    num_iterations -- number of iterations in gradient descent loop
    learning_rate -- learning rate for gradient descent
    print_cost -- if True, print the cost every 1000 iterations
    
    Returns:
    parameters -- parameters learnt by the model
    costs -- list of costs during training
    """
    np.random.seed(3)
    n_x = X.shape[0]
    n_y = Y.shape[0]
    
    parameters = initialize_parameters(n_x, n_h, n_y)
    costs = []
    
    for i in range(num_iterations):
        A2, cache = forward_propagation(X, parameters)
        cost = compute_cost(A2, Y)
        grads = backward_propagation(parameters, cache, X, Y)
        parameters = update_parameters(parameters, grads, learning_rate)
        
        if i % 1000 == 0:
            costs.append(cost)
            if print_cost:
                print(f"Cost after iteration {i}: {cost}")
    
    return parameters, costs

# Example usage
X = np.random.randn(2, 1000)
Y = np.random.randint(0, 2, (1, 1000))

parameters, costs = model(X, Y, n_h=4, num_iterations=1000000, learning_rate=0.01, print_cost=True)

# Plot the cost
plt.plot(costs)
plt.ylabel('Cost')
plt.xlabel('Iterations (per hundreds)')
plt.title('Cost reduction over iterations')
plt.show()

# Plot the network
def plot_network(parameters):
    """
    Visualize the neural network structure.
    
    Args:
    parameters -- dictionary containing parameters "W1", "W2"
    """
    G = nx.DiGraph()
    
    layers = [parameters["W1"].shape[1], parameters["W1"].shape[0], parameters["W2"].shape[0]]
    layer_names = ["Input Layer", "Hidden Layer 1", "Output Layer"]
    
    pos = {}
    for i, layer_size in enumerate(layers):
        for j in range(layer_size):
            G.add_node(f"L{i}_N{j}", layer=layer_names[i])
            pos[f"L{i}_N{j}"] = (i, layer_size - j)
    
    for i in range(layers[0]):
        for j in range(layers[1]):
            G.add_edge(f"L0_N{i}", f"L1_N{j}", weight=parameters["W1"][j, i])
    
    for i in range(layers[1]):
        for j in range(layers[2]):
            G.add_edge(f"L1_N{i}", f"L2_N{j}", weight=parameters["W2"][j, i])
    
    edge_labels = nx.get_edge_attributes(G, 'weight')
    pos_higher = {k: (v[0], v[1] + 0.3) for k, v in pos.items()}
    
    plt.figure(figsize=(12, 8))
    nx.draw(G, pos, with_labels=True, node_size=3000, node_color="skyblue", font_size=10, font_weight="bold")
    nx.draw_networkx_edge_labels(G, pos_higher, edge_labels=edge_labels)
    plt.title('Neural Network Structure')
    plt.show()

plot_network(parameters)


