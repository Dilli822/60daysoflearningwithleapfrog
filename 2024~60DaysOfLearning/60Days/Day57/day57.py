import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
# The as Keyword in Python: Creating Aliases
# The as keyword in Python is primarily used to create aliases. An alias is simply an alternative name for something.


# Load the dataset
url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
data = pd.read_csv(url, header=None)

print("WithOUT Explicit features ")
# Print all the column names (which will be numbered from 0 to n-1)
print("TOTAL COLUMN IS ", data.columns)
print("TOTAL ROW IS ", data.index)
# print("WHOLE TABLE DATA ")
# print(data)
print("-----------------------------------------------------------------------------------------")

# Loading the Data

print("With Explicit features ")
data = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
features = ['preg', 'plas', 'pres', 'skin', 'test', 'mass', 'pedi', 'age', 'class']
print("Class Means Either Person has Diabetes or Not if it is 1 then Yes if it is 0 means No")
df = pd.read_csv(data, names=features)
df.head()
print(df)

# Preparing the Data
"""
This line converts a pandas DataFrame df into a NumPy array data.
"""
data = df.values
print("Pandas Data Converted into Numpy array")
print(data)
"""
Creates a NumPy array X containing the first 8 columns of data. 
These columns likely represent the features or independent variables.
"""
X = data[:, 0:8]
print("FIRST 8 COLUMNS OF DATA")
print(X)

"""
Creates a NumPy array Y containing the last column of data. 
This column likely represents the target variable or dependent variable.
"""
Y = data[:, 8]
print("FIRST LAST COLUMNS OF DATA")
print(Y)


# Filter Method

"""
> Imports necessary libraries for feature selection.
> Creates a SelectKBest object with chi2 as the scoring function and selects the top 4 features (k=4).
> Fits the SelectKBest object to the data X and Y.
> Prints the scores of all features.
> Selects and transforms features, printing the first 5 rows of the transformed data with selected features.
"""

from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import chi2

# Feature extraction
# Change k values to include the best n number of features
chi_best = SelectKBest(score_func=chi2, k=4)
k_best = chi_best.fit(X, Y)

# Summarize scores
np.set_printoptions(precision=3)
print("BEST TOP 5 SCORES")
print(k_best.scores_)
"""
SUPPOSE K BEST SCORES ARE [ 111.52  1411.887   17.605   53.108 2175.565  127.669    5.393  181.304]
then the best or the highest numbers are selected like 2175.565 111.52 are some of the best ones
"""

# Summarize selected features
k_features = k_best.transform(X)
print("TOP K 5 FEATURES")
print(k_features[0:5, :])


# Feature selection
chi_best = SelectKBest(score_func=chi2, k='all')  # Use 'all' to get scores for all features
k_best = chi_best.fit(X, Y)

# Get feature names and scores
feature_names = features[:-1]  # Exclude target variable
scores = k_best.scores_

# Plot feature scores
plt.figure(figsize=(10, 6))
plt.barh(feature_names, scores, color='skyblue')
plt.xlabel('Score')
plt.title('Feature Scores from SelectKBest')
plt.gca().invert_yaxis()  # Invert y-axis to have the highest scores at the top
plt.show()


import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
features = ['preg', 'plas', 'pres', 'skin', 'test', 'mass', 'pedi', 'age', 'class']
df = pd.read_csv(url, names=features)

# Plot heatmap
plt.figure(figsize=(12, 8))

# Create the heatmap with detailed labels
ax = sns.heatmap(
    df.head(20),         # Display the first 20 rows
    annot=True,          # Annotate cells with values
    cmap='viridis',      # Color map for the heatmap
    fmt='g',             # Format for the annotations (general format)
    cbar_kws={'label': 'Feature Value'},  # Color bar label
    linewidths=0.5,     # Width of lines that divide cells
    linecolor='gray'    # Color of the lines that divide cells
)

# Add title and labels
plt.title('Heatmap of the First 20 Rows of the Pima Indians Diabetes Dataset', fontsize=16)
plt.xlabel('Features', fontsize=14)
plt.ylabel('Rows', fontsize=14)
plt.xticks(ticks=range(len(features)), labels=features, rotation=45, ha='right', fontsize=12)
plt.yticks(fontsize=12)
plt.tight_layout()

# Show the plot
plt.show()
