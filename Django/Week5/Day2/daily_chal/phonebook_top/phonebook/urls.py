from django.contrib import admin
from django.urls import path
from my_numbers.views import persons_phonenumber, persons_name, search

urlpatterns = [
    path('admin/', admin.site.urls),
    path('phones/<str:number>/', persons_phonenumber),
    path('names/<str:name_search>/', persons_name),
    path('search/', search, name='search'),
]

# "Peter"	"peter.parker@web.com"	"+14158391839"
# "Bruce"	"bruce.wayne@web.com"	"+1438623322"
# "Ilya"	"imnosovski@web.com"	"+97258391839"
# "Ivan"	"imkozin@web.com"	"+97253898909"