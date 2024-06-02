# Revising the basic of python syntax because I am very bad at syntax and coding stuff
# Numeric data types
age = 30  # Integer (int) - whole numbers
pi = 3.14159  # Float (float) - decimal numbers
# String data type
name = "Bard"  # String (str) - sequence of characters
# Boolean data type
is_raining = True  # Boolean (bool) - True or False
# List data type (ordered collection of items)
fruits = ["apple", "banana", "cherry"]  # List (list)
numbers = [1, 2, 3, 4, 5]

# Tuple data type (immutable ordered collection)
# Tuples cannot be changed after creation
coordinates = (10, 20)  # Tuple (tuple)

# Dictionary data type (unordered key-value pairs) and are mutable
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}  # Dictionary (dict)

# set data types - curly braces with no key-value, immutable and ordered pair, no duplicancy
my_set = {"apple", "banana", "cherry"}
print(my_set)
print("my set dt is ", type(my_set))

# Print the data types
print(f"Age data type: {type(age)}")
print(f"Pi data type: {type(pi)}")
print(f"Name data type: {type(name)}")
print(f"Is raining data type: {type(is_raining)}")
print(f"Fruits data type: {type(fruits)}")
print(f"Numbers data type: {type(numbers)}")
print(f"Coordinates data type: {type(coordinates)}")
print(f"Person data type: {type(person)}")

# Accessing elements in lists and dictionaries
print(f"First fruit: {fruits[0]}")
print(f"Alice's city: {person['city']}")

for i in person:
    print(i)
    
for key, value in person.items():
    print(f"{key}: {value}")
    
