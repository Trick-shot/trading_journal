from django.urls import path
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register(r'account-analytics',
                views.AccountAnalyticsViewSet, basename='account-analytics')


urlpatterns = router.urls
