import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# Feature vector
x_i = np.array([1, 3476, 245])

# Model parameters
theta = np.array([0.00003, 0.00150, -0.00120])

# Calculate theta^T x^(i)
theta_T_x_i = np.dot(theta, x_i)

# Compute the sigmoid function
h_x_i_theta = 1 / (1 + np.exp(-theta_T_x_i))

print(f"theta^T x^(i) = {theta_T_x_i}")
print(f"h(x^(i), theta) = {h_x_i_theta}")

# Set up the figure and axis
fig, ax = plt.subplots()
ax.set_xlim(-10, 10)
ax.set_ylim(0, 1)

# Initialize a line object
line, = ax.plot([], [], lw=2)

# Add labels and title
ax.set_xlabel('Linear Combination of Features (θ^T x)')
ax.set_ylabel('Probability (h(x, θ))')
ax.set_title('Sigmoid Function Visualization')

# Data for plotting the sigmoid function
x = np.linspace(-10, 10, 400)
y = 1 / (1 + np.exp(-x))

# Animation initialization function
def init():
    line.set_data([], [])
    return line,

# Animation update function
def update(frame):
    line.set_data(x[:frame], y[:frame])
    return line,

# Create animation
ani = animation.FuncAnimation(fig, update, frames=len(x), init_func=init, blit=True, interval=20, repeat=False)

# Plot the dot product result on the sigmoid curve
ax.plot(theta_T_x_i, h_x_i_theta, 'ro')  # Red dot
ax.annotate(f'θ^T x = {theta_T_x_i:.2f}\nh(x, θ) = {h_x_i_theta:.2f}', (theta_T_x_i, h_x_i_theta), textcoords="offset points", xytext=(-60, 20), ha='center', fontsize=10, bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'))

# Annotate the sigmoid function formula
ax.annotate(r'$\frac{1}{1 + e^{-\theta^T x}}$', xy=(4, 0.7), fontsize=14, bbox=dict(facecolor='white', alpha=0.8, edgecolor='gray'))

# Show the plot
plt.show()
