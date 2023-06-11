from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
from .models import Report
from .serializers import ReportSerializer

class ReportView(APIView):
    def get(self, request, *args, **kwargs):
        queryset = Report.objects.all()
        serializer = ReportSerializer(queryset, many = True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = ReportSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, pk, *args, **kwargs):
        post = Report.objects.get(id=pk)
        post.delete()
        return Response()
    
    def put(self, request, pk, *args, **kwargs):
        post = Report.objects.get(id=pk)
        serializer = ReportSerializer(post, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)