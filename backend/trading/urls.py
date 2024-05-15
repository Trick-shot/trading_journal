from django.urls import path, include
from rest_framework_nested import routers
from . import views
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

router = routers.DefaultRouter()
router.register(r'trades', views.TradeViewSet, basename='Ttrade')
router.register(r'account-analytics',
                views.AccountAnalyticsViewSet, basename='account-analytics')

trades_router = routers.NestedDefaultRouter(router, 'trades', lookup='trade') 
trades_router.register('trade_result', views.TradeResultViewSet , basename='trade-result')



urlpatterns = router.urls
