from django import forms
from .models import Category, Gif

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ('name',)


class GifForm(forms.ModelForm):
    # categories = forms.ModelMultipleChoiceField(queryset=None)
    
    class Meta:
        model = Gif
        fields = '__all__'
        widgets = {
            'categories' : forms.CheckboxSelectMultiple
        }