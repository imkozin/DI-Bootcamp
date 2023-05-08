# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.

# sentence = input("Write a string at least 10 characters long ")
# if len(sentence) < 10 :
#     print("string not long enough")
# elif len(sentence) > 10 :
#     print("string too long")
# else :
#     firstChar = sentence[0]
#     lastChar = sentence[-1]
#     print(firstChar, lastChar)


# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "Hello World"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# Hello World

sentence = "Hello World"
for i in range(len(sentence)):
    print(sentence[:i+1])


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod
import random
# mySentence = input('please write a sentence\n')
mySentence = "Hello World"
mySentence_list = list(mySentence)
print(mySentence_list)
random.shuffle(mySentence_list)
print(mySentence_list)
shuffled_str = ''.join(mySentence_list) 
print(shuffled_str)
