# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
# For example, if the user inputs: 100,150,180


# C = 50
# H = 30
# results = []
# import math
# numbers = input("Enter comma-separated string of numbers ")
# numbers_list = numbers.split(',')
# for number in numbers_list:
#     D = int(number)
#     Q = round(math.sqrt((2 * C * D)/H))
#     results.append(Q)
# print(results)

# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.
# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.

my_text = '''Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.'''
# chars = len(my_text)
# print(f"Characters: {chars}")
# sentences = my_text.count('.')
# print(f"Sentences: {sentences}")
# words = len(my_text.split())
# print(f"Words: {words}")
# unique_words = len(set(my_text.split()))
# print(unique_words)
# avg_words = words / sentences
# print(f"Average words per sentence: {avg_words}")
# words = my_text.split()
# print(words)


# unique_words = set()
# for word in words:
#     unique_words.add(word)
# num_unique_words = len(unique_words)
# print(num_unique_words)

# non_unique_list = []
# for word in words:
#     if words.count(word) > word:
#         non_unique_list.append(word)
# non_unique_words = len(non_unique_list) 
# print(f"Amount of non unique: {non_unique_list}")

# Write a program that prints the frequency of the words from the input.

# Suppose the following input is supplied to the program:
# New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.


sentence = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
sentence_list = sentence.split()
print(sentence_list)
frequency = []
for i in sentence_list:
    if i not in frequency:
        frequency.append(i)
for i in frequency:
    print(i, sentence_list.count(i))

# integers_list = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
# integers_list = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2]
# user_number = input("print 10 numbers in range from  -100 to 100: ")
# integers_list = user_number.split()
# print(integers_list)

# integers_list = []
# for i in range(10):
#     user_number = int(input("print a number in range from  -100 to 100: "))
#     integers_list.append(user_number)
# print(integers_list)

# integers_list = []
# count = 0
# while count < 10:
#     user_number = int(input("print a number in range from  -100 to 100: "))
#     count += 1
#     integers_list.append(user_number)
# print(integers_list)

import random
integers_list = []

# for i in range(10):
#     random_number = random.randint(-100,100)
#     integers_list.append(random_number)
# print(integers_list)

range_size = random.randint(5,10)

for i in range(range_size):
    random_number = random.randint(50,100)
    integers_list.append(random_number)
print(integers_list)

for i in integers_list:
    print(i, end=' ')

# reversed_list = []
# i = 0
# for i in integers_list:
#     if i > 0:
#         reversed_list.insert(0, i) 
#     elif i < 0:
#         reversed_list.insert(-1,i) 
# print(reversed_list)

# min = integers_list[0]
# max = integers_list[0]
# for i in range(len(integers_list)):
#     if integers_list[i] > min:
#         min = integers_list[i]
#     elif integers_list[i] < max:
#         max = integers_list[i]
# print('min number is ' + str(max))
# print('max number is ' + str(min))

# count_int_sum = 0
# for i in integers_list:
#     count_int_sum += i
#     avg_number = count_int_sum / len(integers_list)
# print(count_int_sum)
# print(avg_number)

# first_last = []
# for i in integers_list:
#     if i == integers_list[0] or i == integers_list[-1]:
#         first_last.append(i)
# print(first_last)

# new_list = []
# for i in integers_list:
#     if i > 50 or i < 10:
#         new_list.append(i)
# print(new_list)

# squared_list = []
# for i in integers_list:
#     i **= 2
#     squared_list.append(i)
# print(squared_list)

# no_duplicate = []
# for i in integers_list:
#     if i not in no_duplicate:
#         no_duplicate.append(i)
# print(no_duplicate)
# print(len(no_duplicate))
