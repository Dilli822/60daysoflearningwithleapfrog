import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Load the California Housing dataset
housing = fetch_california_housing()
X = housing.data
y = housing.target

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Choose the Linear Regression model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'Mean Squared Error: {mse:.2f}')
print(f'R² Score: {r2:.2f}')

# Create DataFrame for the test set
test_df = pd.DataFrame(X_test, columns=housing.feature_names)
test_df['Actual Value'] = y_test
test_df['Predicted Value'] = y_pred

# Set up the figure and axes
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 6))

# Animation function
def animate(i):
    # Clear the previous plot
    ax1.clear()
    ax2.clear()
    
    # Plot histogram of errors
    errors = y_test - y_pred
    ax1.hist(errors[:i], bins=20, color='blue', alpha=0.7)
    ax1.set_title('Error Distribution')
    ax1.set_xlabel('Error')
    ax1.set_ylabel('Frequency')

    # Plot scatter plot of actual vs. predicted values
    ax2.scatter(y_test[:i], y_pred[:i], color='green', alpha=0.7)
    ax2.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
    ax2.set_title('Actual vs. Predicted Values')
    ax2.set_xlabel('Actual Value')
    ax2.set_ylabel('Predicted Value')

# Create an animation
ani = FuncAnimation(fig, animate, frames=len(y_test), repeat=False, interval=100)

# Show the animation
plt.tight_layout()
plt.show()


# import numpy as np
# import pandas as pd
# from sklearn.datasets import fetch_california_housing
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LinearRegression
# from sklearn.metrics import mean_squared_error, r2_score

# # Load the California Housing dataset
# housing = fetch_california_housing()
# X = housing.data
# y = housing.target

# # Split the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Choose the Linear Regression model
# model = LinearRegression()

# # Train the model
# model.fit(X_train, y_train)

# # Make predictions on the test set
# y_pred = model.predict(X_test)

# # Evaluate the model
# mse = mean_squared_error(y_test, y_pred)
# r2 = r2_score(y_test, y_pred)

# print(f'Mean Squared Error: {mse:.2f}')
# print(f'R² Score: {r2:.2f}')

# # Create DataFrame for the test set
# test_df = pd.DataFrame(X_test, columns=housing.feature_names)
# test_df['Actual Value'] = y_test
# test_df['Predicted Value'] = y_pred

# # Display the first few rows of the test DataFrame
# print("Test Data with Predictions (first 5 rows):")
# print(test_df.head())


# Mean Squared Error (MSE) to measure the average squared 
# difference between the predicted and actual values, and R²
# score to measure how well the regression model explains the variability of the target variable.
# print(f'Mean Squared Error: {mse:.2f}')
# print(f'R² Score: {r2:.2f}')




# import numpy as np
# import pandas as pd
# import matplotlib.pyplot as plt
# import matplotlib.animation as animation
# from sklearn.datasets import fetch_california_housing
# from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LinearRegression
# from sklearn.metrics import mean_squared_error, r2_score

# # Load the California Housing dataset
# housing = fetch_california_housing()
# X = housing.data
# y = housing.target

# # Split the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Choose the Linear Regression model
# model = LinearRegression()

# # Train the model
# model.fit(X_train, y_train)

# # Make predictions on the test set
# y_pred = model.predict(X_test)

# # Evaluate the model
# mse = mean_squared_error(y_test, y_pred)
# r2 = r2_score(y_test, y_pred)

# print(f'Mean Squared Error: {mse:.2f}')
# print(f'R² Score: {r2:.2f}')

# # Create DataFrame for the test set
# test_df = pd.DataFrame(X_test, columns=housing.feature_names)
# test_df['Actual Value'] = y_test
# test_df['Predicted Value'] = y_pred

# # Limit the number of data points to 100 for animation
# sample_df = test_df.sample(n=100, random_state=42)

# # Prepare data for plotting
# x_data = np.arange(len(sample_df))
# y_actual = sample_df['Actual Value'].values
# y_predicted = sample_df['Predicted Value'].values

# # Plotting function
# def update(num, x_data, y_actual, y_predicted, line_actual, line_predicted):
#     line_actual.set_data(x_data[:num], y_actual[:num])
#     line_predicted.set_data(x_data[:num], y_predicted[:num])
#     return line_actual, line_predicted

# fig, ax = plt.subplots()
# ax.set_xlim(0, len(sample_df))
# ax.set_ylim(min(y_actual.min(), y_predicted.min()), max(y_actual.max(), y_predicted.max()))
# line_actual, = ax.plot([], [], 'b-', label='Actual Value')
# line_predicted, = ax.plot([], [], 'r-', label='Predicted Value')
# ax.legend()

# ani = animation.FuncAnimation(fig, update, frames=len(sample_df)+1, 
#                               fargs=(x_data, y_actual, y_predicted, line_actual, line_predicted), 
#                               interval=200, blit=True)

# plt.show()

# # Mean Squared Error (MSE) to measure the average squared 
# # # difference between the predicted and actual values, and R²
# # score to measure how well the regression model explains the variability of the target variable.
# print(f'Mean Squared Error: {mse:.2f}')
# print(f'R² Score: {r2:.2f}')



