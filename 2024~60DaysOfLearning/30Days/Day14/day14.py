# import torch

# # Create a tensor from a list of numbers
# x = torch.tensor([1, 2, 3])
# print(x)  # Output: tensor([1, 2, 3])

# # Create a tensor with zeros
# y = torch.zeros(2, 3)  # 2 rows, 3 columns filled with zeros
# print(y)  # Output: tensor([[0., 0., 0.],
#          #         [0., 0., 0.]])

# # Addition
# z = x + y
# print(z)  # Output: tensor([[1., 2., 3.],
#          #         [1., 2., 3.]])

# # Multiplication
# a = x * 2
# print(a)  # Output: tensor([2, 4, 6])

# # Define a simple function
# def square(x):
#     return x * x

# # Create a tensor and set requires_grad to True for autograd
# x = torch.tensor(2.0, requires_grad=True)

# # Calculate the square
# y = square(x)

# # Print the value and gradient (initially None)
# print(y)      # Output: tensor(4., grad_fn=<MulBackward0>)
# print(y.grad) # Output: None

# # Calculate the loss (example loss)
# loss = y - 5

# # Backpropagate to calculate gradients
# loss.backward()

# # Print the gradients of x
# print(x.grad)  # Output: tensor(2.)


import torch
from torch import nn

# Create data (example)
x = torch.tensor([[1.0], [2.0], [3.0]])
y = torch.tensor([2.0, 4.0, 6.0])

# Define the model (linear layer)
class LinearRegression(nn.Module):
    def __init__(self):
        super(LinearRegression, self).__init__()
        self.linear = nn.Linear(1, 1)  # Input dim 1, output dim 1

    def forward(self, x):
        return self.linear(x)

model = LinearRegression()

# Define loss function and optimizer
criterion = nn.MSELoss()  # Mean Squared Error loss
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)  # SGD optimizer

# Training loop (one iteration)
for epoch in range(100):  # Train for 100 epochs (adjust as needed)
    # Forward pass
    y_pred = model(x)
    loss = criterion(y_pred, y)

    # Backward pass and update weights
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

# Print the final predicted values
print("output ---> ", model(torch.tensor([[4.0]])))  # Example prediction for input 4
