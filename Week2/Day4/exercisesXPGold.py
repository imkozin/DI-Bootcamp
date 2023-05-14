def compute_sum(X):
    # Convert X to a string
    X_str = str(X)

    # Compute the values X, XX, XXX, XXXX
    values = [int(X_str * (i + 1)) for i in range(4)]

    # Compute the sum of the values
    total_sum = sum(values)

    return total_sum

# Example usage
X = 3
result = compute_sum(X)
print(result)

# Function to calculate age based on the given date of birth
def get_age(year, month, day):
    # Hard-code current year and month
    current_year = 2023
    current_month = 5
    current_day = 11

    # Calculate the age
    age = current_year - year

    # Adjust the age based on the current month and day
    if current_month < month:
        age -= 1
    elif current_month == month and day > current_day:
        age -= 1

    return age

# Function to check if a person can retire based on gender and date of birth
def can_retire(gender, date_of_birth):
    # Split the date of birth into year, month, and day
    year, month, day = map(int, date_of_birth.split('/'))

    # Get the age using the get_age function
    age = get_age(year, month, day)

    # Check if the person can retire based on gender and age
    if gender == 'm' and age >= 67:
        return True
    elif gender == 'f' and age >= 62:
        return True
    else:
        return False

# Get user input for gender and date of birth
gender = input("Enter gender (m/f): ")
date_of_birth = input("Enter date of birth (yyyy/mm/dd): ")

# Check if the person can retire using the can_retire function
retirement_eligible = can_retire(gender, date_of_birth)

# Display the result
if retirement_eligible:
    print("You can retire!")
else:
    print("You are not eligible for retirement yet.")

