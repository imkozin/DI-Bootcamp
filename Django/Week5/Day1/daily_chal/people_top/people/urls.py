from django.contrib import admin
from django.urls import path
from info.views import show_list, show_person

urlpatterns = [
    path('admin/', admin.site.urls),
    path('person/<int:id>', show_person),
    path('people/', show_list)
]
