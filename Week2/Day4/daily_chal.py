secret = '''
    7i3
    Tsi
    h%x
    i #
    sM 
    $a 
    #t%
    ^r!
'''

def create_matrix ():
    lst_one = secret.split('\n')
    new_list = []
    counter = 0
    for char in lst_one:
        new_list.append(char[counter])
        counter += 1
    return new_list
create_matrix()

def create_sentence ():
    lst = secret.split('\n')
    sentence = ''
    for column in lst:
        for char in column:
            if char.isalpha() :
                sentence += char
            else:
                sentence += ' '
    print(sentence)
create_sentence()
# def text_to_matrix(text):
#     matrix = []
#     count = 0
#     for row in range(int(len(text) / 3)):
#         matrix.append([])
#         for col in range(3):
#             if count > len(text): break
#             matrix[row].append(text[count])
#             count += 1
#     return matrix

# def decrypt(matrix):
#     decrypted = ''
#     no_alpha_group = 0
#     for col in range(3):
#         for row in matrix:
#             char = row[col]
#             if char.isalpha():
#                 if no_alpha_group > 1 and decrypted.strip() > '': decrypted += ' '
#                 decrypted += row[col]
#                 no_alpha_group = 0
#             else:
#                 no_alpha_group += 1
#     return decrypted

# text = '7i3Tsih%xi #sM $a #t%^r!'
# print(decrypt(text_to_matrix(text)))