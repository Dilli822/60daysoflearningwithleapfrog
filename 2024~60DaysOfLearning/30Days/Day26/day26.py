import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def compute_cost(X, y, theta):
    m = len(y)  # number of training examples
    h = sigmoid(X @ theta)  # hypothesis function
    cost = (1/m) * (-y.T @ np.log(h) - (1 - y).T @ np.log(1 - h))
    return cost

# Example data
X = np.array([[1, 2], [1, 3], [1, 4], [1, 5]])  # Feature matrix (with intercept term)
y = np.array([0, 0, 1, 1])  # Labels (0 or 1)

# Create a grid of theta values
theta0_vals = np.linspace(-10, 10, 100)
theta1_vals = np.linspace(-10, 10, 100)
theta0, theta1 = np.meshgrid(theta0_vals, theta1_vals)

# Compute the cost for each combination of theta0 and theta1
cost_vals = np.zeros((len(theta0_vals), len(theta1_vals)))

for i in range(len(theta0_vals)):
    for j in range(len(theta1_vals)):
        t = np.array([theta0_vals[i], theta1_vals[j]])
        cost_vals[i, j] = compute_cost(X, y, t)

# Plot the cost function
fig = plt.figure(figsize=(8, 4))  # Adjusted figure size

# 3D Surface Plot
ax = fig.add_subplot(121, projection='3d')
surf = ax.plot_surface(theta0, theta1, cost_vals, cmap='viridis', edgecolor='none')
ax.set_xlabel('Theta0 (Parameter 1)', fontsize=8)  # Smaller axis label font size
ax.set_ylabel('Theta1 (Parameter 2)', fontsize=8)  # Smaller axis label font size
ax.set_zlabel('Cost (Error)', fontsize=8)  # Smaller axis label font size
ax.set_title('3D Surface Plot of Cost Function', fontsize=10)  # Smaller title font size
fig.colorbar(surf, ax=ax, shrink=0.5, aspect=5)

# Contour Plot
ax2 = fig.add_subplot(122)
contour = ax2.contourf(theta0, theta1, cost_vals, cmap='viridis')
ax2.set_xlabel('Theta0 (Parameter 1)', fontsize=8)  # Smaller axis label font size
ax2.set_ylabel('Theta1 (Parameter 2)', fontsize=8)  # Smaller axis label font size
ax2.set_title('Contour Plot of Cost Function', fontsize=10)  # Smaller title font size
fig.colorbar(contour, ax=ax2)

# Additional explanation for the contour plot (left-aligned)
explanation_text = (
    "Contour Plot Explanation:\n"
    "- Theta0 and Theta1 are the model parameters.\n"
    "- The plot shows how the cost function changes with different values of these parameters.\n"
    "- X-axis and Y-axis represent Theta0 and Theta1 values, respectively, ranging from -10 to 10.\n"
    "- Colors represent different cost values:\n"
    "  - Darker colors (e.g., dark blue) indicate lower cost (better model performance).\n"
    "  - Lighter colors (e.g., yellow) indicate higher cost (worse model performance).\n"
    "- Contour lines connect points with the same cost value.\n"
    "  - Valleys (darker regions) suggest parameter values where the cost is lower.\n"
    "  - Hills (lighter regions) suggest parameter values where the cost is higher."
)

plt.text(-0.9, -0.5, explanation_text, fontsize=10, verticalalignment='bottom', horizontalalignment='left', transform=ax2.transAxes)

plt.suptitle("Visualization of Logistic Regression Cost Function", fontsize=12)  # Smaller main title font size

plt.tight_layout()  # Ensures plots are properly spaced
plt.show()
