# Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


my_fav_numbers = {5, 7, 10, 21}
my_fav_numbers.add(24)
my_fav_numbers.add(28)
print(my_fav_numbers)
my_fav_numbers.remove(28)
print(my_fav_numbers)

friend_fav_numbers = {1, 2, 3, 4}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

my_tuple = (5, 7, 10, 21, 24, 1, 2, 3, 4)
print(type(my_tuple))
new_tuple = my_tuple + (24, 28, 8)
print(new_tuple) 


# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

list_basket = ["Banana", "Apples", "Oranges", "Blueberries"]
list_basket.remove("Banana")
print(list_basket)
list_basket.pop(-1)
print(list_basket)
list_basket.append("Kiwi")
print(list_basket)
list_basket.insert(0, "Apples")
print(list_basket)
count_apples = list_basket.count("Apples")
print(count_apples)
list_basket.clear()
print(list_basket)

# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?


# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

f_list = []
for f_num in range(1,6): 
    f_list.append(f_num)
    f_num = float(f_num) + 0.5
    f_list.append(f_num)
print(f_list)

# f_num = 1
# f_list = []
# for f_num in range(1,6):
#     if f_num < 6:
#         f_num = 0.5 + float(f_num)
#         f_list.append(f_num)
#     print(f_list)

# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for num in range(1, 21):
  if num % 2 == 0:
    print(f"{num} - Number is even")

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

user_name = input("Please write your name: ")
while user_name != "Ivan":
  user_name = input("Please write your name: ")
#   if user_name == "Ivan":
#     print('Hello Ivan')
#     break
  

# 🌟 Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

fav_fruit_list = []
fav_fruit = input("What are your favorites fruits, separated by space?")
print(fav_fruit)
fav_fruit_list.extend(fav_fruit.split())
print(fav_fruit_list)
fav_fruit = input("What is your most favorite fruit?")
if fav_fruit in fav_fruit_list:
  print("You chose one of your favorite fruits! Enjoy!")  
else:
    print("You chose a new fruit. I hope you enjoy")

# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

topping_list = []
topping = input("What topping do you want, enter quit to stop?")
while topping != 'quit':
   topping_list.append(topping)
   print("Adding " + topping + " to your pizza...")
   topping = input("What topping would you like?")
str_toppings = " , ".join(topping_list) # create a string all the element
print("Your pizza toppings are: " + str_toppings)
total_price = 10 + 2.5 * len(topping_list)
print("Total price: $" + str(total_price))

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.

total_cost = 0
family = int(input("Enter number of family members: "))
for _ in range(family):
    age = int(input("How old are you? "))
    if age < 3:
        ticket_price = 0
    elif age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15
    total_cost += ticket_price
print("The total cost of all tickets is $" + str(total_cost))


# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

teen_list = ['David', 'Jacob', 'Avi', 'Yoni', 'Lior']
allowed = []
for name in teen_list:
    age = int(input(f"How old is are you {name}?"))
    if 16 <= age <= 21:
       allowed.append(name)
print(f"The following teenagers are allowed to watch the movie: {allowed}")

# Exercise 10 : Sandwich Orders
# Instructions
# sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
# Use the above list called sandwich_orders.
# Make an empty list called finished_sandwiches.
# As each sandwich is made, move it to the list of finished sandwiches.
# After all the sandwiches have been made, print a message listing each sandwich that was made , such as I made your tuna sandwich.

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
for i in sandwich_orders:
   finished_sandwiches.append(i)
   print(f"I made your " + i)
print(finished_sandwiches)

# Exercise 11 : Sandwich Orders#2
# Instructions
# Using the list sandwich_orders from the previous exercise, make sure the sandwich ‘pastrami’ appears in the list at least three times.
# Add code near the beginning of your program to print a message saying the deli has run out of pastrami, and then use a while loop to remove all occurrences of ‘pastrami’ from sandwich_orders.
# Make sure no pastrami sandwiches end up in finished_sandwiches.

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich", "Pastrami sandwich", "Pastrami sandwich"]
finished_sandwiches = []
print("Sorry, we ran out of pastrami!")
while "Pastrami sandwich" in sandwich_orders:
   sandwich_orders.remove("Pastrami sandwich")

for i in sandwich_orders:
   finished_sandwiches.append(i)
   print(f"I made your " + i)
print(finished_sandwiches)