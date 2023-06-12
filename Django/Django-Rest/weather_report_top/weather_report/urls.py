from django.contrib import admin
from django.urls import path, include
from weatherapp.views import ReportListView, ReportDetailView, ReportDeleteView
# ReportView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path('api/reports', ReportListView.as_view(), name='reports'),
    path('api/reports/<int:pk>', ReportDetailView.as_view(), name='post-detail'),
    path('api/reports/<int:pk>/delete/', ReportDeleteView.as_view(), name='report-delete'),
]
