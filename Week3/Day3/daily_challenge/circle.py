# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the circle and get something nice
# Be able to add two circles together
# Be able to compare two circles to see which is bigger
# Be able to compare two circles and see if there are equal
# Be able to put them in a list and sort them

import turtle

class Circle:
    circles = []
    def __init__(self, radius, diameter):
        self.radius = float(radius)
        self.diameter = float(diameter)
        self.__class__.circles.append(self)
        

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius * 2)
    
    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter = diameter, radius = diameter / 2)

    def circle_area(self):
        return self.radius ** 2 * 3.14
    
    def __add__(self, other_circle):
        return self.circle_area() + other_circle.circle_area()
    
    def __gt__(self, other):
        return self.diameter > other.diameter

    def __eq__(self, other):
        return self.radius == other.radius
    
    @classmethod
    def circle_list(cls):
        sorted_circles = sorted(cls.circles, key=lambda circle: circle.radius)
        for circle in sorted_circles:
            print(circle)

    def __repr__(self):
        return f"Circle with radius {self.radius} and diameter {self.diameter}"



circleA = Circle.from_diameter(diameter=24)
circleB = Circle.from_radius(radius=8)
circleC = Circle(6, 10)

print("Circle A radius: ", circleA.radius)
print("Circle B diameter: ", circleB.diameter)
# print("Circle A area: ", circleA.circle_area)
print("add", circleA + circleB)
print("compare ", circleA > circleB)
print("equal ", circleA == circleB)
turtle.circle(circleB.radius)
turtle.circle(circleA.diameter)
turtle.circle(circleC.diameter)
print(Circle.circles)
Circle.circle_list()