class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = []

    def add_animal(self, new_animal, quantity=1):
        # number is quantity of animals
        for _ in range(quantity):
            self.animals.append(new_animal)
        if quantity > 1:
            print(f"{quantity} {new_animal}s were added to farm")
        else:
            print(f"{quantity} {new_animal} was added to farm")

        print(self.animals)

    def get_animal_types(self):
    #     unique_animals = set(self.animals)
    #     animal_types = sorted(list(unique_animals))
    #     print(animal_types)
    #     return animal_types

        for animal in self.animals:
            while self.animals.count(animal) > 1:
                self.animals.remove(animal)
        # print(self.animals)
        return self.animals
    
    def get_short_info(self):
        animal_types = self.get_animal_types()
        animal_string = ", ".join(animal_types)
        print(f"McDonald's farm has {animal_string}")

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_animal_types())

print(macdonald.get_short_info())
