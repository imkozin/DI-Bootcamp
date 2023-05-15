# Create a class called Family and implement the following attributes:

# members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# last_name : (string)
# Initial members data:

# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# ]

# 2. Implement the following methods: * born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family. * is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not. * family_presentation: a method that prints the family’s last name and all the members’ first name.


class Family:
    def __init__(self, last_name, fam_members):
        self.last_name = last_name
        self.members = fam_members
    
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} was born in the {self.last_name} family!")

    def is_18(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                return member['age'] >= 18
        return False
                
    def family_presentation(self):
        print(f"This is a family {self.last_name}: ")
        for member in self.members:
            print(member['name'])

initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

family = Family('Goldberg', initial_members)
family.born(name ="David", age = 1, gender = "Male", is_child = True)
family.born(name="Gabi", age=1, gender="Female", is_child=True)
family.family_presentation()
print(family.is_18('Gabi'))

class TheIncredibles(Family):
    def __init__(self, last_name, fam_members):
        super().__init__(last_name, fam_members)

    def use_power(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                if member['age'] >= 18:
                    print(f"{member_name} has the super power: {member['power']}")
                else:
                    raise Exception(f"{member_name} is not over 18 years old and cannot use their power.")
    
    def incredible_presentation(self):
        super().family_presentation()
        print("Members of incredible family and their powers: ")
        for member in self.members:
            print(f"Incredible Name: {member['incredible_name']}, Power: {member['power']}")

initial_members = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]

incredibles = TheIncredibles('Smith', initial_members)
incredibles.use_power('Michael')
incredibles.born(name='Jack', age=1, gender='Male', is_child=True, power='unknown power', incredible_name="SuperBoy")
incredibles.incredible_presentation()
incredibles.use_power("Jack")
