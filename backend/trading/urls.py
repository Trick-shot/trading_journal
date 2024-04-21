from django.urls import path, include
from rest_framework_nested import routers
from . import views
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )


router = routers.DefaultRouter()
router.register(r'account-analytics',
                views.AccountAnalyticsViewSet, basename='account-analytics')


urlpatterns = router.urls
