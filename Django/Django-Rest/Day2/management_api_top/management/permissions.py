from rest_framework import permissions
from .models import DepartmentAdmin

class IsDepartmentAdmin(permissions.BasePermission):
    def has_permission(self, request, user):
        return hasattr(request.user, 'username')