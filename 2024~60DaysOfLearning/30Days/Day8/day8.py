# Simple Example of MIN MAX OR ZERO SUM GAME PLAYING
# AGENT tries to make balance , if user enters 0 agent gives it 1 and win and vice versa
def get_contrasting_number(exit_keyword="exist"):
  """Prompts the user to enter 0 or 1, but returns the opposite value.

  This function exits the loop and returns None if the user enters the 
  specified exit keyword (defaults to "exist"). Otherwise, it behaves the 
  same as before, returning the contrasting number (0 or 1).

  Args:
      exit_keyword: The word the user can enter to exit the loop (default: "exist").

  Returns:
      int: The opposite of the user's input (either 0 or 1), or None if the user exits.
  """

  while True:
    user_input = input("Enter 0 or 1 (or '{}' to exit): ".format(exit_keyword))
    try:
      # Convert the input to an integer
      number = int(user_input)
      # Validate if it's 0 or 1
      if number in (0, 1):
        # Return the contrasting number
        return 1 - number
      else:
        print("Invalid input. Please enter 0 or 1.")
    except ValueError:
      # Check for exit keyword
      if user_input.lower() == exit_keyword.lower():
        return None
      else:
        print("Invalid input. Please enter a number or '{}' to exit.".format(exit_keyword))

# Example usage with loop termination
while True:
  number = get_contrasting_number()
  if number is None:
    break
  print(f"The Agent is Writing: {number}")
