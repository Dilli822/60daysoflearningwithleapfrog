import matplotlib.pyplot as plt
import numpy as np
from matplotlib.animation import FuncAnimation

# Creating a range of model complexity from low to high
x = np.linspace(0, 10, 100)

# Hypothetical functions for bias^2, variance, and noise
bias_squared = np.maximum(1 - 0.1 * x, 0.1)
variance = 0.1 * x**2
noise = np.ones_like(x) * 0.1  # Assuming noise is constant

# Total error is the sum of bias^2, variance, and noise
total_error = bias_squared + variance + noise

# Setting up the figure and axis
fig, ax = plt.subplots(figsize=(10, 6))
ax.set_xlim(0, 10)
ax.set_ylim(0, max(total_error) + 0.5)
ax.set_xlabel('Model Complexity')
ax.set_ylabel('Error')
ax.set_title('Bias-Variance Tradeoff')
ax.grid(True)

# Initializing the plots for each component
line_bias, = ax.plot([], [], label='Bias²', color='blue')
line_variance, = ax.plot([], [], label='Variance', color='green')
line_noise, = ax.plot([], [], label='Noise', color='red')
line_total, = ax.plot([], [], label='Total Error', color='purple', linestyle='dashed')

# Adding legend
ax.legend()

# Initialization function to set up the background of the animation
def init():
    line_bias.set_data([], [])
    line_variance.set_data([], [])
    line_noise.set_data([], [])
    line_total.set_data([], [])
    return line_bias, line_variance, line_noise, line_total

# Animation function to update the lines
def animate(i):
    line_bias.set_data(x[:i], bias_squared[:i])
    line_variance.set_data(x[:i], variance[:i])
    line_noise.set_data(x[:i], noise[:i])
    line_total.set_data(x[:i], total_error[:i])
    return line_bias, line_variance, line_noise, line_total

# Creating the animation
ani = FuncAnimation(fig, animate, init_func=init, frames=len(x), interval=100, blit=True)

# Display the plot with animation
plt.show()

"""
np.ones_like(x) * 0.1 creates an array of the same shape as x where each element is 0.1. This represents a constant noise level.
np.maximum(1 - 0.1 * x, 0.1) computes the element-wise maximum between 1 - 0.1 * x and 0.1, ensuring that the bias² values do not go below 0.1.
"""