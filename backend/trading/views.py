from django.shortcuts import render

from .serializers import TradeSerializer
from .models import Trade, Strategy

from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

# Create your views here.


class TradeViewSet(ModelViewSet):
    serializer_class = TradeSerializer
    queryset = Trade.objects.all()
    lookup_field = 'pk'


class StrategyViewSet(ModelViewSet):
    serializer_class = StrategySerializer
    queryset = Strategy.objects.all()
