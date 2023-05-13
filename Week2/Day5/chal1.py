# Write a script that inserts an item at a defined index in a list.

def insert_item (lst, item, index):
    if index < 0 and index > len(lst):
        print("invalid index")
        return
    lst.insert(index, item)
    print(f"Item inserted at index: {index}")

my_list = [1, 2, 3, 4, 5]
item_to_insert = 'a'
insertion_index = 1
insert_item(my_list, item_to_insert, insertion_index)
print("Updated list: ", my_list)

# Write a script that counts the number of spaces in a string.

def space_counter(my_string):
    count = 0
    for char in my_string:
        if char == ' ':
            count += 1
    return count

new_string = ('Hello world of python')
spaces = space_counter(new_string)
print("The number of spaces is", spaces)
    