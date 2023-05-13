def paint_figure(picture, fill='*', empty=' '):
    for row in picture:
        for pixel in row:
            if pixel:
                print(fill, end='')
            else:
                print(empty, end='')
        print(' ')

picture1 = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
]

paint_figure(picture1)


picture2 = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]

paint_figure(picture2)

picture3 = [
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
]

paint_figure(picture3)

my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1):
    minimum = i
    for j in range(i + 1, len(my_list)):
        if(my_list[j] < my_list[minimum]):
            minimum = j
            if(minimum != i):
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list)

# The my_list variable is initialized as a list containing several integers.

# The outer for loop for i in range(len(my_list) - 1) iterates over the indices of the elements in my_list, excluding the last index.

# Inside the outer loop, a variable minimum is initialized with the current index value i. This variable will keep track of the index of the minimum value found during each iteration.

# The inner for loop for j in range(i + 1, len(my_list)) iterates over the indices of the elements in my_list, starting from the index next to the current i value.

# Inside the inner loop, an if condition checks if the element at index j is less than the element at the current minimum index. If true, it means a smaller value has been found, so the minimum index is updated to j.

# After finding the minimum value in the remaining unsorted portion of the list, an if condition checks if the minimum index is different from the current i index. If true, it means a smaller value has been found, and a swap is performed between the elements at indices i and minimum. This swaps the smaller value to its correct position.

# The process continues until all elements are compared and the list is sorted in ascending order.

# Finally, the sorted list is printed using print(my_list).

# In summary, the code is implementing the selection sort algorithm to sort the elements in the list my_list in ascending order. The algorithm repeatedly finds the minimum value in the unsorted portion of the list and swaps it with the element at the beginning of the unsorted portion. This process continues until the entire list is sorted.