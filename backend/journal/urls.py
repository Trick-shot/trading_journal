from django.urls import path, include
from .views import TradeViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'Trades', TradeViewSet, basename='trade')

urlpatterns = [
    path('', include(router.urls))
]
