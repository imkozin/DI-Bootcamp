import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
import django

django.setup()

from rent.models import Customer, Rental, Vehicle, VehicleType, VehicleSize
from faker import Faker
from datetime import datetime, timedelta
import random

fake = Faker()

def create_vehicles(number):
    for k in range(number):
        vehicle = Vehicle(
            vehicle_type = random.choice(VehicleType.objects.all()),
            vehicle_size = random.choice(VehicleSize.objects.all()),
            real_cost = random.randint(500,1000)
        )

        vehicle.save()

# create_vehicles(50)

def create_rentals(number):
    customers = Customer.objects.all()
    vehicles = Vehicle.objects.all()
    current_date = datetime.now()

    for _ in range(number):
        customer = random.choice(customers)
        vehicle = random.choice(vehicles)

        # Check if the vehicle is already rented and not returned
        if Rental.objects.filter(vehicle=vehicle, return_date=None).exists():
            continue
        
        rental_date = fake.date_time_between(start_date='-30d', end_date=current_date)
        return_date = None

        # Generate a random return date if the rental is not ongoing
        if random.choice([True, False]):
            return_date = fake.date_time_between(start_date=rental_date, end_date=current_date)

        rental = Rental(customer=customer, vehicle=vehicle, rental_date=rental_date, return_date=return_date)

        rental.save()

    print(f"CREATED {number} Rentals")

# create_rentals(100)

# fake = Faker(locale=['en_US', 'it_IT', 'fr_FR'])

# def create_customers(number):

#     for _ in range(number):

#         first_name = fake.first_name()
#         last_name = fake.last_name()
#         email = fake.email()
#         phone_number = fake.msisdn()
#         address = fake.address()

#         customer = Customer(first_name = first_name,
#                             last_name = last_name,
#                             email = email,
#                             phone_number = phone_number, 
#                             address = address)
#         customer.save()

#     print(f"CREATED {number} Customers")

# create_customers(100)