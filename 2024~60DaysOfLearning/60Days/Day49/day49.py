import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# Define the cost function for y = 1
def cost_y_1(h):
    return -np.log(h)

# Define the cost function for y = 0
def cost_y_0(h):
    return -np.log(1 - h)

# Generate a range of predicted values between 0.01 and 0.99
h = np.linspace(0.01, 0.99, 100)

# Calculate the cost for each predicted value when y = 1
cost_1 = cost_y_1(h)

# Calculate the cost for each predicted value when y = 0
cost_0 = cost_y_0(h)

# Create the figure and axes
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 6))

# Initialize the plots
line1, = ax1.plot([], [], label='Cost when y = 1', color='blue')
line2, = ax2.plot([], [], label='Cost when y = 0', color='red')

def init():
    ax1.set_xlim(0, 1)
    ax1.set_ylim(0, max(cost_1))
    ax1.set_xlabel('Prediction (h)')
    ax1.set_ylabel('Cost')
    ax1.set_title('Cost Function when y = 1')
    ax1.legend()
    
    ax2.set_xlim(0, 1)
    ax2.set_ylim(0, max(cost_0))
    ax2.set_xlabel('Prediction (h)')
    ax2.set_ylabel('Cost')
    ax2.set_title('Cost Function when y = 0')
    ax2.legend()
    
    line1.set_data([], [])
    line2.set_data([], [])
    return line1, line2

def update(frame):
    # Update the data for the plot
    line1.set_data(h[:frame], cost_1[:frame])
    line2.set_data(h[:frame], cost_0[:frame])
    return line1, line2

# Create the animation
ani = FuncAnimation(fig, update, frames=len(h), init_func=init, blit=True, interval=50)

# Show the animation
plt.show()
