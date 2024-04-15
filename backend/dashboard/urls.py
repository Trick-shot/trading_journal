from django.urls import path
from .views import AccountBalanceView

urlpatterns = [
    path('', AccountBalanceView.as_view(), name='account_balance')
]
