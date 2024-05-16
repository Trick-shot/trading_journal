from rest_framework.viewsets import ModelViewSet
from .serializers import TradeSerializer, TradeResultSerializer, StrategySerializer, AssetSerializer, AccountSerializer, BrokerSerializer, WithdrawSerializer, DepositSerializer
from .models import Trade, TradeResult, Strategy, Asset, Account, Broker, Withdraw, Deposit


class TradeViewSet(ModelViewSet):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class TradeResultViewSet(ModelViewSet):
    queryset = TradeResult.objects.all()
    serializer_class = TradeResultSerializer

    # def get_serializer_context(self):
    #     return {'trade_id': self.kwargs['trade_pk']}

    # def get_queryset(self):
    #     return TradeResult.objects.filter(trade_id=self.kwargs['trade_pk'])


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
