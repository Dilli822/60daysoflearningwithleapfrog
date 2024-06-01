# Day 1 - matrix Arithmetic operation without using numpy

def add_matrices(A, B):
    # Initialize an empty matrix to store the result
    result = []
    # Iterate over the rows of matrices A and B
    for i in range(len(A)):
        # Initialize an empty row to store the elements of the current row in the result matrix
        row = []
        
        # Iterate over the columns of matrices A and B
        for j in range(len(A[0])):
            # Add the corresponding elements from matrices A and B and append the sum to the current row
            row.append(A[i][j] + B[i][j])
        
        # Append the row to the result matrix
        result.append(row)
    return result

def sub_matrices(A, B):
    # Initialize an empty matrix to store the result
    result = []
    # Iterate over the rows of matrices A and B
    for i in range(len(A)):
        # Initialize an empty row to store the elements of the current row in the result matrix
        row = []
        
        # Iterate over the columns of matrices A and B
        for j in range(len(A[0])):
            # Add the corresponding elements from matrices A and B and append the sum to the current row
            row.append(A[i][j] - B[i][j])
        # Append the row to the result matrix
        result.append(row)
    return result

def mul_matrices(A, B):
    # Initialize an empty matrix to store the result
    result = []
    
    # Iterate over the rows of matrices A and B
    for i in range(len(A)):
        # Initialize an empty row to store the elements of the current row in the result matrix
        row = []
        
        # Iterate over the columns of matrices A and B
        for j in range(len(A[0])):
            # Add the corresponding elements from matrices A and B and append the sum to the current row
            row.append(A[i][j] * B[i][j])
        
        # Append the row to the result matrix
        result.append(row)
    return result

def divide_matrices(A, B):
    # Initialize an empty matrix to store the result
    result = []
    # Iterate over the rows of matrices A and B
    for i in range(len(A)):
        # Initialize an empty row to store the elements of the current row in the result matrix
        row = []
        
        # Iterate over the columns of matrices A and B
        for j in range(len(A[0])):
            # Add the corresponding elements from matrices A and B and append the sum to the current row
            row.append(A[i][j] * B[i][j])
        
        # Append the row to the result matrix
        result.append(row)
    return result

# Example matrices

A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]

# Add matrices
added_matrix = add_matrices(A, B)
sub_matrices= sub_matrices(A, B)
mul_matrices = mul_matrices(A, B)
divide_matrices = divide_matrices(A, B)

print("Matrix A + B:")
for row in added_matrix:
    print(row)
    
print("Matrix A - B:")
for row in sub_matrices:
    print(row)
    
print("Matrix A * B:")
for row in mul_matrices:
    print(row)
    
print("Matrix A / B:")
for row in divide_matrices:
    print(row)
    
    

def arithmetic_operation(A, B, operation):
    # Initialize an empty matrix to store the result
    result = []
    # Iterate over the rows of matrices A and B
    for i in range(len(A)):
        # Initialize an empty row to store the elements of the current row in the result matrix
        row = []
        # Iterate over the columns of matrices A and B
        for j in range(len(A[0])):
            # Perform the specified arithmetic operation on the corresponding elements from matrices A and B
            if operation == 'add':
                row.append(A[i][j] + B[i][j])
            elif operation == 'sub':
                row.append(A[i][j] - B[i][j])
            elif operation == 'mul':
                row.append(A[i][j] * B[i][j])
            elif operation == 'div':
                # Handle division by zero
                if B[i][j] != 0:
                    row.append(A[i][j] / B[i][j])
                else:
                    row.append(None)  # Indicate division by zero
        # Append the row to the result matrix
        result.append(row)
    return result

# Example matrices
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
# Perform arithmetic operations
added_matrix = arithmetic_operation(A, B, 'add')
subtracted_matrix = arithmetic_operation(A, B, 'sub')
multiplied_matrix = arithmetic_operation(A, B, 'mul')
divided_matrix = arithmetic_operation(A, B, 'div')

# Print results
print("Matrix A + B:")
for row in added_matrix:
    print(row)

print("Matrix A - B:")
for row in subtracted_matrix:
    print(row)

print("Matrix A * B:")
for row in multiplied_matrix:
    print(row)

print("Matrix A / B:")
for row in divided_matrix:
    print(row)
