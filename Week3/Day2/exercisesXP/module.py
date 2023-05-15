from exercisesXP import Dog
import random

class Petdog(Dog):
    def __init__(self, dog_name, dog_age, dog_weight, dog_trained=False):
        super().__init__(dog_name, dog_age, dog_weight)
        self.trained = dog_trained
        
    def train(self):
        super().bark()
        self.trained = True

    def play(self, *dog_names):
        # dog_names = []
        # for dog_name in dog_names:
        #     dog_names.append(dog_name)
        dog_names_str = ", ".join(dog_names)
        print(f"{dog_names_str} all play together")

    def do_a_trick(self):
        if self.trained == True:
            trick = random.choice(["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"])
            print(f"{self.name} {trick}")

dog1 = Petdog("Lux", 8, 30)
dog2 = Petdog("Rex", 4, 40)
dog3 = Petdog("Felix", 2, 25)

dog1.play(dog2.name, dog3.name)
dog1.train()
dog1.do_a_trick()