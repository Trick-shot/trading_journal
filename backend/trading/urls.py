from django.urls import path, include

from .views import TradeViewSet, StrategyViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'Trade', TradeViewSet, basename='trade')
router.register(r'Strategy', StrategyViewSet, basename='strategy')

urlpatterns = [
    path('', include(router.urls))
]
