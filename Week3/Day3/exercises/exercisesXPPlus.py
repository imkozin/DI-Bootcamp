from func import add_numbers
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function

print(add_numbers(2,8))

# Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to the user, else don’t.

import random

def random_number():
    num1 = int(input("Enter the number: "))
    while num1 < 1 or num1 > 100:
        num1 = int(input("Enter the number: "))
    num2 = random.randint(1, 100)
    if num1 == num2:
        print("This is success!")
    else:
        print("You lost!")

random_number()

# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module
import string

def random_string():
    my_string = random.choices(string.ascii_letters, k=5)
    print("".join(my_string))
random_string()

# Create a function that displays the current date.
# Hint : Use the datetime module.

from datetime import date

def today_date():
    today = date.today()
    print("Today's date: ", today)
today_date()


# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

import datetime
def time_left():
    current_date = datetime.datetime.now()
    time_left = datetime.datetime(2024, 1, 1) - current_date
    print("the 1st of January is in ", time_left)
time_left()

# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import datetime
def birthday():
    my_bd = datetime.datetime(1994, 1, 28)
    now = datetime.datetime.now()
    differ = now - my_bd
    print(differ)
    minutes = int(differ.total_seconds() / 60)
    print(f"You have lived {minutes} minutes")
birthday()

# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

import datetime
def holiday():
    today = datetime.datetime.now()
    holiday = datetime.datetime(2023, 5, 26)
    next = holiday - today
    print("the next holiday is Shavout, it will be in ", next)
holiday()

# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.
import datetime

def jupiter_age():
    age = int(input("What is your age in years? "))
    earth = age * 31557600
    mercury = 
jupiter_age()