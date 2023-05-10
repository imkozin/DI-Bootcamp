# Instructions
# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

number = int(input('Type in number '))
length = int(input('type in length '))
multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)
print(multiples)

# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_string = input("Type in a word without double letters: ")
new_string = ''
for i in range(len(user_string)):
    if i == 0 or user_string[i] != user_string[i-1]:
        new_string = new_string + user_string[i]
print(new_string)