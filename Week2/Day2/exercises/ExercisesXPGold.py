# first = ['a', 'b', 'c']
# second = ['x', 'y', 'z']
# first.extend(second)
# print(first)

# for num in range(1500,2501):
#     if num % 7 == 0 or num % 5 == 0:
#         print(num)


# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# name = input("What is your name? ")

# if name in names:
#     index = names.index(name)
#     print(f"The person {name} is in the list under {index} index")
# else:
#     print(f"Sorry, {name} is not in the list.")

# number1 = int(input("Type in first number "))
# number2 = int(input("Type in second number "))
# number3 = int(input("Type in third number "))

# greatest_number = max(number1,number2, number3)
# print(f"The greatest number is {greatest_number}")

# alphabet = 'abcdefghijklmnopqrstuvwxyz'
# for letter in alphabet:
#     if letter in 'aeiou':
#         print(f"This {letter} is a vowel")
#     else:
#         print(f"This {letter} is consonant")


# words = []
# for i in range(7):
#     word = input("Enter word {}: ".format(i+1))
#     words.append(word)

# letter = input("Enter a single character: ")

# for word in words:
#     if letter in word:
#         index = word.index(letter)
#         print("Index of '{}' in '{}': {}".format(letter, word, index))
#     else:
#         print("'{}' not found in '{}'".format(letter, word))

# num_list = list(range(1, 1000001))
# max_num = max(num_list)
# min_num = min(num_list)
# sum_num = sum(num_list)
# print(min_num, max_num, sum_num)

# my_string = input("Enter comma-separated numbers: ")
# num_list = my_string.split(",")
# num_tuple = tuple(num_list)

# print(num_list)
# print(num_tuple)

import random
wins = 0
losses = 0
while True:
    number = int(input("Enter number from 1 to 9: "))
    r_num = random.randint(1, 9)
    if r_num == number:
        print("You're a Winner")
        wins += 1
    else:
        print("better luck next time")
        losses += 1
        play_again = input("Do you want to play again? (y/n) ")
    if play_again.lower() != 'y':
        break

print(f"Total games won: {wins}")
print(f"Total games lost: {losses}")