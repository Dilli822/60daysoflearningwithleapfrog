import numpy as np
import time
import matplotlib.pyplot as plt
import seaborn as sns
# Generate arrays and measure execution time
a = np.random.rand(1000000)
b = np.random.rand(1000000)

# Measure execution time for vectorized dot product
tic = time.time()
c_vec = np.dot(a, b)
toc = time.time()
vectorized_time = 1000 * (toc - tic)

# Measure execution time for non-vectorized loop
c_non_vec = 0
tic = time.time()
for i in range(1000000):
    c_non_vec += a[i] * b[i]
toc = time.time()
non_vectorized_time = 1000 * (toc - tic)

# Sample data for logistic regression
m = 100  # Number of training examples
nx = 2   # Number of features

X = np.random.rand(m, nx)  # m x nx matrix
y = np.random.rand(m, 1)   # m x 1 vector
w = np.random.rand(nx, 1)  # nx x 1 vector
b = np.random.rand(1)      # scalar

# Non-vectorized implementation
def non_vectorized_logistic_regression(X, y, w, b, m, nx):
    dw = np.zeros((nx, 1))  # nx x 1 vector
    db = 0  # scalar

    for i in range(m):
        z = np.dot(X[i], w) + b
        a = 1 / (1 + np.exp(-z))  # Sigmoid function
        
        dz = a - y[i]
        
        for j in range(nx):
            dw[j] += X[i, j] * dz
        db += dz

    dw /= m
    db /= m

    return dw, db
# Vectorized implementation
def vectorized_logistic_regression(X, y, w, b, m):
    Z = np.dot(X, w) + b  # m x 1 vector
    A = 1 / (1 + np.exp(-Z))  # m x 1 vector, element-wise sigmoid
    dZ = A - y  # m x 1 vector
    dw = np.dot(X.T, dZ) / m  # nx x 1 vector
    db = np.sum(dZ) / m  # scalar
    return dw, db
# Compute gradients using non-vectorized implementation
dw_non_vectorized, db_non_vectorized = non_vectorized_logistic_regression(X, y, w, b, m, nx)

# Compute gradients using vectorized implementation
dw_vectorized, db_vectorized = vectorized_logistic_regression(X, y, w, b, m)

print("Non-vectorized dw:", dw_non_vectorized)
print("Non-vectorized db:", db_non_vectorized)
print("Vectorized dw:", dw_vectorized)
print("Vectorized db:", db_vectorized)

# Plotting execution times
plt.figure(figsize=(12, 6))
execution_times = [non_vectorized_time, vectorized_time]
labels = ['Non-Vectorized', 'Vectorized']
plt.barh(labels, execution_times, color=['orange', 'blue'])
plt.xlabel('Time (ms)')
plt.title('Execution Time Comparison')
plt.tight_layout()
plt.show()


