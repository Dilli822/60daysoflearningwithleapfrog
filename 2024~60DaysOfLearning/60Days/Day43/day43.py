import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC

# Example data points
X = np.array([[1, 2], [2, 3], [3, 3], [2, 1], [3, 2]])
y = np.array([1, 1, 1, -1, -1])

# Fit SVM with linear kernel
clf = SVC(kernel='linear')
clf.fit(X, y)

# Plot data points
plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired, s=50)

# Plot decision boundary
ax = plt.gca()
xlim = ax.get_xlim()
ylim = ax.get_ylim()

xx = np.linspace(xlim[0], xlim[1], 30)
yy = np.linspace(ylim[0], ylim[1], 30)
YY, XX = np.meshgrid(yy, xx)
xy = np.vstack([XX.ravel(), YY.ravel()]).T
Z = clf.decision_function(xy).reshape(XX.shape)

ax.contour(XX, YY, Z, colors='k', levels=[-1, 0, 1], alpha=0.5, linestyles=['--', '-', '--'])
ax.scatter(clf.support_vectors_[:, 0], clf.support_vectors_[:, 1], s=100, linewidth=1, facecolors='none', edgecolors='k')

plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Example of Margin Classifier')
plt.show()

import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.datasets import make_circles

# Example data points
X, y = make_circles(n_samples=100, factor=0.5, noise=0.1)

# Fit SVM with RBF kernel
clf = SVC(kernel='rbf')
clf.fit(X, y)

# Plot data points
plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired, s=50)

# Plot decision boundary (not shown for RBF kernel)
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Example of Margin Classifier with RBF Kernel')
plt.show()

import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs
from sklearn.linear_model import Perceptron

# Generate synthetic data with two classes
X, y = make_blobs(n_samples=100, centers=2, random_state=42)

# Fit Perceptron model
clf = Perceptron()
clf.fit(X, y)

# Plot data points
plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired, s=50)

# Plot decision boundary
coef = clf.coef_[0]
intercept = clf.intercept_
x_vals = np.linspace(X[:, 0].min(), X[:, 0].max(), 100)
y_vals = -(coef[0] / coef[1]) * x_vals - intercept / coef[1]
plt.plot(x_vals, y_vals, 'k-')

plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Perceptron Classifier Example')
plt.show()


import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_moons
from sklearn.svm import SVC

# Generate synthetic data with non-linear separation
X, y = make_moons(n_samples=100, noise=0.1)

# Fit SVM with polynomial kernel
clf = SVC(kernel='poly', degree=3)
clf.fit(X, y)

# Plot data points
plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired, s=50)

# Plot decision boundary (not shown for polynomial kernel)
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('SVM Classifier with Polynomial Kernel Example')
plt.show()


import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification
from sklearn.tree import DecisionTreeClassifier

# Generate synthetic data with two classes
X, y = make_classification(n_samples=100, n_features=2, n_informative=2, n_redundant=0, random_state=42)

# Fit Decision Tree classifier
clf = DecisionTreeClassifier()
clf.fit(X, y)

# Plot decision boundary
plt.figure(figsize=(8, 6))

x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.02),
                     np.arange(y_min, y_max, 0.02))
Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)
plt.contourf(xx, yy, Z, alpha=0.8, cmap=plt.cm.Paired)

# Define colors for each class
colors = np.array(['red', 'green'])

plt.scatter(X[:, 0], X[:, 1], c=colors[y], cmap=plt.cm.Paired, s=50)
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Decision Tree Classifier Example')
plt.show()
