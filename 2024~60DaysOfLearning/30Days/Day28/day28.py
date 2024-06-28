import numpy as np
import matplotlib.pyplot as plt
# Sample data
x_train = np.array([1.0, 1.7, 2.0, 2.5, 3.0, 3.2])
y_train = np.array([250, 300, 480, 430, 630, 730])

# Cost function
def compute_cost(x, y, w, b):
    m = len(x)
    total_cost = 0
    for i in range(m):
        f_wb = w * x[i] + b
        cost = (f_wb - y[i]) ** 2
        total_cost += cost
    return total_cost / (2 * m)
# Gradient descent function
def gradient_descent(x, y, w_init, b_init, alpha, num_iters):
    w = w_init
    b = b_init
    m = len(x)
    
    for i in range(num_iters):
        dw = 0
        db = 0
        for j in range(m):
            f_wb = w * x[j] + b
            dw += (f_wb - y[j]) * x[j]
            db += (f_wb - y[j])
        
        w = w - (alpha / m) * dw
        b = b - (alpha / m) * db
        
        if i % 100 == 0:
            cost = compute_cost(x, y, w, b)
            print(f"Iteration {i}: Cost = {cost}, w = {w}, b = {b}")
    
    return w, b
# Initialize parameters
initial_w = 0
initial_b = 0
iterations = 1000
alpha = 0.01

# Run gradient descent
w_final, b_final = gradient_descent(x_train, y_train, initial_w, initial_b, alpha, iterations)

# Print final results
print(f"Final parameters: w = {w_final}, b = {b_final}")
print(f"Final cost = {compute_cost(x_train, y_train, w_final, b_final)}")
# Plot the results
plt.scatter(x_train, y_train, color='blue', label='Data points')
plt.plot(x_train, w_final * x_train + b_final, color='red', label='Regression line')
plt.xlabel('Size (1000 sqft)')
plt.ylabel('Price (1000s of dollars)')
plt.legend()
plt.show()