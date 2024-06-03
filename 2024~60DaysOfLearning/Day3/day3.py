# In Python, __init__ is a special method known as the constructor.
# It is automatically called when a new instance of a class is created. 
# The purpose of __init__ is to initialize the attributes of the class. 

# classes are the blueprint of the object. It defines the properties (attributes) 
# and functionalities (methods) that objects of that class will have.

# self --> a clear and consistent way to refer to instance variables and methods within class definitions.
# Instance Reference,Attribute Access and It is explicitly included in the method definitions, 
# unlike languages like C++ or Java, but in python where the instance reference is implicit.

class Car:
  # Attributes (properties) to describe a car
  def __init__(self, make, model, color):
    self.make = make
    self.model = model
    self.color = color

  # Methods (functions) that define car behavior
  def accelerate(self):
    print("The car is accelerating!")

  def brake(self):
    print("The car is braking!")

# # Create objects (instances) of the Car class
# toyota_corolla = Car("Toyota", "Corolla", "Silver")
# tesla_model_s = Car("Tesla", "Model S", "Black")

# # Accessing attributes and methods
# print(toyota_corolla.make)  # Output: Toyota
# print(tesla_model_s.color)  # Output: Black

# toyota_corolla.accelerate()  # Output: The car is accelerating!
# tesla_model_s.brake()  # Output: The car is braking!


class Model:
    def __init__(self, modelName, algorithms):
        """
        Initializes a Model object with the specified model name and algorithms.

        Args:
            modelName (str): The name of the model.
            algorithms (list): A list of algorithms used by the model.
        """
        self.modelName = modelName
        self.algorithms = algorithms

    def announceModelName(self):
        """
        Prints the model name to the console.
        """
        print(f"The model name is: {self.modelName}")  # Using f-string for cleaner formatting

    def modelAlgo(self):
        """
        Prints the list of algorithms used by the model to the console. # set return
        """
        print(f"The algorithms used are: {self.algorithms}")  # Using f-string for clarity

# Creating object
obj1 = Model("LM", ["GPT", "Transformer"])  # Create a model with multiple algorithms

# Calling methods (without the parentheses)
print(obj1.announceModelName())  # Call the method to print the model name
print(obj1.modelAlgo())  # Call the method to print the algorithms
