import numpy as np
import matplotlib.pyplot as plt

# Step 1: Prepare the Data
X = np.array([0, 1, 2, 3, 4])
y = np.array([2, 3, 5, 4, 6])

# Number of data points
n = len(X)

# Step 2: Compute the Parameters
# Calculate the mean of X and y
mean_X = np.mean(X)
mean_y = np.mean(y)

# Calculate the slope (m)
numerator = np.sum((X - mean_X) * (y - mean_y))
denominator = np.sum((X - mean_X)**2)
m = numerator / denominator

# Calculate the intercept (b)
b = mean_y - m * mean_X

# Print the parameters
print(f"Slope (m): {m}")
print(f"Intercept (b): {b}")

# Predict function
def predict(X, m, b):
    return m * X + b

# Example prediction
new_X = np.array([7, 9])
predictions = predict(new_X, m, b)
print(f"Predictions: {predictions}")

# Plotting the data points and the regression line
plt.figure(figsize=(10, 6))

# Plot the original data points
plt.scatter(X, y, color='blue', label='Original Data')

# Plot the regression line
X_line = np.linspace(0, 4, 100)  # Generate X values for plotting the line
y_line = predict(X_line, m, b)  # Compute the corresponding y values
plt.plot(X_line, y_line, color='red', label='Regression Line')

# Plot the new predictions
plt.scatter(new_X, predictions, color='green', label='Predictions', marker='x')

# Adding labels and title
plt.xlabel('X')
plt.ylabel('y')
plt.title('Linear Regression Model Using only Python')
plt.legend()
plt.grid(True)
plt.show()

print("============================================================")

import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Sample Data
X = np.array([0, 1, 2, 3, 4])
y = np.array([2, 3, 5, 4, 6])

# Create a Linear Regression Model
model = LinearRegression()

# Train the Model (fitting the data)
model.fit(X.reshape(-1, 1), y)  # Reshape X for compatibility

# Print the Slope (m) and Intercept (b)
print(f"Slope (m): {model.coef_[0]}")
print(f"Intercept (b): {model.intercept_}")

# Make Predictions for New Data
new_X = np.array([8, 9])  # Example unseen data points
predictions = model.predict(new_X.reshape(-1, 1))  # Reshape new_X

print(f"Predictions for new data points: {predictions}")

# Plotting the data points and the regression line
plt.figure(figsize=(10, 6))

# Plot the original data points
plt.scatter(X, y, color='blue', label='Original Data')

# Plot the regression line over the range of the original data
X_line = np.linspace(min(X), max(X), 100)  # Generate X values for plotting the line
y_line = model.predict(X_line.reshape(-1, 1))  # Compute the corresponding y values
plt.plot(X_line, y_line, color='red', label='Regression Line')

# Plot the new predictions
plt.scatter(new_X, predictions, color='green', label='Predictions', marker='x')

# Adding labels and title
plt.xlabel('X')
plt.ylabel('y')
plt.title('Linear Regression Model')
plt.legend()
plt.grid(True)
plt.show()
