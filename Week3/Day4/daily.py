import re
import os

sentence = 'A good book would sometimes cost as much as a good house.'

class Text:
    def __init__(self, text):
        self.sentence = text # .replace(".",'').lower()
        self.frequencies = self.frequencies()

    def word_amount(self):
        lst_sentence = len(re.findall(r'\w+', sentence))
        print("Number of words:", lst_sentence)

    word_amount(sentence)

    def get_frequency(self, word):
        try:
            if type(word) is not str:
                raise TypeError("Not the right data type")
            else:
                self.sentence = self.sentence.replace(".",'').lower()
                lst_sentence = self.sentence.split() # split(' ') is default 
                amount_time = lst_sentence.count(word)
                if amount_time == 0:
                    return None
                else:
                    return f"The word {word} was found {amount_time} times"
        except TypeError as error:
            print(error)
        # if word in words:
        #     return words.count(word)
        # else:
        #     return None
    
    def frequencies(self):
        frequent_word = {}
        lst_sentence = self.sentence.split() 
        for word in lst_sentence:
            if word in frequent_word:
                frequent_word[word] += 1
            else:
                frequent_word[word] = 1
        return frequent_word
        # return max(lst_sentence, key=self.get_frequency)
    
        # most_common = ''
        # for word in lst.sentence:
        #     if words.count(word) > words.count(most_common):
        #         most_common = word
        # print(f"The most common word is {most_common}")
        # return most_common
    def common_word(self):
        lst_common_words = []
        for key, value in self.frequencies.items():
            if value == max(self.frequencies.values()):
                lst_common_words.append(key)
        return lst_common_words
    
    def unique_words(self):
        unique_words = []
        for key, value in self.frequencies.items():
            if value == 1:
                unique_words.append(value)
        return unique_words
        # my_list = self.sentence.split()
        # return sorted(list(set(my_list)))
    
    @classmethod
    def from_file(cls, file): # cls refers to this class
        with open(file, "r") as story:
            all_story = story.read()
            return cls(all_story)

# t1 = Text(sentence)
# print(t1.frequencies("house"))
# print(t1.common_word())
# print(t1.unique_words())
# t2 = Text.from_file('Day4/the_stranger.txt')
# print(t2.frequencies("house"))
# print(t2.common_word())
# print(t2.unique_words())

# import nltk
# nltk.download('stopwords')
# from nltk.corpus import stopwords
# lst = stopwords.words('english')
# print(lst)

# from nltk.corpus import stopwords

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    # def stop_words(self):
    #     lst = stopwords.words('english')
    #     print(lst)

    def stop_words(self):
        with open('Day4/stop_words.txt', "r") as f:
            stop_words = f.read().lower()
            words = self.sentence.split()
            for word in words:
                if word in stop_words:
                    words.remove(word)
            self.sentence = " ".join(words)
            print(self.sentence)
        return self.sentence

    def punctuation(self):
        punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        for x in self.sentence.lower():
            if x in punctuations:
                self.sentence = self.sentence.replace(x, '')
        print(self.sentence)
        return self.sentence

    
    def special_char(self):
        clean_text = re.sub(r'[^a-zA-Z0-9\s]', '', self.string)
        return clean_text
    
    def frequency(self):
        words = sum(1 for i in self if i in " \t\n")
        print("Number of words: ", words + 1)

    def frequency(self):
        words = 0
        for i in self:
            if i == " " or i == "\t" or i == "\n":
                words += 1
        if len(self.strip()) > 0:
            print("Number of words: ", words + 1)
        else:
            print(None)

# t1 = TextModification('A good book would sometimes cost as much as a good house.')
# t1.stop_words()
new_text = TextModification.from_file('Day4/the_stranger.txt')
new_text.stop_words()
