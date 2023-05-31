from django.shortcuts import render,redirect
from .models import Gif, Category
from .forms import CategoryForm, GifForm

# Create your views here.
def homepage(request):
    display_all = Gif.objects.all()

    context = {
        'gifs' : display_all
    }

    return render(request, 'gifs.html', context)


def category_view(request, category_id):
    
    category = Category.objects.get(id=category_id)
    gif = category.gifs.all()

    context = {
        'category' : category,
        'gif' : gif
    }

    return render(request, 'category.html', context)

def categories_view(request):

    categories = Category.objects.all()

    context = {
        'categories' : categories
    }

    return render(request, 'categories.html', context)

def gif_view(request, gif_id):
    gif = gif.get_object_or_404(gif_id, Gif)

    context = {
        'gif' : gif
    }

    return render(request, 'gif.html', context)

def add_category_view(request):

    if request.method == 'POST':
        data = request.POST
        filled_form = CategoryForm(data)
        filled_form.save()

    category_form = CategoryForm()
    context = {
        'form' : category_form
    }
    
    return render(request, 'add_category.html', context)

def add_gif_view(request):

    if request.method == 'POST':
        data = request.POST
        filled_form = GifForm(data)
        filled_form.save()

    gif_form = GifForm()
    context = {
        'form' : gif_form
    }

    return render(request, 'add_gif.html', context)

def gif_view(request, gif_id):
    gif = Gif.objects.get(id=gif_id)
    
    if request.method == 'POST':
        if 'increment' in request.POST:
            gif.likes += 1
            gif.save()
        elif 'decrement' in request.POST:
            gif.likes -= 1
            gif.save()
    
    context = {
        'gif': gif
    }
    return render(request, 'gif.html', context)

def popular_gifs(request):
    gifs = Gif.objects.filter(likes__gt=0).order_by('-likes')

    context = {
        'gifs' : gifs
    }

    return render(request, 'popular_gifs.html', context)