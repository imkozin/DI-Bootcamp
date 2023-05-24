import psycopg2
from menu_item import *
from menu_manager import MenuManager

def show_user_menu():
    print("""*** Program menu ***\n(V) View an Item\n(A) Add an Item\n(D) Delete an Item\n(U) Update an Item\n(S) Show the Menu\n(E) Exit""")
    while True:
        user_input = input("Choose one of the option: ").upper()
        if user_input == 'V':
            name = input("Item name: ").capitalize()
            print(MenuManager.get_by_name(name))
        elif user_input == 'A':
            add_item_to_menu()
        elif user_input == 'D':
            remove_item_from_menu()
        elif user_input == 'U':
            update_item_from_menu()
        elif user_input == 'S':
            show_restaurant_menu()
        elif user_input == 'E':
            main()
        else:
            print("Invalid choice, choose from one of the given options")


def add_item_to_menu():
    name = input("Item name: ").capitalize()
    price = int(input("Item price: "))
    print(f"{name} was added to the menu.")
    return MenuItem(name, price).save_item()

def remove_item_from_menu():
    name = input("Item name: ").capitalize()
    price = int(input("Item price: "))
    print(f"{name} was deleted from the menu.")
    return MenuItem(name, price).delete_item()

def update_item_from_menu():
    old_name = input("Item old-name: ").capitalize()
    old_price = int(input("Item old-price: "))
    new_name = input("Item new name: ").capitalize()
    new_price = int(input("Item new price: "))
    print("Menu has been updated successfully")
    return MenuItem(old_name, old_price).update_item(new_name, new_price)

def show_restaurant_menu():
    print("*** MENU ***")
    items = MenuManager().all_items()
    print(items)

def main():
    show_restaurant_menu()
    return "Thank you! See you next time!"

show_user_menu()
