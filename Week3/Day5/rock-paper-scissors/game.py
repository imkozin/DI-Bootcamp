import random

class Game:
    def __init__(self):
        self.user_item = self.get_user_item()
        self.computer_item = self.get_computer_item()
    
    @staticmethod
    def get_user_item():
        user_select = input(' \'R\': rock\n \'P\': paper\n \'S\': scissors\n').lower()
        while user_select not in ['r', 'p', 's']:
            user_select = input(' \'R\': rock\n \'P\': paper\n \'S\': scissors\n').lower()
        return user_select
    
# get_computer_item(self) – Select rock/paper/scissors at random for the computer. 
# Return the item at the end of the function. Use python’s random.choice() function (read about it online).

    @staticmethod
    def get_computer_item():
        computer_select = random.choice(['r', 'p', 's'])
        return computer_select
    
# get_game_result(self, user_item, computer_item) – Determine the result of the game.
# Parameters:
# user_item – the user’s chosen item (rock/paper/scissors)
# computer_item – the computer’s chosen (random) item (rock/paper/scissors)
# Return either win, draw, or loss. Where win means that the user has won, 
# draw means the user and the computer got the same item, and loss means that the user has lost.
    
    def get_game_result(self):
        if self.user_item == self.computer_item:
            return "DRAW!"
        elif self.user_item == "p" and self.computer_item == "r" or self.user_item == "s" and self.computer_item == "p" or self.user_item == "r" and self.computer_item == "s":
            return "WIN!"
        else:
            return "LOSS!"
        
# play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
# Get the user’s item (rock/paper/scissors) and remember it

# Get a random item for the computer (rock/paper/scissors) and remember it

# Determine the results of the game by comparing the user’s item and the computer’s item
# Print the output of the game; something like this: “You selected rock. The computer selected paper. 
# You lose”, “You selected scissors. The computer selected scissors. You drew!”

# Return the results of the game as a string: win;draw;loss;, where win means that the user has won, 
# draw means the user and the computer got the same item, and loss means that the user has lost.
        
    def play(self):
        print(f"You selected {self.user_item}. The computer selected {self.computer_item}. {self.get_game_result}")
        return self.get_game_result()
    
#my_game = Game()

