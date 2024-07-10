from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt
import numpy as np

# Define the dataset based on the provided rules
data = [
    (50001, 701, 'Approve'),
    (50001, 700, 'Deny'),
    (50000, 0, 'Deny')
]

# Separate features (income, credit score) and target (loan approval)
X = [[row[0], row[1]] for row in data]
y = [row[2] for row in data]

# Create a decision tree classifier
clf = DecisionTreeClassifier()

# Train the classifier on the data
clf.fit(X, y)

# Predict using the trained classifier
predictions = clf.predict(X)

# Plot the decision tree with modified node labels
plt.figure(figsize=(10, 8))
plot_tree(clf, filled=True, rounded=True, class_names=['Approve', 'Deny'],
          feature_names=['Income ($)', 'Credit Score'], fontsize=10,
          impurity=False, node_ids=True)

# Modify node labels based on conditions for 'Approve' and 'Deny' classes
for i, (income, credit_score, actual_class) in enumerate(data):
    predicted_class = predictions[i]
    condition_text = (f"Income > 50001\nCredit Score > 701 (Approve)" if predicted_class == 'Approve'
                      else f"Credit Score <= 700\nIncome > 50000 (Deny)" if predicted_class == 'Deny'
                      else "")
    
    plt.text(i, 0, f"Pred: {predicted_class}\nActual: {actual_class}\nCredit Score: {credit_score}\nIncome: {income}\n{condition_text}",
             horizontalalignment='center', fontsize=10, bbox=dict(facecolor='white', alpha=0.5))

plt.title("Decision Tree Classifier")
plt.show()



from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

# Generate synthetic data
X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)

# Apply K-means clustering
kmeans = KMeans(n_clusters=4, random_state=0)
kmeans.fit(X)
y_kmeans = kmeans.predict(X)
centers = kmeans.cluster_centers_

# Plot K-means clustering result
plt.figure(figsize=(10, 6))
plt.scatter(X[:, 0], X[:, 1], c=y_kmeans, s=50, cmap='viridis')
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.75, marker='X')
plt.title('K-means Clustering')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.show()

from sklearn.neighbors import KNeighborsClassifier
from matplotlib.colors import ListedColormap

# Generate synthetic data
X, y = make_blobs(n_samples=100, centers=3, cluster_std=1.0, random_state=42)

# Fit K-nearest neighbors classifier
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X, y)

# Plotting decision boundary
plt.figure(figsize=(10, 6))

# Plot the decision boundary. For that, we will assign a color to each
# point in the mesh [x_min, x_max]x[y_min, y_max].
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.1),
                     np.arange(y_min, y_max, 0.1))
Z = knn.predict(np.c_[xx.ravel(), yy.ravel()])

# Put the result into a color plot
Z = Z.reshape(xx.shape)
plt.contourf(xx, yy, Z, alpha=0.3, cmap='viridis')

# Plot also the training points
plt.scatter(X[:, 0], X[:, 1], c=y, s=50, cmap='viridis', edgecolor='k')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('K-nearest Neighbors (KNN)')
plt.show()
