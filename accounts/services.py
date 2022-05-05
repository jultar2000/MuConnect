from smtplib import SMTPException
from accounts.serializers import UserSerializer
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status


def create_user(data):
    model_serializer = UserSerializer(data=data)
    if model_serializer.is_valid():
        user = model_serializer.save()
        return user
    return None


def send_email(subject, message, from_email, recipient, html_message):
    try:
        send_mail(subject=subject,
                  message=message,
                  recipient_list=recipient,
                  from_email=from_email,
                  html_message=html_message)

    except SMTPException as e:
        print('There was an error sending an email: ', e)

