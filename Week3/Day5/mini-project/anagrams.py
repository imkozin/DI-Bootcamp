# 'anagrams.py' contains all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
from anagram_checker import AnagramChecker
anagram_check = AnagramChecker()

def show_menu():
    print("***Anagram Checker***")
    user_word = input("Please enter the word (type 'exit' to quit): ").upper()
    return user_word

def validation(user_word):
        if len(user_word.split()) > 1:
            print("Input must be a single word")
            return False
        elif not user_word.isalpha():
            print("Only alphabetic characters are allowed. No numbers or special characters.")
            return False
        else:
            return True
        
def confirm_valid(user_word):
    if anagram_check.is_valid_word(user_word):
        print("This is a valid English word.")
    else:
        print("This is not a valid English word.")

def print_result(user_word):
    anagrams = anagram_check.get_anagrams(user_word)
    print(f"YOUR WORD: {user_word}\nAnagrams for your word: {','.join(anagrams)}")

def main():
    while True:
        user_word = show_menu()
        if user_word == 'EXIT':
            print("Thank you! Goodbye!")
            break
        elif validation(user_word) is True:
            confirm_valid(user_word)
            print_result(user_word)

main()









