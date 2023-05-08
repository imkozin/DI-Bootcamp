number = int(input('Type in number '))
length = int(input('type in length '))
multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)
    print(multiples)

user_string = input("Type in a word without double letters: ")
new_string = ''
for i in range(len(user_string)):
    if i == 0 or user_string[i] != user_string[i-1]:
        new_string = new_word + user_string[i]
print(new_string)