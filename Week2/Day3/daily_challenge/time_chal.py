# reverseinp = input("Type in a sentence ")
# my_list = reverseinp.split()
# my_list.reverse()
# reversed = ' '.join(map(str, my_list))
# print(reversed) 

# sentence = "You have entered a wrong domain"
# words = sentence.split()
# reversed_sentence = " ".join(words[::-1])
# print(reversed_sentence)


x = int(input("Enter the number: "))
sum_of_divisors = 0
for i in range(1, x):
    if x % i == 0:
        sum_of_divisors += i
if sum_of_divisors == x:
    print(True)
else:
    print(False)
