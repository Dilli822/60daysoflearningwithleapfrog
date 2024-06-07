
import random
def flip_coin():
    # Generate a random number (0 or 1)
    result = random.randint(0, 1)
    
    # Determine the side of the coin based on the result
    side = "Tails" if result == 0 else "Heads"
    
    # Append the result to the history table
    history.append(side)
    
    # Print the result
    print(f"The coin landed on: {side}")

# Initialize an empty list to store the history of coin flips
history = []

# Perform multiple coin flips
for _ in range(10):  # Change the number as needed
    flip_coin()

# Print the history table
print("Coin Flip History:")
for i, result in enumerate(history, start=1):
    print(f"{i}. {result}")

#  Below is a Python function that searches for the number 45 in an array by starting from both 
#  the beginning (index 0) and the end (last index) simultaneously. 
#  This approach effectively reduces the search space by half.

def search_45_simultaneously(arr):
    """
    Search for the number 45 in an array starting from both ends simultaneously.

    Args:
    arr (list): The list of numbers to search.

    Returns:
    int: The index of the first occurrence of 45 if found, otherwise -1.
    """
    start = 0
    end = len(arr) - 1

    while start <= end:
        if arr[start] == 45:
            return start
        if arr[end] == 45:
            return end
        start += 1
        end -= 1

    return -1  # If 45 is not found in the array

# Example usage
arr = [3, 5, 7, 8, 12, 45, 21, 22, 45, 31]
result = search_45_simultaneously(arr)
if result != -1:
    print(f"Number 45 found at index: {result}")
else:
    print("Number 45 not found in the array")
