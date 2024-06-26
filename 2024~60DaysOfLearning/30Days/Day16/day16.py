import numpy as np
import matplotlib.pyplot as plt

# Example data
data = np.array([10, 12, 14, 15, 17, 18, 19, 20, 100])

# Calculate quartiles
Q1 = np.percentile(data, 25)
Q3 = np.percentile(data, 75)
IQR = Q3 - Q1

# Identify outliers based on IQR
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
outliers = [x for x in data if x < lower_bound or x > upper_bound]

# Create box plot
plt.boxplot(data, notch=True, vert=True, patch_artist=True)

# Color outliers red in scatter plot
plt.scatter(range(len(data)), data, c='blue')
for i, value in enumerate(data):
    if value in outliers:
        plt.scatter(i, value, c='red')

# Customize plot
plt.xlabel("Index")
plt.ylabel("Value")
plt.title("Box Plot and Scatter Plot with Outlier Coloring")
plt.grid(True)
plt.show()

print("Original Data:", data)
print("Outliers:", outliers)
