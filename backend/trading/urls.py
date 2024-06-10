from django.urls import path
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('trades', views.TradeViewSet, basename='trades')
router.register('strategy', views.StrategyViewSet, basename='strategy')
router.register('assets', views.AssetViewSet, basename='assets')
router.register('accounts', views.AccountViewSet, basename='accounts')
router.register('brokers', views.BrokerViewSet, basename='brokers')
router.register('withdraws', views.WithdrawViewSet, basename='withdraws')
router.register('deposits', views.DepositViewSet, basename='deposits')

trades_router = routers.NestedDefaultRouter(router, 'trades', lookup='trade')
trades_router.register(
    'results', views.TradeResultViewSet, basename='trade-results')

urlpatterns = [
    path('status-bar/<int:account_id>',
         views.StatusBarView.as_view(), name='status-bar')
] + router.urls + trades_router.urls
