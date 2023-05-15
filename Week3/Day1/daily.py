class Farm:
    def __init__(self, farm_name):
        self.farm = farm_name
        self.animals = {}

    def add_animal(self, new_animal, quantity=1):
        # number is quantity of animals
        if new_animal in self.animals:
            self.animals[new_animal] += quantity
        else:
            self.animals[new_animal] = quantity

        print(self.animals)        

    #     for animal in self.animals:
    #         while self.animals.count(animal) > 1:
    #             self.animals.remove(animal)
    #     # print(self.animals)
    #     return self.animals
    
    def get_info(self):
        print(f"{self.farm} Farm \n")
        for animal, quantity in self.animals.items() :
            print(f"{animal} : {quantity}")
        print("\n \t E-I-E-I-O!")

    def get_animal_types(self):
        animal_types = list(self.animals.keys())
        return sorted(animal_types)
        # animal_types = sorted(list(set(unique_animals))
        # return animal_types

    def get_short_info(self):
        all_animals = self.get_animal_types()
        for animal, quantity in self.animals.items():

            if quantity > 1:
                position_animal = all_animals.index(animal)
                all_animals[position_animal] += 's'
        #animal_types = self.get_animal_types()
        # animal_string = ", ".join(animal_types)
        joining_animals = ', '.join(all_animals[0:-1])
        sentence = f"McDonald's farm has {joining_animals} and {all_animals[-1]}"
        print(sentence)
        # print(f"McDonald's farm has {all_animals}")

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('cat', 2)
macdonald.add_animal('goat', 12)
macdonald.get_animal_types()
macdonald.get_info()
macdonald.get_short_info()
