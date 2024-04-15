from django.urls import path
from .views import AccountBalanceView, Last10TradesView

urlpatterns = [
    path('', AccountBalanceView.as_view(), name='account_balance'),
    path('last10', Last10TradesView.as_view(), name='trade-result-detail')
]
