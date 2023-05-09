# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# my_dict = dict(zip(keys, values))
# print(my_dict)


# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0
# for name, age in family.items():
#     if age < 3:
#         price = 0
#     elif 3 < age < 12:
#         price = 10
#     else:
#         price = 15
#     print(f"{name} has to pay {price} USD")
#     total_cost += price
# print(f"Total cost is {total_cost}")

# family = {}
# while True:
#     name = input("Enter the name ")
#     if name == 'done':
#         break
#     age = int(input("Enter the age "))
#     family[name] = age

# total_cost = 0
# for name, age in family.items():
#     if age < 3:
#         price = 0
#     elif 3 < age < 12:
#         price = 10
#     else:
#         price = 15
#     print(f"{name} has to pay {price} USD")
#     total_cost += price
#     print(f"Total cost is {total_cost}")

# brand = {
#     "name" : "Zara", 
#     "creation_date" : 1974,
#     "creator_name" : "Amancio Ortega Gaona",
#     "type_of_clothes" : ["men", "women", "children", "home"],
#     "international_competitors" : ["Gap", "H&M", "Benetton"], 
#     "number_stores" : 7000, 
#     "major_color" : {
#         "France" : "blue", 
#         "Spain" : "red", 
#         "US" : ["pink", "green"]
#         }
# }

# more_on_zara = {
#     'creation_date': 1975, 
#     'number_stores': 10000
# }


# brand["number_stores"] = 2
# brand["country_creation"] = 'Spain'
# brand["international_competitors"].append('Desigual')
# brand.pop('creation_date')
# print(brand["international_competitors"][3])
# print(brand["major_color"]['US'])
# print(len(brand))
# print(brand.get('number_stores'))
# brand.update(more_on_zara)
# print(brand)
# print(f"Zara's clients are {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]}, {brand['type_of_clothes'][2]}")


# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# my_dict = {}
# for i in range(len(users)):
#     my_dict[users[i]] = i
# print(my_dict)


users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
my_dict = {}
for i in range(len(users)):
    users.sort()
    my_dict[users[i]] = i
print(my_dict)

