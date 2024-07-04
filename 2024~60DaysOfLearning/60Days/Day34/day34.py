import numpy as np
import matplotlib.pyplot as plt
import timeit

# Sigmoid function
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Initialize parameters
def initialize_parameters(dim):
    w = np.zeros((dim, 1))
    b = 0
    return w, b

# Non-vectorized implementation functions
def forward_propagation_non_vectorized(X, w, b):
    m = X.shape[1]
    A = np.zeros((1, m))
    for i in range(m):
        Z = np.dot(w.T, X[:, i].reshape(-1, 1)) + b
        A[0, i] = sigmoid(Z)
    return A

def compute_cost(A, Y, m):
    cost = -(1/m) * np.sum(Y * np.log(A) + (1 - Y) * np.log(1 - A))
    return np.squeeze(cost)

def backward_propagation_non_vectorized(X, A, Y):
    m = X.shape[1]
    dw = np.zeros(X.shape[0])
    db = 0
    for i in range(m):
        dZ = A[0, i] - Y[0, i]
        dw += X[:, i] * dZ
        db += dZ
    dw /= m
    db /= m
    return dw.reshape(-1, 1), db

def update_parameters(w, b, dw, db, learning_rate):
    w -= learning_rate * dw
    b -= learning_rate * db
    return w, b

def logistic_regression_non_vectorized(X, Y, iterations, learning_rate):
    dim = X.shape[0]
    w, b = initialize_parameters(dim)
    costs = []
    for i in range(iterations):
        A = forward_propagation_non_vectorized(X, w, b)
        cost = compute_cost(A, Y, X.shape[1])
        costs.append(cost)
        dw, db = backward_propagation_non_vectorized(X, A, Y)
        w, b = update_parameters(w, b, dw, db, learning_rate)
        if i % 100 == 0:
            print(f"Non-Vectorized - Cost after iteration {i}: {cost}")
    return w, b, costs

# Vectorized implementation functions
def forward_propagation_vectorized(X, w, b):
    Z = np.dot(w.T, X) + b
    A = sigmoid(Z)
    return A

def backward_propagation_vectorized(X, A, Y):
    m = X.shape[1]
    dZ = A - Y
    dw = (1/m) * np.dot(X, dZ.T)
    db = (1/m) * np.sum(dZ)
    return dw, db

def logistic_regression_vectorized(X, Y, iterations, learning_rate):
    dim = X.shape[0]
    w, b = initialize_parameters(dim)
    costs = []
    for i in range(iterations):
        A = forward_propagation_vectorized(X, w, b)
        cost = compute_cost(A, Y, X.shape[1])
        costs.append(cost)
        dw, db = backward_propagation_vectorized(X, A, Y)
        w, b = update_parameters(w, b, dw, db, learning_rate)
        if i % 100 == 0:
            print(f"Vectorized - Cost after iteration {i}: {cost}")
    return w, b, costs

# Generate synthetic data
np.random.seed(1)
X = np.random.randn(2, 1000)  # 2 features, 1000 samples
Y = (np.sum(X, axis=0) > 0).astype(int).reshape(1, 1000)  # Labels are 1 if sum of features > 0, else 0

# Hyperparameters
iterations = 1000
learning_rate = 0.01

# Non-Vectorized Implementation
print("Training Non-Vectorized Implementation...")
w_nv, b_nv, costs_nv = logistic_regression_non_vectorized(X, Y, iterations, learning_rate)

# Vectorized Implementation
print("\nTraining Vectorized Implementation...")
w_v, b_v, costs_v = logistic_regression_vectorized(X, Y, iterations, learning_rate)

# Plotting the cost reduction
plt.figure(figsize=(12, 5))

# Non-Vectorized plot
plt.subplot(1, 2, 1)
plt.plot(range(iterations), costs_nv, label='Non-Vectorized',color="red")
plt.xlabel('Iterations')
plt.ylabel('Cost')
plt.title('Non-Vectorized Logistic Regression')
plt.legend()

# Vectorized plot
plt.subplot(1, 2, 2)
plt.plot(range(iterations), costs_v, label='Vectorized', color="green")
plt.xlabel('Iterations')
plt.ylabel('Cost')
plt.title('Vectorized Logistic Regression')
plt.legend()

plt.tight_layout()
plt.show()

# Measure execution time for non-vectorized implementation
non_vectorized_time = timeit.timeit(
    stmt=lambda: logistic_regression_non_vectorized(X, Y, iterations, learning_rate),
    number=1  # Execute only once to measure total time
)

# Measure execution time for vectorized implementation
vectorized_time = timeit.timeit(
    stmt=lambda: logistic_regression_vectorized(X, Y, iterations, learning_rate),
    number=1  # Execute only once to measure total time
)

# Plotting the histogram
plt.figure(figsize=(8, 6))

# Add a width argument to plt.bar
plt.bar(['Non-Vectorized', 'Vectorized'], [non_vectorized_time, vectorized_time], color=['red', 'green'], width=0.5)  # Adjust width as needed

plt.ylabel('Execution Time (seconds)')
plt.title('Comparison of Execution Time between Vectorized and Non-Vectorized Logistic Regression')

# Annotate with execution times
for i, time in enumerate([non_vectorized_time, vectorized_time]):
    plt.text(i, time + 0.1, f"{time:.4f} sec", ha='center', va='bottom', fontsize=10)

plt.show()

print(f"Non-Vectorized Logistic Regression Execution Time: {non_vectorized_time:.4f} seconds")
print(f"Vectorized Logistic Regression Execution Time: {vectorized_time:.4f} seconds")