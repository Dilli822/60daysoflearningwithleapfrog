import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Create a figure with subplots
fig, axs = plt.subplots(3, 3, figsize=(10, 10))
fig.suptitle('Various Plots Example')

# Line plot
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]
axs[0, 0].plot(x, y)
axs[0, 0].set_title('Simple Line Plot')
axs[0, 0].set_xlabel('X-axis')
axs[0, 0].set_ylabel('Y-axis')

# Bar plot
categories = ['A', 'B', 'C', 'D']
values = [4, 7, 1, 8]
axs[0, 1].bar(categories, values)
axs[0, 1].set_title('Simple Bar Plot')
axs[0, 1].set_xlabel('Categories')
axs[0, 1].set_ylabel('Values')

# Histogram
data = np.random.randn(1000)
axs[0, 2].hist(data, bins=30, edgecolor='black')
axs[0, 2].set_title('Simple Histogram')
axs[0, 2].set_xlabel('Value')
axs[0, 2].set_ylabel('Frequency')

# Scatter plot
x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]
axs[1, 0].scatter(x, y)
axs[1, 0].set_title('Simple Scatter Plot')
axs[1, 0].set_xlabel('X-axis')
axs[1, 0].set_ylabel('Y-axis')

# Pie chart
labels = ['A', 'B', 'C', 'D']
sizes = [15, 30, 45, 10]
# The startangle attribute is set to 140 degrees, so the first wedge (corresponding to size 15 and label 'A') 
# starts drawing at 140 degrees counterclockwise from the positive x-axis.
axs[1, 1].pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140)
axs[1, 1].set_title('Simple Pie Chart')

# Box plot
data = [np.random.randn(100) for _ in range(4)]
# The vert=True parameter specifies that the boxes will be drawn vertically.
# The patch_artist=True parameter allows the boxes to be filled with color.
axs[1, 2].boxplot(data, vert=True, patch_artist=True, labels=['A', 'B', 'C', 'D'])
axs[1, 2].set_title('Simple Box Plot')
axs[1, 2].set_xlabel('Category')
axs[1, 2].set_ylabel('Value')

# Subplots with Sin and Cos
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)
axs[2, 0].plot(x, y1)
axs[2, 0].set_title('Sin(x)')
axs[2, 0].set_xlabel('x')
axs[2, 0].set_ylabel('y')

axs[2, 1].plot(x, y2)
axs[2, 1].set_title('Cos(x)')
axs[2, 1].set_xlabel('x')
axs[2, 1].set_ylabel('y')

# Load a sample dataset and create heatmap
df = sns.load_dataset('titanic')
corr = df.select_dtypes(include=[np.number]).corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', linewidths=0.5, ax=axs[2, 2])
axs[2, 2].set_title('Correlation Matrix Heatmap')

# >> corr is assumed to be a DataFrame containing the correlation matrix of numeric columns from the Titanic dataset.
# >> sns.heatmap(corr, annot=True, cmap='coolwarm', linewidths=0.5, ax=axs[2, 2]) creates a heatmap of the correlation 
# matrix corr in the subplot located at axs[2, 2].
# >> annot=True ensures that the correlation coefficients are displayed within each cell of the heatmap.
# >> cmap='coolwarm' sets the colormap to 'coolwarm', providing a clear visual representation of correlations 
# ranging from negative (cool/blue) to positive (warm/red).
# >> linewidths=0.5 sets the width of the dividing lines between cells in the heatmap.

plt.tight_layout(rect=[0, 0, 1, 0.95])  # Adjust the layout
plt.show()
