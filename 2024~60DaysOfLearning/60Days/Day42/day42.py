# Importing necessary libraries
import pandas as pd
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import matplotlib.pyplot as plt

# Imports necessary tools: These lines import specific functions and tools from different Python libraries:
# StandardScaler: This helps to scale (or normalize) numerical data, so numbers are in a similar range.
# OneHotEncoder: This converts categorical data (like types of cars or cities) into numbers that a computer can understand.
# ColumnTransformer: This lets you apply different transformations (like scaling or encoding) to different columns of your data.
# Pipeline: This lets you put multiple steps (like scaling and encoding) together in a sequence (or pipeline).
# matplotlib.pyplot as plt: This is used for creating plots and graphs, like scatter plots or bar charts.
#--------------------------------------------------------------------------------------------------

# Application of Naive Bayes
# Given data
P_D = 0.01       # Prior probability of having the disease
P_not_D = 0.99   # Prior probability of not having the disease
P_T_given_D = 0.99  # Probability of testing positive given having the disease
P_T_given_not_D = 0.05  # Probability of testing positive given not having the disease

# Calculate P(T) using the law of total probability
P_T = (P_T_given_D * P_D) + (P_T_given_not_D * P_not_D)

# Apply Bayes' Theorem to find P(D|T)
P_D_given_T = (P_T_given_D * P_D) / P_T

# Print the result
print(f"The probability of having the disease given a positive test result is {P_D_given_T:.4f}")

# Data for visualization
labels = ['Disease', 'No Disease']
probabilities = [P_D_given_T, 1 - P_D_given_T]

# Create bar plot
fig, ax = plt.subplots()
bars = ax.bar(labels, probabilities, color=['blue', 'green'])

# Add text annotations
for bar in bars:
    yval = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2, yval + 0.01, round(yval, 2), ha='center', va='bottom')

# Labeling and customization
ax.set_title('Probability of Having Disease Given Positive Test Result')
ax.set_ylabel('Probability')
ax.set_ylim(0, 1)
ax.grid(axis='y', linestyle='--', alpha=0.7)

# Show plot
plt.show()


# Sample dataset
data = {
    'Age': [25, 32, 47, 51, 62],
    'Salary': [50000, 60000, 80000, 120000, 150000],
    'Gender': ['Male', 'Female', 'Female', 'Male', 'Female'],
    'Country': ['USA', 'Canada', 'USA', 'Mexico', 'Canada']
}

# Create a DataFrame from the sample data
df = pd.DataFrame(data)

# Define column types
continuous_features = ['Age', 'Salary']
categorical_features = ['Gender', 'Country']

# Define preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), continuous_features),  # Standardize numeric columns
        ('cat', OneHotEncoder(), categorical_features)   # One-hot encode categorical columns
    ]
)

# Create a pipeline with preprocessing steps
pipeline = Pipeline(steps=[('preprocessor', preprocessor)])

# Fit and transform the data using the pipeline
X = pipeline.fit_transform(df)

# Print the transformed data (for verification)
print(pd.DataFrame(X))

# Fit and transform the data using the pipeline
X = pipeline.fit_transform(df)

# Convert X back to a DataFrame with column names
X_df = pd.DataFrame(X, columns=['Age_scaled', 'Salary_scaled', 'Gender_Female', 'Gender_Male', 'Country_Canada', 'Country_Mexico', 'Country_USA'])

# Print the transformed data with headers
print("Transformed Data:")
print(X_df)

# The transformation from the original Age and Salary values to standardized (Age_scaled and Salary_scaled) values involves centering 
# the data around its mean and scaling it by its standard deviation. 
# 
# Here's how it works:

# Standardization (or Z-score normalization):
# Mean Centering: Each value in the Age and Salary columns is adjusted by subtracting the mean of its respective column. 
# This centers the data around zero.

# Scaling by Standard Deviation: After centering, each value is divided by the standard deviation of its column. 
# This scales the data so that it has a standard deviation of 1.

# Why the Range from Negative to Positive?
# Negative Values: Values less than the mean in the original data will have negative scaled values. 
# For example, a value less than the mean will be scaled to a negative number.

# Positive Values: Values greater than the mean in the original data will have positive scaled values. 
# These values are scaled proportionally above the mean.

# Interpretation:
# Negative Scaled Values: These indicate that the original value is below the mean of the dataset for that feature (e.g., Age or Salary).

# Positive Scaled Values: These indicate that the original value is above the mean of the dataset for that feature.

# Example Interpretation:
# If Age_scaled is -1.38, it means that the original Age value is 1.38 standard deviations below the mean Age value in the dataset.

# If Salary_scaled is 1.54, it means that the original Salary value is 1.54 standard deviations above the mean Salary value in the dataset.

# Why Standardization?
# Standardization is often used in machine learning for several reasons:

# Equal Importance: It ensures that all features are on the same scale, preventing one feature from dominating the learning algorithm 
# due to its larger range of values.

# Model Performance: Many machine learning algorithms assume or perform better when features are on a similar scale.

# Interpretability: Standardized data is easier to interpret and compare, as it is centered around zero with a standard deviation of 1.

# In summary, the negative to positive range of standardized values (Age_scaled and Salary_scaled) reflects how each original value 
# compares to the mean and standard deviation of its respective feature in the dataset.

# Plotting the data
plt.figure(figsize=(10, 6))

# Scatter plot for Age_scaled vs Salary_scaled
for gender in df['Gender'].unique():
    for country in df['Country'].unique():
        subset_df = df[(df['Gender'] == gender) & (df['Country'] == country)]
        subset_X = X_df[(df['Gender'] == gender) & (df['Country'] == country)]
        plt.scatter(subset_X['Age_scaled'], subset_X['Salary_scaled'], label=f'{gender}, {country}', alpha=0.8, s=100)

        # Annotate each point with original Age and Salary values
        for index, row in subset_df.iterrows():
            plt.text(subset_X.loc[index, 'Age_scaled'], subset_X.loc[index, 'Salary_scaled'], f"age, salary ({row['Age']}, {row['Salary']})", fontsize=8, ha='center', va='bottom')

# Adding labels and title
plt.xlabel('Standardized Age')
plt.ylabel('Standardized Salary')
plt.title('Scatter Plot of Standardized Age and Salary')

# Adding legend
plt.legend(title='Gender, Country', loc='upper left')

# Display plot
plt.grid(True)
plt.show()