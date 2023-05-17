import re
import os

sentence = 'A good book would sometimes cost as much as a good house.'

class Text:
    def __init__(self, text):
        self.text = text

    def word_amount(self):
        words = len(re.findall(r'\w+', sentence))
        print("Number of words:", words)

    word_amount(sentence)

    def get_frequency(self, word):
        words = self.text.split()
        if word in words:
            return words.count(word)
        else:
            return None
    
    def common_word(self):
        words = self.text.split(' ')
        return max(words, key=self.get_frequency)
        # most_common = ''
        # for word in words:
        #     if words.count(word) > words.count(most_common):
        #         most_common = word
        # print(f"The most common word is {most_common}")
        # return most_common
    
    def unique_words(self):
        my_list = self.text.split(' ')
        return sorted(list(set(my_list)))
    
    @classmethod
    def get_text(cls, file):
        with open(file, "r") as f:
            text = f.readlines()
            return cls(text)

file_text = Text.get_text('/Users/ivankozin/DI-Bootcamp/Week3/Day4/the_stranger.txt')

my_text = Text(sentence)
print(my_text.get_frequency("as"))
print(my_text.common_word())
print(my_text.unique_words())
# print(file_text.get_frequency("stanger"))
# print(file_text.common_word())
# print(file_text.unique_words())

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    def punctuation(self):
        punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        for x in self.text.lower():
            if x in punctuations:
                self.text = self.text.replace(x, '')
        print(self.text)
        return self.text

    def stop_words(self):
        with open('/Users/ivankozin/DI-Bootcamp/Week3/Day4/stop_words.txt', "r") as f:
            stop_words = f.read().lower()
        words = self.text.split()
        for word in words:
            if word in stop_words:
                words.remove(word)
        self.text = " ".join(words)
        print(self.text)
        return self.text
    
    def special_char(self):
        clean_text = re.sub(r'[^a-zA-Z0-9\s]', '', self.string)
        return clean_text
    
    # def frequency(self):
    #     words = sum(1 for i in self if i in " \t\n")
    #     print("Number of words: ", words + 1)

    # def frequency(self):
    #     words = 0
    #     for i in self:
    #         if i == " " or i == "\t" or i == "\n":
    #             words += 1
    #     if len(self.strip()) > 0:
    #         print("Number of words: ", words + 1)
    #     else:
    #         print(None)


# new_text = Text.get_text('the_stranger.txt')

