# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message ():
    my_sentence = "I'm learning python functions"
    print(my_sentence)
    return my_sentence
display_message()

#  Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    print("One of my favorite books is " + title)
favorite_book("Alice in Wonderland")

# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

def describe_city (city, country = 'Spain'):
    print(f"{city} is in {country}")
describe_city('Madrid')

# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random
def generate_number ():
    num = int(input("Type in number between 1 and 100 "))
    while num < 1 or num > 100:
        print("Number is out of range. Please try again.")
        num = int(input("Type in number between 1 and 100: "))
    
    random_num = random.randint(1,100)
    print(f"This is randomly generated number {random_num}")
    if num == random_num:
        print('This is success!!!')
    else:
        print(f"Failed, {num}, {random_num}")
generate_number()

# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt (size = 'large', message = 'I love Python'):
    while size != 'large' and size != 'medium' and size != 'small':
        print("Size is out of stock. Please try again.")
        size = input("What is your T-shirt size? (large, medium, small) ")
    if size == 'large' or size == 'medium':
        print(f"The size of the shirt is {size} and the text is {message}")
    else:
        message = input("What is your text on T-shirt? ")
        print(f"The size of the shirt is {size} and the text is {message}")
make_shirt()

# Using this list of magician’s names. magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Pass the list to a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(names):
    for name in names:
        print(name)

def make_great(names):
    for i in range(len(names)):
        names[i] += " the Great"

show_magicians(magician_names)
make_great(magician_names)
show_magicians(magician_names)


import random
def get_random_temp(month):
    if month in [12, 1, 2]:
        temp_cel = round(random.uniform(-10, 5), 1)
    elif month in [3, 4, 5]:
        temp_cel = round(random.uniform(6, 20), 1)
    elif month in [6, 7, 8]:
        temp_cel = round(random.uniform(21, 40), 1)
    elif month in [9, 10, 11]:
        temp_cel = round(random.uniform(7, 19), 1)
    return temp_cel

def main():
   month = int(input("What is month now? (1, 2, 3 etc.) "))
   if 1 <= month <= 12: 
       temperature = get_random_temp(month)
   else:
       print("Invalid number")
       return main
   print(f"The temperature right now is {temperature} degrees Celsius.")
   if temperature < 0: 
       print("Brrr, thats freezing! Wear some extra layers today")
   elif 0 <= temperature <= 16: 
       print("Quite chilly! Dont forget your coat")
   elif 16 < temperature <= 23:
       print("It is nice weather today!")
   elif 23 < temperature <= 32:
       print("Today is the best weather to go to the beach")
   else:
       print("Today is a very hot day, dont forget to hydrate yourself")
main()