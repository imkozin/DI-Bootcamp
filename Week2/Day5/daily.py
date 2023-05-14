# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

def reverse_sentence():
    # sentence = input("Plese write a comma separated words: ")
    sentence = 'hello, world, team, black, laptop'
    words = [word for word in sentence.split(', ')] 
    new_sentence = sorted(words) # sorted is used when new list created which is sorted
    # sort func is used to sort initial list
    print(', '.join(new_sentence))
reverse_sentence()