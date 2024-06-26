import random

def classify_animal(probability):
  """Classifies an animal based on a probability value.

  Args:
      probability: A float between 0 and 1 representing the predicted probability.

  Returns:
      A string: "cat" if the probability is less than 0.5, "dog" otherwise.
  """
  return "cat" if probability < 0.5 else "dog"

def generate_predictions(num_samples):
  """Generates random probabilities and classifies them as cat or dog.

  Args:
      num_samples: An integer representing the number of predictions to generate.

  Returns:
      A list of strings: Each element is "cat" or "dog" based on the classification.
  """
  predictions = []
  for _ in range(num_samples):
    probability = random.random()  # Generate random value between 0 and 1
    prediction = classify_animal(probability)
    predictions.append(prediction)
  return predictions

# Generate 5 random predictions
animal_predictions = generate_predictions(5)

# Print the predictions
print(animal_predictions)

