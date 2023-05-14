# Exercise 1: Cats
# Instructions

# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
        
# cat1 = Cat('Tom', 2)
# cat2 = Cat('Barsik', 3)
# cat3 = Cat('Furguson', 1)

# print(cat1.age)
# print(cat2.name)

# cats = [cat1, cat2, cat3]

# def find_oldest(cats):
#     oldest = cats[0]
#     for i in range(len(cats)):
#         if cats[i].age > oldest.age:
#             oldest = cats[i]
#     return print(f"The oldest cat is {oldest.name}, and he is {oldest.age} years old.")

# oldest = find_oldest(cats)

# Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
    
    def bark (self):
        print(f"{self.name} goes woof!")

    def jump (self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

davids_dog = Dog('Rex', 50)
print(f"His dog's name is {davids_dog.name} and his height is {davids_dog.height} cm.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog('Teacup', 20)
print(f"Her dog's name is {sarahs_dog.name} and his height is {sarahs_dog.height} cm.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height < sarahs_dog.height:
    print("Sarahs dog is heigher")
else:
    print("Davids dog is higher")

# Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        # print(*self.lyrics, sep='\n')
        # [print(i) for i in self.lyrics]
        for i in self.lyrics:
            print(i)

hello = Song(["Hello, it's me", "I was wondering if after all these years you'd like to meet", "To go over everything", "They say that time's supposed to heal ya, but I ain't done much healing"])

hello.sing_me_a_song()


# Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")

    def get_animals(self):
        if self.animals:
            print("Animals in the zoo:")
        else:
            for animal in self.animals:
                print(animal)

    def sell_animals(self, animals_sold):
        if animals_sold in self.animals:
            self.animals.remove(animals_sold)
            print(f"{animals_sold} has been sold.")
        else:
            print(f"{animals_sold} is not in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        animals_dict = {}
        num = 1
        first_letter = sorted_animals[0][0]
        for animal in sorted_animals:
            if animal[0] == first_letter:
                if num in animals_dict:
                    animals_dict[num].append(animal)
                else:
                    animals_dict[num] = [animal]
            else:
                num += 1
                animals_dict[num] = [animal]
                first_letter = animal[0]
        print(animals_dict)
        return animals_dict

        
    def get_groups(self):
        animals_dict = self.sort_animals()
        for group in animals_dict.values():
            print(group)

    # def ramat_gan_safari(self):
    #     self.name.add_animals()
    #     self.name.get_animals()
    #     self.name.sell_animals()
    #     self.name.sort_animals()
    #     self.name.get_groups()


ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("hippo")
ramat_gan_safari.add_animal("elephant")
ramat_gan_safari.add_animal("turtle")
ramat_gan_safari.add_animal("gazelle")
ramat_gan_safari.add_animal("zebra")
ramat_gan_safari.add_animal("lion")
ramat_gan_safari.add_animal("giraffe")
ramat_gan_safari.add_animal("lion")
ramat_gan_safari.add_animal("tiger")
ramat_gan_safari.add_animal("giraffe")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animals("Tiger")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()

# zoo_garden.ramat_gan_safari()

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)
