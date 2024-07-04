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
# Dashboard
router.register('status-bar', views.StatusBarViewSet, basename='status-bar')
router.register('yearly-chart', views.YearlyChartViewSet, basename='yearly-chart')

# Nested router
trades_router = routers.NestedDefaultRouter(router, 'trades', lookup='trade')
trades_router.register('results', views.TradeResultViewSet, basename='trade-results')

urlpatterns =  router.urls + trades_router.urls
