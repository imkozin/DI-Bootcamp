"""
URL configuration for gifs_website project.

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
from my_gifs.views import homepage, category_view, categories_view, gif_view, add_category_view, add_gif_view, popular_gifs, gif_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('gifs/', homepage),
    path('category/<int:category_id>/', category_view),
    path('categories/', categories_view),
    path('gif/<int:gif_id>/', gif_view, name='gif_view'),
    path('add_category/', add_category_view),
    path('add_gif/', add_gif_view),
    path('popular_gifs/', popular_gifs),
]
