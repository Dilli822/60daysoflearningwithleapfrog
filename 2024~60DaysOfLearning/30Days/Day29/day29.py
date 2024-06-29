import matplotlib.pyplot as plt
import numpy as np
# Cost function
def J(w):
    return w**2

# Derivative of the cost function
def dJ_dw(w):
    return 2 * w

# Gradient descent update
def gradient_descent(w, alpha, num_iterations):
    history = [w]
    for _ in range(num_iterations):
        gradient = dJ_dw(w)
        w = w - alpha * gradient
        history.append(w)
    return history

# Initial values and parameters
w_initial_positive = 3.27
w_initial_negative = -3.27
alpha = 0.1
num_iterations = 10

# Perform gradient descent
history_positive = gradient_descent(w_initial_positive, alpha, num_iterations)
history_negative = gradient_descent(w_initial_negative, alpha, num_iterations)

# Generate values for plotting the cost function
w_values = np.linspace(-4, 4, 400)
J_values = J(w_values)
# Plotting the cost function
plt.figure(figsize=(10, 6))
plt.plot(w_values, J_values, label='Cost Function $J(w) = w^2$')
plt.xlabel('$w$')
plt.ylabel('$J(w)$')
plt.title('Gradient Descent on $J(w) = w^2$')
plt.axhline(0, color='black',linewidth=0.5)
plt.axvline(0, color='black',linewidth=0.5)
plt.grid(color = 'gray', linestyle = '--', linewidth = 0.5)
# Plotting the gradient descent updates
plt.plot(history_positive, [J(w) for w in history_positive], 'o-', label='Gradient Descent from $w = 3.27$')
plt.plot(history_negative, [J(w) for w in history_negative], 'o-', label='Gradient Descent from $w = -3.27$')

# Adding legends
plt.legend()
plt.show()


import matplotlib.pyplot as plt
import numpy as np

# Cost function
def J(w, b):
    return w**2 + b**2

# Partial derivatives
def dJ_dw(w):
    return 2 * w

def dJ_db(b):
    return 2 * b

# Gradient descent update
def gradient_descent(w, b, alpha, num_iterations):
    history = [(w, b)]
    for _ in range(num_iterations):
        dw = dJ_dw(w)
        db = dJ_db(b)
        w = w - alpha * dw
        b = b - alpha * db
        history.append((w, b))
    return history

# Initial values and parameters
w_initial = 4
b_initial = 3
alpha = 0.1
num_iterations = 10

# Perform gradient descent
history = gradient_descent(w_initial, b_initial, alpha, num_iterations)

# Generate values for plotting the cost function
w_values = np.linspace(-5, 5, 100)
b_values = np.linspace(-5, 5, 100)
W, B = np.meshgrid(w_values, b_values)
J_values = J(W, B)

# Plotting the cost function
plt.figure(figsize=(10, 6))
plt.contour(W, B, J_values, levels=np.logspace(0, 3, 20), cmap='jet')
plt.xlabel('$w$')
plt.ylabel('$b$')
plt.title('Gradient Descent on $J(w, b) = w^2 + b^2$')

# Plotting the gradient descent updates
w_history, b_history = zip(*history)
plt.plot(w_history, b_history, 'o-', label='Gradient Descent Path')

# Adding legends
plt.legend()

plt.show()