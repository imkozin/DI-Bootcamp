# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# Hint
# To do this project, you basically need to create four functions:

# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.



# Tips : Consider The Following:
# What functionality will need to accur every turn to make this program work?
# After contemplating the question above, think about splitting your code into smaller pieces (functions).
# Remember to follow the single responsibility principle! each function should do one thing and do it well!

# board = [
#     [' ', ' ', ' '],
#     [' ', ' ', ' '],
#     [' ', ' ', ' '],
# ]
# print("*************")
# for row in board:
#         print("* " + row[0] + " | " + row[1] + " | " + row[2] + " *")
#     print("*---|---|---*")
# print("*************")

import random

print("Welcome to Tic Tac Toe")
print("**********************")

possible_num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
rows = 3
cols = 3


def print_board():
    for x in range(rows):
        print('\n+---+---+---+')
        print("|", end='')
        for y in range(cols):
            print("", board[x][y], end=" |")
    print('\n+---+---+---+')

def modify_array(num, turn):
    num -= 1
    if num == 0:
        board[0][0] = turn
    elif num == 1:
        board[0][1] = turn
    elif num == 2:
        board[0][2] = turn
    elif num == 3:
        board[1][0] = turn
    elif num == 4:
        board[1][1] = turn
    elif num == 5:
        board[1][2] = turn
    elif num == 6:
        board[2][0] = turn
    elif num == 7:
        board[2][1] = turn
    elif num == 8:
        board[2][2] = turn


        
def check_winner(board):
    # X axes
    if board[0][0] == 'X' and board[0][1] == 'X' and board[0][2] == 'X':
        print("X has won!")
        return "X"
    elif board[0][0] == '0' and board[0][1] == '0' and board[0][2] == '0':
        print("0 has won!")
        return "0"
    elif board[1][0] == 'X' and board[1][1] == 'X' and board[1][2] == 'X':
        print("X has won!")
        return "X"
    elif board[1][0] == '0' and board[1][1] == '0' and board[1][2] == '0':
        print("0 has won!")
        return "0"
    elif board[2][0] == 'X' and board[2][1] == 'X' and board[2][2] == 'X':
        print("X has won!")
        return "X"
    elif board[2][0] == '0' and board[2][1] == '0' and board[2][2] == '0':
        print("0 has won!")
        return "0"
    # Y axes
    elif board[0][0] == 'X' and board[1][0] == 'X' and board[2][0] == 'X':
        print("X has won!")
        return "X"
    elif board[0][0] == '0' and board[1][0] == '0' and board[2][0] == '0':
        print("0 has won!")
        return "0"
    elif board[0][1] == 'X' and board[1][1] == 'X' and board[2][1] == 'X':
        print("X has won!")
        return "X"
    elif board[0][1] == '0' and board[1][1] == '0' and board[2][1] == '0':
        print("0 has won!")
        return "0"
    elif board[0][2] == 'X' and board[1][2] == 'X' and board[2][2] == 'X':
        print("X has won!")
        return "X"
    elif board[0][2] == '0' and board[1][2] == '0' and board[2][2] == '0':
        print("0 has won!")
        return "0"
    # Cross axes
    elif board[0][0] == 'X' and board[1][1] == 'X' and board[2][2] == 'X':
        print("X has won!")
        return "X"
    elif board[0][0] == '0' and board[1][1] == '0' and board[2][2] == '0':
        print("0 has won!")
        return "0"
    elif board[0][2] == 'X' and board[1][1] == 'X' and board[2][0] == 'X':
        print("X has won!")
        return "X"
    elif board[0][2] == '0' and board[1][1] == '0' and board[2][0] == '0':
        print("0 has won!")
        return "0"
    else:
        return "N"

leave_loop = False
turn_counter = 0

while(leave_loop == False):
        # It's a player turn
        if turn_counter % 2 == 1:
            print_board()
            num_picked = int(input("\nChoose a number [1=9]: "))
            if num_picked >= 1 or num_picked <= 9:
                modify_array(num_picked, 'X')
                possible_num.remove(num_picked)
            else:
                print("Invalid input. Please try again.")
            turn_counter += 1
        # it's computer's turn 
        else:
            while True:
                cpu_turn = random.choice(possible_num)
                print('\nCpu choice ', cpu_turn)
                if cpu_turn in possible_num:
                    modify_array(cpu_turn, '0')
                    possible_num.remove(cpu_turn)
                    turn_counter += 1
                    break
        winner = check_winner(board)
        if winner != 'N':
            print_board()
            print("\n Game over! Thank you for playing!")
            break
