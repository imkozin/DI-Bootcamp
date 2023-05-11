1. display_board()
---> print the board

beginning of the game :

board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

print(line of stars)
Loop on the board
print(line of stars)

2. player_input()
determine which turn is it

maximum steps = 9 --> while loop/for loop range 9
turn is odd ---> if the turn is 1 --> X
turn is even ---> if the turn is 2 --> 0

- input row and column
row : 1
col : 2

board = [
    ['', 'X', ''],
    ['', '', ''],
    ['', '', ''],
]

--> check that user doesn't take a place that is already taken
--> check that user doesn't input in the columns and rows are in the range of the board

--> if already taken or wrong : ask again --> while loop

--> only when its ok you append it inside the board

--> display_board()

# check_win()
after the user gave you an answer, and check it the answer is relevant in every turn you need to check



