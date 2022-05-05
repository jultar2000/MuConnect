from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from accounts.serializers import UserSerializer


class CreateUser(APIView):
    def post(self, request):
        model_serializer = UserSerializer(data=request.data)
        if model_serializer.is_valid():
            user = model_serializer.save()

            if user:
                return Response(
                    {'Please confirm your email to complete registration.': model_serializer.data},
                    status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
