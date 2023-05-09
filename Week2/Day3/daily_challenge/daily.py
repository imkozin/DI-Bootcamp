# user_word = input("Enter a word: ")
# my_dict = {}
# for i in range(len(user_word)):
#     letter = user_word[i]
#     if letter in my_dict:
#         my_dict[letter].append(i)
#     else:
#         my_dict[letter] = [i]
# print(my_dict)


# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1000",
#   "Fertilizer": "$20"
# }

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$300" 

wallet = 100
basket = {}
for item, price in items_purchase.items():
   if int(price[1:]) < wallet:
      basket[item] = int(price[1:])
if len(basket) > 0:
    print(sorted(basket.keys()))
else:
    print("Nothing")


# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 