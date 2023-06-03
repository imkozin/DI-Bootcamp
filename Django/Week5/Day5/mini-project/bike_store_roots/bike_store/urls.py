"""
URL configuration for bike_store project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rent.views import all_rentals, all_customers, all_vehicles, rental_info, customer_info, vehicle_info, add_customer, add_vehicle, add_rental

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rent/all_rentals/', all_rentals),
    path('rent/all_customers/', all_customers),
    path('rent/all_vehicles/', all_vehicles),
    path('rent/rental_info/<int:pk>/', rental_info),
    path('rent/customer_info/<int:pk>/', customer_info),
    path('rent/vehicle_info/<int:pk>/', vehicle_info),
    path('rent/add_customer', add_customer),
    path('rent/add_vehicle/', add_vehicle),
    path('rent/add_rental/', add_rental)
]
