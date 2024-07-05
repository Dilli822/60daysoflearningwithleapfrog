import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
# Nutritional data: calories from carbs, proteins, fats
A = np.array([
    [56, 0, 1.1, 15.6],    # Carbs
    [1.2, 104, 55, 2.0],   # Proteins
    [1.8, 135, 44.6, 0.2]  # Fats
])

# Visualize the original nutritional data matrix A
plt.figure(figsize=(8, 6))
sns.heatmap(A, annot=True, cmap="YlGnBu", fmt=".1f", linewidths=.5)
plt.title('Nutritional Data Matrix A')
plt.xlabel('Macronutrient')
plt.ylabel('Food Type')
plt.xticks(np.arange(4), ['Carbs', 'Proteins', 'Fats', 'Others'])
plt.show()

# Sum down the columns to get total calories for each food
total_calories = A.sum(axis=0)

# Calculate the percentage of calories from each macronutrient
percentages = (A / total_calories) * 100

# Visualize the percentages matrix
plt.figure(figsize=(8, 6))
sns.heatmap(percentages, annot=True, cmap="YlGnBu", fmt=".1f", linewidths=.5)
plt.title('Percentage of Calories from Each Macronutrient')
plt.xlabel('Macronutrient')
plt.ylabel('Food Type')
plt.xticks(np.arange(4), ['Carbs', 'Proteins', 'Fats', 'Others'])
plt.show()

# Create a random NumPy array of size (5,)
a = np.random.randn(5)

# Plotting the histogram of array a
plt.figure(figsize=(8, 6))
plt.hist(a, bins=5, alpha=0.7, color='blue', edgecolor='black')
plt.title('Histogram of Array a')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()
