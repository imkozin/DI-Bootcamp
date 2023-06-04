from django.contrib import admin
from django.urls import path
from my_numbers.views import phone_view, name_view, search

urlpatterns = [
    path('admin/', admin.site.urls),
    path('persons/<int:phone_number>', phone_view, name = 'phone'), #for search by phone
    path('persons/<str:name>', name_view, name = 'name'), #for search by name
    # path('persons-search/', search_by, name= 'search_by'),
    path('search/', search, name='search'), #v2
]

# "Peter"	"peter.parker@web.com"	"+14158391839"
# "Bruce"	"bruce.wayne@web.com"	"+1438623322"
# "Ilya"	"imnosovski@web.com"	"+97258391839"
# "Ivan"	"imkozin@web.com"	"+97253898909"