from django.shortcuts import render
from rest_framework import generics
from .models import Department, Employee, Project, Task
from .serializers import DepartmentSerializer, EmployeeSerializer, ProjectSerializer, TaskSerializer

# Create your views here.
class DepartmentListAPIView(generics.ListAPIView):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

class DepartmentCreateAPIView(generics.CreateAPIView):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

class EmployeeListAPIView(generics.ListAPIView):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()

class EmployeeCreateAPIView(generics.CreateAPIView):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()

class ProjectRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    
class ProjectUpdateAPIView(generics.UpdateAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    
class ProjectDestroyAPIView(generics.DestroyAPIView):
    serializer_class = ProjectUpdateAPIView
    queryset = Project.objects.all()

class TaskRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class =  TaskSerializer
    queryset = Task.objects.all()

class TaskUpdateAPIView(generics.UpdateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class TaskDestroyAPIView(generics.DestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
