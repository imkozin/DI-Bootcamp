import random
# import os
# dir_path = os.path.dirname(os.path.realpath(__file__))
# with open((dir_path + "/text.txt"), "r") as story:
#      print(story.read())

def get_words_from_file(filename):
    #path to file
    with open(filename, "r") as my_file:
        words_list = my_file.read().split()
    return words_list

def get_random_sentence(length):
    words_list = get_words_from_file("/Users/ivankozin/DI-Bootcamp/Week3/Day4/text.txt")
    sentence = " ".join(random.choices(words_list, k=length)).lower()
    return sentence
    
def main():
    '''This is a random sentence generator'''
    try:
        user_length = int(input("Enter the sentence length (from 2 to 20): "))
        if user_length < 2 or user_length > 20:
            raise TypeError("Sorry, no numbers below 2 and above 20")
        if type(user_length) != int:
            print("hello")
            raise ValueError("Only integers are allowed")
        print(get_random_sentence(user_length))
    except ValueError as error:
        print("VALUE ERROR")
    except TypeError as error:
        print("TYPE ERROR")
        print(error)
        print("PROGRAM ERROR. GOODBYE!")

main()
    


# import requests

# import json

# response = requests.get('https://api.chucknorris.io/jokes/random')

# print(response.json())

# data = []

# data.append(response.json())

# print(data)