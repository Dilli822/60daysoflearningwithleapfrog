import numpy as np
# Example dataset (2D array)
data = np.array([[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]])
print(data)
print(np.min(data))
print(np.max(data))
print(np.min(data, axis=0))

# Function to perform Min-Max scaling
def min_max_scaling(data):
    min_vals = np.min(data, axis=0)
    max_vals = np.max(data, axis=0)
    scaled_data = (data - min_vals) / (max_vals - min_vals)
    return scaled_data
  
# Apply Min-Max scaling
scaled_data = min_max_scaling(data)

print("Original data:\n", data)
print("\nScaled data (Min-Max scaling):\n", scaled_data)
# Example dataset (2D array)
data = np.array([[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]])

# Function to perform Standardization
def standardization(data):
    mean_vals = np.mean(data, axis=0)
    std_vals = np.std(data, axis=0)
    standardized_data = (data - mean_vals) / std_vals
    return standardized_data

# Apply Standardization
standardized_data = standardization(data)
print("Original data:\n", data)
print("\nStandardized data (Z-score normalization):\n", standardized_data)

# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]
# 1
# 9
# [1 2 3]
# Original data:
#  [[1 2 3]
#  [4 5 6]
#  [7 8 9]]

# Scaled data (Min-Max scaling):
#  [[0.  0.  0. ]
#  [0.5 0.5 0.5]
#  [1.  1.  1. ]]
# Original data:
#  [[1 2 3]
#  [4 5 6]
#  [7 8 9]]

# Standardized data (Z-score normalization):
#  [[-1.22474487 -1.22474487 -1.22474487]
#  [ 0.          0.          0.        ]
#  [ 1.22474487  1.22474487  1.22474487]]