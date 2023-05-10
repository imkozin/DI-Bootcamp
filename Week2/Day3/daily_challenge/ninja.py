my_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
my_list = my_string.split(',')
print(my_list)
companies = int(len(my_list))
print(f"There are {companies} companies on the list")

reversed_list = sorted(my_list)
print(reversed_list)

count_o = 0
count_no_i = 0 
for i in reversed_list:
    if 'o' in i:
        count_o += 1
    if 'i' not in i:
        count_no_i += 1
print(f"{count_o} company names contain 'o'")
print(f"{count_no_i} dont have 'i' in name")

new_list = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
my_set = set(new_list)
print(my_set)
unique_comp = len(my_set)
new_string = ", ".join(my_set)
print(f"There are {unique_comp} unique companies now in the list")
print(new_string)

manufacturers = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Chevrolet"]
reversed_manufacturers = []

for m in manufacturers:
    reversed_name = m[::-1]
    reversed_manufacturers.append(reversed_name)
reversed_manufacturers.sort()
for m in reversed_manufacturers:
    print(m)



