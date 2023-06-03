from django.shortcuts import render, get_object_or_404
from django.db.models import F
from .models import *
from .forms import CustomerForm, VehicleForm, RentalForm
from django.http import HttpResponse

# Create your views here.
def all_rentals(request):
    ordered_rentals = Rental.objects.order_by(F('return_date').asc(nulls_first=True))
    context = {
        'title' : 'All Rentals',
        'rentals' : ordered_rentals 
    }
    return render(request, 'rent/all_rentals.html', context)

# /rent/customer/ - show all customers, in alphabetical order

def all_customers(request):
    customers_list = Customer.objects.order_by('last_name', 'first_name')

    context = {
        'customers' : customers_list 
    }
    return render(request, 'rent/all_customers.html', context)


# /rent/rental/<pk> - show the information about the given rental:
# customer details
# vehicle details
# rental details (“Returned on: <date>” / “Not yet returned”)

def rental_info(request, pk):
    rental = get_object_or_404(Rental, id=pk)
    
    # Get customer details
    customer = rental.customer

    # Get vehicle details
    vehicle = rental.vehicle

    if rental.return_date:
        rental_status = f'Returned on: {rental.return_date}'
    else:
        rental_status = 'Not returned yet'
    
    context = {
        'title' : 'Rental Details',
        'customer' : customer,
        'vehicle' : vehicle,
        'status' : rental_status
    }

    return render(request, 'rent/rental_info.html', context)
# /rent/rental/add – provide a form to enter a customer ID and a vehicle ID to create a rental.
# If the customer or the vehicle does not exist, show a user-friendly error message.
# If the vehicle is currently being rented, show a relevant error message.

def add_rental(request):
    if request.method == 'POST':
        filled_form = RentalForm(request.POST)
        if filled_form.is_valid():
            customer = filled_form.cleaned_data['customer']
            vehicle = filled_form.cleaned_data['vehicle']

            if Rental.objects.filter(vehicle=vehicle, return_date=None).exists():
                error_message = 'Vehicle is currently being rented.'

                context = {
                    'form': filled_form,
                    'error': error_message
                }
                return render(request, 'rent/add_vehicle.html', context)

            rental = Rental(customer=customer, vehicle=vehicle)
            rental.save()
            return HttpResponse('Rental added successfully!')
    else:
        filled_form = RentalForm()
        context = {
            'form': filled_form
        }

    return render(request, 'rent/add_vehicle.html', context)

# /rent/customer/<pk> - show the customer matching the given ID
def customer_info(request, pk):
    customer = get_object_or_404(Customer, id=pk)

    context = {
        'title' : 'Customer Details',
        'customer' : customer
    }

    return render(request, 'rent/customer_info.html', context)



# /rent/customer/add – provide a form to add a new customer

def add_customer(request):

    if request.method == 'POST':
        form_filled = CustomerForm(request.POST)
        if form_filled.is_valid():
            form_filled.save()

    customer_form = CustomerForm()
    context = {
        'form' : customer_form
    }

    return render(request, 'rent/add_customer.html', context)

# /rent/vehicle/ - show all vehicles, grouped into their groups (‘bike’ and ‘scooter’)

def all_vehicles(request):
    vehicles = Vehicle.objects.all().order_by('vehicle_type')

    context = {
        'title' : 'All Vehicles',
        'vehicles' : vehicles
    }

    return render(request, 'rent/all_vehicles.html', context)

# /rent/vehicle/<pk> - show the specific vehicle
# also show whether it’s currently being rented

def vehicle_info(request, pk):
    vehicle = get_object_or_404(Vehicle, id=pk)
    is_rented = Rental.objects.filter(vehicle=vehicle, return_date=None).exists()

    if is_rented:
        status = 'Vehicle is on rent'
    else:
        status = 'Vehicle is in storage'

    context = {
        'title' : 'Vehicle details',
        'vehicle' : vehicle,
        'status' : status
    }

    return render(request, 'rent/vehicle_info.html', context)

# /rent/vehicle/add – provide a form to add a new vehicle.

def add_vehicle(request):
    if request.method == 'POST':
        form_filled = VehicleForm(request.POST)
        if form_filled.is_valid():
            form_filled.save()
        else:
            print(form_filled.errors)

    vehicle_form = VehicleForm()
    context = {
        'form': vehicle_form
    }

    return render(request, 'rent/add_vehicle.html', context)