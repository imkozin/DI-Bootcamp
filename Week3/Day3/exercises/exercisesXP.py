# Exercise 1 : Built-In Functions

# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.

# class Function:
#     """
#     This program demonstrates the usage of Python built-in functions: abs(), int(), input().
    
#     - 
#     """

#     def __init__(self, value):
#         """The __init__ method lets the class initialize the object's attributes and serves no other purpose. It is only used within classes."""
#         self.value = value
    
#     def __abs__(self):
#         """abs(): Returns the absolute value of a number."""
#         return abs(self.value)
        

#     def __int__(self):
#         """int(): Converts a value to an integer."""
#         return int(self.value)
    
#     def __input__(self):
#         """input(): Prompts the user for input and returns the entered value as a string."""
#         return input(self.value)

    
# print(Function.__doc__)
# print(Function.__init__.__doc__)
# print(Function.__abs__.__doc__)
# print(Function.__int__.__doc__)
# print(Function.__input__.__doc__)
# print(abs(-243))
# print(int(10.5))
# print(input())

# Exercise 2: Currencies

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"
    
    def __int__(self, amount):
        while self.amount != int(amount):
            raise TypeError
        return self.amount
    
    def __repr__(self):
        return f"Currency {self.amount} {self.currency}s"
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f'Cannot add between Currency type {self.currency} and {other.currency}')
            else:
                return self.amount + other.amount
        else:
            return self.amount + int(other)

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError('Cannot add between Currency type <dollar> and <shekel>')
            else:
                self.amount += other.amount
                return self

        else:
            self.amount += other
            return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
print(c1 + c3)
