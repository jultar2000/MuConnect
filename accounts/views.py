from django.shortcuts import render
from accounts.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from accounts.services import create_user
from accounts.services import send_email
from django.template.loader import render_to_string


class CreateUser(APIView):
    def post(self, request):
        user = create_user(request.data)
        if user:
            email_template = render_to_string('email.html', {"username": user.username})

            send_email('Econnect account activation', '',
                       'Econnect@gmail.com', [user.email],
                       email_template)

            return Response(
                {'Please confirm your email to complete registration.'}, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
