from rest_framework.viewsets import ModelViewSet
from .serializers import StrategySerializer, AssetSerializer, AccountSerializer, BrokerSerializer, WithdrawSerializer, DepositSerializer
from .models import Strategy, Asset, Account, Broker, Withdraw, Deposit


class StrategyViewSet(ModelViewSet):
    queryset = Strategy.objects.all()
    serializer_class = StrategySerializer


class AssetViewSet(ModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer


class AccountViewSet(ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class BrokerViewSet(ModelViewSet):
    queryset = Broker.objects.all()
    serializer_class = BrokerSerializer


class WithdrawViewSet(ModelViewSet):
    queryset = Withdraw.objects.all()
    serializer_class = WithdrawSerializer


class DepositViewSet(ModelViewSet):
    queryset = Deposit.objects.all()
    serializer_class = DepositSerializer
