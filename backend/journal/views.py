from django.shortcuts import render
from .serializers import TradeSerializer
from .models import Trade
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class TradeViewSet(ModelViewSet):
    serializer_class = TradeSerializer
    queryset = Trade.objects.all()
    lookup_field = 'pk'
