import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
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

"""
RECURSIVE FEATURE ELIMINATION (RFE)
"""
print("-----------------------------------------------------")

print("RECURSIVE FEATURE ELIMINATION (RFE) METHOD")
from sklearn.feature_selection import RFE
from sklearn.linear_model import LogisticRegression

import warnings
warnings.filterwarnings('ignore')

# Feature extraction
model_lr = LogisticRegression()
recur_fe = RFE(model_lr, n_features_to_select=3)
Feature = recur_fe.fit(X, Y)
print("Number of Features: %s" % (Feature.n_features_))
print("Selected Features are: %s" % (Feature.support_))
print("Feature Ranking is as follows. That means preg, plas, mass are selected ones : %s" % (Feature.ranking_))

# Visualize RFE results
plt.figure(figsize=(10, 6))
plt.bar(features[:-1], Feature.ranking_)
plt.xlabel('Features')
plt.ylabel('Ranking')
plt.title('Feature Ranking with RFE')
plt.show()

# Prepare for animation
fig, ax = plt.subplots(figsize=(10, 6))
bars = ax.bar(features[:-1], Feature.ranking_, color=plt.cm.viridis(np.linspace(0, 1, len(features)-1)))

def init():
    ax.set_xlabel('Features')
    ax.set_ylabel('Ranking')
    ax.set_title('Feature Ranking with RFE')
    return bars

def update(frame):
    # Animate the bars with color changes
    for i, bar in enumerate(bars):
        bar.set_height(Feature.ranking_[i] + np.sin(frame / 10.0) * Feature.ranking_[i] / 10.0)
        bar.set_color(plt.cm.viridis((i + frame / 10) % len(bars) / len(bars)))
    return bars

ani = FuncAnimation(fig, update, frames=range(100), init_func=init, blit=True)
plt.show()
