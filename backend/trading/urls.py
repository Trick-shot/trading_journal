from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register('strategy', views.StrategyViewSet, basename='Strategy')
router.register('asset', views.AssetViewSet, basename='Asset')
router.register('account', views.AccountViewSet, basename='Account')
router.register('broker', views.BrokerViewSet, basename='Broker')
router.register('withdraw', views.WithdrawViewSet, basename='Withdraw')
router.register('Deposit', views.DepositViewSet, basename='Deposit')


urlpatterns = router.urls
