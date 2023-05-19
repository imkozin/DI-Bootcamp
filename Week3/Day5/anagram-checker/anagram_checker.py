# 🌟 Anagram Checker
# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.

# The class should have the following methods:
# __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, 
# the function should return a list containing [“mate”, “tame”, “team”].)

class AnagramChecker:
    def __init__(self):
        with open('Day5/mini-project/text-file.txt', "r") as f:
            self.words_list = f.read().split()
    
    
    def is_valid_word(self ,word):
        return word in self.words_list
    
    def get_anagrams(self, word):
        anagrams_list = []
        for w in self.words_list:
            if sorted(w) == sorted(word):
                anagrams_list.append(w)
        return anagrams_list

# Hint: you might want to create a separate method called is_anagram(word1, word2), 
# that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.

    def is_anagram(word1, word2):
       if sorted(word1) == sorted(word2):
           return True
       else:
           return False 
       
    

l1 = AnagramChecker()
print(l1.words_list) 