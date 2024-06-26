import math
# Simple Linear Regression
def simple_linear_regression(b0, b1, x1):
    return b0 + b1 * x1

# Multiple Linear Regression (assuming two independent variables)
def multiple_linear_regression(b0, b1, b2, x1, x2):
    return b0 + b1 * x1 + b2 * x2

# Polynomial Linear Regression (assuming a quadratic polynomial)
def polynomial_linear_regression(b0, b1, b2, x1):
    return b0 + b1 * x1 + b2 * (x1 ** 2)
# Given values
b0 = 2
b1 = 1.5
b2 = -0.5
x1 = 3
x2 = 4  # for multiple linear regression
# Calculate predicted y values
simple_regression_y = simple_linear_regression(b0, b1, x1)
multiple_regression_y = multiple_linear_regression(b0, b1, b2, x1, x2)
polynomial_regression_y = polynomial_linear_regression(b0, b1, b2, x1)
# Print results
print("Simple Linear Regression (y):", simple_regression_y)
print("Multiple Linear Regression (y):", multiple_regression_y)
print("Polynomial Linear Regression (y):", polynomial_regression_y)

# Non-linear Regression (example: Gaussian function)
def non_linear_regression(x, a, b, c):
    return a * math.exp(-(x - b)**2 / (2 * c**2))
# Given values
b0 = 2
b1 = 1.5
b2 = -0.5
x1 = 3
# Calculate predicted y value using non-linear regression
non_linear_regression_y = non_linear_regression(x1, b0, b1, b2)
# Print result
print("Non-linear Regression (y):", non_linear_regression_y)

# NON LINEAR REGRESSION
# The original formula you provided is already correct:
# f(x) = a * e^(-2c^2 * (x - b)^2)
# This formula accurately represents a Gaussian function or normal distribution function. 
# There are no alternative "original" formulas for this specific function shape.
# Here's a breakdown of the formula again
# a: Scaling factor (controls height)
# e: Euler's number (approximately 2.71828)
# -2c^2: Width factor (controls spread)
# (x - b): Deviation from the center (x is the independent variable, b is the horizontal shift)
# ^2: Squared term for exponential decay
# This formula effectively captures the bell-shaped curve with a peak at x = b and exponential decay on either side.
# It represents the probability of a random variable occurring within a certain range around a mean value.