# What is a class?

# A class is a blueprint or template that defines the characteristics and behaviors of an object. It serves as a blueprint for creating objects of that class type.
# What is an instance?

# An instance is a specific occurrence of a class, created based on the blueprint provided by the class. It represents a unique object with its own set of data and state.
# What is encapsulation?

# Encapsulation is a principle in object-oriented programming that involves bundling data and the methods that operate on that data within a single unit called a class. It allows for data hiding, where the internal state of an object is protected from direct access and can only be modified through predefined methods.
# What is abstraction?

# Abstraction is a concept in object-oriented programming that focuses on representing the essential features and behavior of an object, while hiding unnecessary details. It provides a simplified and generalized view of an object, allowing users to interact with it without needing to understand its internal implementation.
# What is inheritance?

# Inheritance is a mechanism in object-oriented programming that allows a class to inherit the properties and methods of another class. The class that inherits is called a subclass or derived class, and the class from which it inherits is called a superclass or base class. Inheritance promotes code reuse and the creation of hierarchical relationships between classes.
# What is multiple inheritance?

# Multiple inheritance is a feature in some programming languages that allows a class to inherit from multiple parent classes. This means that a subclass can inherit attributes and behaviors from multiple superclasses. However, multiple inheritance can lead to complexities and potential conflicts in the case of conflicting method or attribute names.
# What is polymorphism?

# Polymorphism is the ability of objects of different classes to be treated as objects of a common superclass. It allows methods to be written that can work with objects of different types, as long as they share a common interface or base class. Polymorphism promotes code flexibility, extensibility, and modularity.
# What is method resolution order or MRO?

# Method Resolution Order (MRO) is the order in which a programming language resolves the method calls in the presence of inheritance and multiple inheritance. It defines the sequence in which methods are searched for and executed in a class hierarchy. The MRO determines the precedence of method execution when there are methods with the same name in different classes within the inheritance hierarchy. Different programming languages have different rules for determining the MRO, such as depth-first, breadth-first, or C3 linearization algorithms.

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return (f"{self.value} of {self.suit}")

class Deck:
    def __init__(self):
        self.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A', '2','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = []
        # self.cards = [Card(s, v) for s in suits for v in values]
        for s in self.suits:
            for v in self.values:
                self.cards.append(Card(s, v))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) > 0:
            return self.cards.pop()
        else:
            return None
    
    def random_deal(self):
        choice = random.choice(self.cards)
        self.cards.remove(choice)
        return choice



d = Deck()
d.shuffle()
for card in d.cards:
    print(card)
random_card = d.random_deal()
print(f'Random card: {random_card.value} of {random_card.suit}')
