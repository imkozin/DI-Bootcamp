"""
URL configuration for management_api project.

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
from django.urls import path, include
from management.views import (DepartmentListAPIView, 
                              DepartmentCreateAPIView, EmployeeListAPIView, EmployeeCreateAPIView,
                              ProjectDestroyAPIView, 
                              ProjectRetrieveAPIView, 
                              ProjectUpdateAPIView, 
                              TaskDestroyAPIView, 
                              TaskRetrieveAPIView, 
                              TaskUpdateAPIView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/departments', DepartmentListAPIView.as_view(), name='department-list'),
    path('api/department/create', DepartmentCreateAPIView.as_view(), name='department-create'),
    path('api/employees', EmployeeListAPIView.as_view(), name='employee-list'),
    path('api/employee/create', EmployeeCreateAPIView.as_view(), name='employee-create'),
    path('api/projects/<int:pk>/delete', ProjectDestroyAPIView.as_view(), name='project-delete'),
    path('api/projects/<int:pk>', ProjectRetrieveAPIView.as_view(), name='project-retrieve'),
    path('api/projects/<int:pk>/update', ProjectUpdateAPIView.as_view(), name='project-update'),
    path('api/tasks/<int:pk>/delete', TaskDestroyAPIView.as_view(), name='task-delete'),
    path('api/tasks/<int:pk>', TaskRetrieveAPIView.as_view(), name='task-retrieve'),
    path('api/tasks/<int:pk>/update', TaskUpdateAPIView.as_view(), name='task-update')
]
