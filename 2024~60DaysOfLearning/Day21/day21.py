from sklearn.linear_model import LogisticRegression
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Sample data (hours studied, pass/fail)
# X = [[29], [15], [33], [28], [29]]
# y = [0, 0, 1, 1, 1]
X = [[0.5], [0.75], [1.0], [1.25], [1.5], [1.75], [2.0], [2.25], [2.5], [2.75], [3.0], [3.25], [3.5], [4.0], [4.25], [4.5], [4.75], [5.0], [5.25], [5.5]]
y = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]

# data = [
#     {"hours_studied": 0.5, "passed_exam": 0},
#     {"hours_studied": 0.75, "passed_exam": 0},
#     {"hours_studied": 1.0, "passed_exam": 0},
#     {"hours_studied": 1.25, "passed_exam": 0},
#     {"hours_studied": 1.5, "passed_exam": 0},
#     {"hours_studied": 1.75, "passed_exam": 0},
#     {"hours_studied": 2.0, "passed_exam": 0},
#     {"hours_studied": 2.25, "passed_exam": 1},
#     {"hours_studied": 2.5, "passed_exam": 0},
#     {"hours_studied": 2.75, "passed_exam": 0},
#     {"hours_studied": 3.0, "passed_exam": 0},
#     {"hours_studied": 3.25, "passed_exam": 0},
#     {"hours_studied": 3.5, "passed_exam": 1},
#     {"hours_studied": 4.0, "passed_exam": 1},
#     {"hours_studied": 4.25, "passed_exam": 1},
#     {"hours_studied": 4.5, "passed_exam": 1},
#     {"hours_studied": 4.75, "passed_exam": 1},
#     {"hours_studied": 5.0, "passed_exam": 1},
#     {"hours_studied": 5.25, "passed_exam": 1},
#     {"hours_studied": 5.5, "passed_exam": 1},
# ]

# # Create empty lists for features (hours_studied) and target variable (passed_exam)
# X = []
# y = []

# # Extract features and target variable from the dictionary
# for item in data:
#     X.append([item["hours_studied"]])  # Append features as a list of lists
#     y.append(item["passed_exam"])

# # Print the converted data
# print("X:")
# print(X)
# print("\ny:")
# print(y)

# Create the logistic regression model
model = LogisticRegression()

# Train the model on the data
model.fit(X, y)

# Make predictions for new data (assuming 6 hours of study)
new_data = [[2]]
predicted_proba = model.predict_proba(new_data)

# Get the predicted probability of passing
probability = predicted_proba[0][1]

# Print the probability
print("Probability of passing with 6 hours of study:", probability)

import math
# Step 1: Data Preparation
data = [
    {"hours_studied": 0.5, "passed_exam": 0},
    {"hours_studied": 0.75, "passed_exam": 0},
    {"hours_studied": 1.0, "passed_exam": 0},
    {"hours_studied": 1.25, "passed_exam": 0},
    {"hours_studied": 1.5, "passed_exam": 0},
    {"hours_studied": 1.75, "passed_exam": 0},
    {"hours_studied": 2.0, "passed_exam": 0},
    {"hours_studied": 2.25, "passed_exam": 1},
    {"hours_studied": 2.5, "passed_exam": 0},
    {"hours_studied": 2.75, "passed_exam": 0},
    {"hours_studied": 3.0, "passed_exam": 0},
    {"hours_studied": 3.25, "passed_exam": 0},
    {"hours_studied": 3.5, "passed_exam": 1},
    {"hours_studied": 4.0, "passed_exam": 1},
    {"hours_studied": 4.25, "passed_exam": 1},
    {"hours_studied": 4.5, "passed_exam": 1},
    {"hours_studied": 4.75, "passed_exam": 1},
    {"hours_studied": 5.0, "passed_exam": 1},
    {"hours_studied": 5.25, "passed_exam": 1},
    {"hours_studied": 5.5, "passed_exam": 1},
]

# Step 2: Initialize parameters
beta_0 = 0
beta_1 = 0
learning_rate = 0.01
iterations = 10000

# Step 3: Sigmoid function
def sigmoid(z):
    return 1 / (1 + math.exp(-z))

# Step 4: Log-Likelihood calculation
def log_likelihood(beta_0, beta_1, data):
    ll = 0
    for point in data:
        x = point["hours_studied"]
        y = point["passed_exam"]
        z = beta_0 + beta_1 * x
        ll += y * z - math.log(1 + math.exp(z))
    return ll

# Step 5: Gradient calculation
def gradients(beta_0, beta_1, data):
    grad_0 = 0
    grad_1 = 0
    for point in data:
        x = point["hours_studied"]
        y = point["passed_exam"]
        prediction = sigmoid(beta_0 + beta_1 * x)
        error = prediction - y
        grad_0 += error
        grad_1 += error * x
    return grad_0, grad_1

# Step 6: Gradient Descent Optimization
for _ in range(iterations):
    grad_0, grad_1 = gradients(beta_0, beta_1, data)
    beta_0 -= learning_rate * grad_0 / len(data)
    beta_1 -= learning_rate * grad_1 / len(data)

# Step 7: Function to compute log-odds, odds, and probability
def compute_values(hours_studied):
    z = beta_0 + beta_1 * hours_studied
    log_odds = z
    odds = math.exp(z)
    probability = sigmoid(z)
    return log_odds, odds, probability

# Print header
print(f"{'Hours of study (x)':<20}{'Log-odds (t)':<20}{'Odds (e^t)':<20}{'Probability (p)':<20}")

# Compute and print values for given hours of study
hours_study_values = [1, 2, 3, 4, 5]
for hours in hours_study_values:
    log_odds, odds, probability = compute_values(hours)
    print(f"{hours:<20}{log_odds:<20.2f}{odds:<20.2f}{probability:<20.2f}")

# Compute and print the mean value (mu)
mean_hours_studied = sum(point["hours_studied"] for point in data) / len(data)
log_odds_mu, odds_mu, probability_mu = compute_values(mean_hours_studied)
print(f"{'μ ≈ ' + str(round(mean_hours_studied, 1)):<20}{log_odds_mu:<20.2f}{odds_mu:<20.2f}{probability_mu:<20.2f}")


# Step 8: Plotting the results
# Plot the actual data points
hours_studied = [point["hours_studied"] for point in data]
passed_exam = [point["passed_exam"] for point in data]

plt.scatter(hours_studied, passed_exam, color='red', label='Actual data')

# Plot the logistic regression curve
hours_range = [i * 0.1 for i in range(0, 60)]
predicted_probabilities = [compute_values(hours)[2] for hours in hours_range]

plt.plot(hours_range, predicted_probabilities, color='blue', label='Logistic regression curve')

# Adding labels and title
plt.xlabel('Hours of study')
plt.ylabel('Probability of passing exam')
plt.title('Probability of Passing Exam vs Hours Studied')
plt.legend()

# Show the plot
plt.show()


# Step 8: 3D Plotting
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Prepare data for 3D plotting
hours_range = [i * 0.1 for i in range(0, 60)]
log_odds_values = []
probabilities = []
for hours in hours_range:
    log_odds, odds, probability = compute_values(hours)
    log_odds_values.append(log_odds)
    probabilities.append(probability)

# Plot the logistic regression curve
ax.plot(hours_range, log_odds_values, probabilities, color='blue', label='Logistic regression curve')

# Plot the actual data points
actual_hours = [point["hours_studied"] for point in data]
actual_log_odds = [compute_values(point["hours_studied"])[0] for point in data]
actual_probabilities = [point["passed_exam"] for point in data]
ax.scatter(actual_hours, actual_log_odds, actual_probabilities, color='red', label='Actual data')

# Adding labels and title
ax.set_xlabel('Hours of study')
ax.set_ylabel('Log-odds (t)')
ax.set_zlabel('Probability of passing exam')
ax.set_title('3D Plot of Logistic Regression')

plt.legend()
plt.show()

# Step 8: 3D Plotting
fig = plt.figure(figsize=(20, 12)) 
ax = fig.add_subplot(111, projection='3d')

# Prepare data for 3D plotting
hours_range = [i * 0.1 for i in range(0, 60)]
log_odds_values = []
probabilities = []
for hours in hours_range:
    log_odds, odds, probability = compute_values(hours)
    log_odds_values.append(log_odds)
    probabilities.append(probability)

# Plot the logistic regression curve
ax.plot(hours_range, log_odds_values, probabilities, color='blue', label='Logistic regression curve')

# Plot and annotate the actual data points
actual_hours = [point["hours_studied"] for point in data]
actual_log_odds = [compute_values(point["hours_studied"])[0] for point in data]
actual_probabilities = [compute_values(point["hours_studied"])[2] for point in data]
for i in range(len(data)):
    ax.scatter(actual_hours[i], actual_log_odds[i], actual_probabilities[i], color='red')
    # ax.text(actual_hours[i], actual_log_odds[i], actual_probabilities[i], 
    #         f'({actual_hours[i]}, {actual_log_odds[i]:.2f}, {actual_probabilities[i]:.2f})', 
    #         size=8, zorder=1, color='k')
    ax.text(actual_hours[i], actual_log_odds[i], actual_probabilities[i], 
            f'(Hours:{actual_hours[i]}, Probability: {actual_probabilities[i]:.2f})', 
            size=5, zorder=1, color='k')
    
# Adding labels and title
ax.set_xlabel('Hours of study')
ax.set_ylabel('Log-odds (t)')
ax.set_zlabel('Probability of passing exam')
ax.set_title('3D Plot of Logistic Regression')

# Zoom in by setting axis limits
ax.set_xlim(0, 6)  # Change these values to zoom in on the x-axis
ax.set_ylim(-3, 4)  # Change these values to zoom in on the y-axis
ax.set_zlim(0, 1)  # Change these values to zoom in on the z-axis


plt.legend()
plt.show()