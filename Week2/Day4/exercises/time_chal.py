# Write a program which takes a string and a character as an input, and finds out the number of occurrences the character has in the string.

# String: Programming is cool!
# Character: o
# 3


# String: This is a great example
# Character: y
# 0


def find_number (string, char):
    count = 0
    for i in string:
        if i == char:
            count += 1
    return count

input_string = input("Write a sentence ")
input_char = input("Write a character ")

occurences = find_number(input_string, input_char)
print(occurences)

# def find_number(string, char):
#     count = 0
#     for i in string:
#         if i == char:
#             count += 1
#     return count

# input_string = input("Write a sentence: ")
# input_char = input("Write a character: ")

# occurrences = find_number(input_string, input_char)
# print(f"The character '{input_char}' occurs {occurrences} times in the string.")

