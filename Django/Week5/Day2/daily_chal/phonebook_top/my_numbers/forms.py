from django import forms
from phonenumber_field.formfields import PhoneNumberField

class SearchForm(forms.Form):
    query = PhoneNumberField(max_length=20)