from game import Game

def get_user_menu_choice():
    print("*** GAME MENU ***")
    user_menu_choice = input("Please select an option: \n1. Play a new game \n2. Show scores \n3. Quit \n")
    return user_menu_choice

def print_results(results:dict):
    print("Thank you for playnig. Here are the results: ")
    print(f"Wins: {results['WIN']}\nLosses: {results['LOSS']}\nDraws: {results['DRAW']}")

def main():
    result_history = {
        'WIN' : 0,
        'LOSS' : 0,
        'DRAW' : 0
    }

    user_choice = get_user_menu_choice()
    while user_choice != '3':
        if user_choice == '1':
            new_game = Game()
            result_history[new_game.play()] += 1
            user_choice = get_user_menu_choice()
        else:
            print_results(result_history)
            user_choice = get_user_menu_choice()

main()

