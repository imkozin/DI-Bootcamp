from django.shortcuts import render
from rest_framework import generics
from rest_framework import permissions
from .models import Department, Employee, Project, Task
from .serializers import DepartmentSerializer, EmployeeSerializer, ProjectSerializer, TaskSerializer
from .permissions import IsDepartmentAdmin

# Create your views here.
class DepartmentListAPIView(generics.ListAPIView):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()
    permission_classes = (IsDepartmentAdmin, )

class DepartmentCreateAPIView(generics.CreateAPIView):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()
    permission_classes = (IsDepartmentAdmin, )

class EmployeeListAPIView(generics.ListAPIView):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    permission_classes = (IsDepartmentAdmin, )

class EmployeeCreateAPIView(generics.CreateAPIView):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    permission_classes = (IsDepartmentAdmin, )

class ProjectRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    permission_classes = (IsDepartmentAdmin, )
    
class ProjectUpdateAPIView(generics.UpdateAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    permission_classes = (IsDepartmentAdmin, )
    
class ProjectDestroyAPIView(generics.DestroyAPIView):
    serializer_class = ProjectUpdateAPIView
    queryset = Project.objects.all()
    permission_classes = (IsDepartmentAdmin, )

class TaskRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class =  TaskSerializer
    queryset = Task.objects.all()
    permission_classes = (IsDepartmentAdmin, )

class TaskUpdateAPIView(generics.UpdateAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = (IsDepartmentAdmin, )

class TaskDestroyAPIView(generics.DestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = (IsDepartmentAdmin, )
