from django import forms
from .models import Customer, Vehicle, Rental

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = '__all__'

class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = '__all__'

class RentalForm(forms.ModelForm):
    customer = forms.ModelChoiceField(queryset=Customer.objects.all(), label='Customer')
    # vehicle = forms.ModelChoiceField(queryset=Vehicle.objects.exclude(rental__return_date=None), label='Vehicle')

    class Meta:
        model = Rental
        fields = ('customer', 'vehicle', 'rental_date')
        widgets = {'rental_date': forms.DateInput(attrs={'type': 'date'})}
