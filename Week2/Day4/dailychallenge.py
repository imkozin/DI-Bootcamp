secret = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""



# Outer Loop
#     1st loop :  num = 0
#     Inner loop
#         1st loop : char = "7i3" --> char[0]
#         2nd loop : char = "Tsi" --> char[0]
#         3rd loop : char = "h%x" --> char[0]

#     1st loop :  num = 1
#         Inner loop
#         1st loop : char = "7i3" --> char[1]
#         2nd loop : char = "Tsi" --> char[1]
#         3rd loop : char = "h%x" --> char[1]


def create_matrix () :
    lst_one = secret.split("\n")
    new_list = []
    for num in range(3) :
        new_list.append([char[num] for char in lst_one])
    # print(new_list)

    return new_list


# [
#     ['7', 'T', 'h', 'i', 's', '$', '#', '^'], 
#     ['i', 's', '%', ' ', 'M', 'a', 't', 'r'], 
#     ['3', 'i', 'x', '#', ' ', ' ', '%', '!']
# ]


def create_sentence() :
    lst = create_matrix() #"hello"
    sentence = ""
    for column in lst : 
        for char in column:
            if char.isalpha() :
                sentence += char
            else :
                sentence += " "

    print(sentence)

create_sentence()


# print("ג".isalpha())