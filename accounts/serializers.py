from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=30, validators=[
        UniqueValidator(queryset=User.objects.all(), message='Username must be unique')])

    email = serializers.EmailField(max_length=30, validators=[
        UniqueValidator(queryset=User.objects.all(), message='Email must be unique')])

    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        validated_data['email'],
                                        validated_data['password'],
                                        is_active=False)
        return user

    class Meta:
        model = User
        fields = ('username', 'email', 'password')
