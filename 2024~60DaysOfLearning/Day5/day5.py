# meta class in a python is a class that creates classes that change the behaviour of other class and 
# can change the instance of a class
class ExampleMetaClass(type):
    print("This is inside a meta class")
class SubClass(metaclass=ExampleMetaClass):
    print("This is meta class")
    
subclass_object = SubClass()
print(f"subclass_object's class is {subclass_object.__class__}/n") 
print(f"SubClass's class is {subclass_object.__class__.__class__}/n")
print(f"ExampleMetaClass's class is {subclass_object.__class__.__class__.__class__}")

class MasterPrinterClass(type):
    # cls --> Refers to the current metaclass itself. 
    # name --> This is a string representing the name of the class being created
    # attrs--> This is a dictionary containing the namespace (attributes and methods) of the class being created.
    def __new__(cls, name, bases, attrs):
        # No need for printf here (it's not a Python function)
        # Access class attributes directly using cls
        print(f"Name: {cls.__name__}")
        print(f"Price: ${attrs['price']:.2f}")
        return super().__new__(cls, name, bases, attrs)
    
class Product(metaclass=MasterPrinterClass):
    name = "Laptop"
    price = 999.99

class Cloth(metaclass=MasterPrinterClass):
    name = "Summer T-Shirt"
    price = 232.33

# Usage
product = Product()
print(product.name)  # Output: Laptop
print(product.price)  # Output: 999.99
cloth = Cloth()
print(cloth.name)  # Output: Summer T-Shirt
print(cloth.price)  # Output: 232.33
print("------<<<<<<<>>>>>>>-----")
print("--- args and kwargs in python-----")

def example_function(*args, **kwargs):
    print("Positional arguments (*args):", args)
    print("Keyword arguments (**kwargs):", kwargs)
# Using the function with different numbers of arguments
example_function(1, 2, 3)  # Output: Positional arguments (*args): (1, 2, 3), Keyword arguments (**kwargs): {}
example_function(a=10, b=20)  # Output: Positional arguments (*args): (), Keyword arguments (**kwargs): {'a': 10, 'b': 20}
example_function(1, 2, 3, a=10, b=20)  # Output: Positional arguments (*args): (1, 2, 3), Keyword arguments (**kwargs): {'a': 10, 'b': 20}
print("------<<<<<<<>>>>>>>-----")

class MyClass:
    def __new__(cls, name, bases, attrs):
        print(f"Class: {cls}")
        print(f"Name: {name}")
        print(f"Bases: {bases}")
        print(f"Attributes: {attrs}")
        return super().__new__(cls)
    
    def print_class_name(self):
        print(f"Print class is a method of the Class name {self.__class__.__name__}")

# Creating an instance of MyClass and passing values to parameters
obj = MyClass.__new__(MyClass, "NewClass", (object,), {"attribute": "value"})
obj1 = MyClass.__new__(MyClass, "Best Movie", ("Intersteller"), {"Genre": "Sci-Fic, Black Hole"})
print(obj1.print_class_name())

# super method 
# --> Provides access to methods of a parent or superclass from within a subclass method.
# new method 
# ---> Defined within a metaclass ,Intercept and potentially modify class creation process