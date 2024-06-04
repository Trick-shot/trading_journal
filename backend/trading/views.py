from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

from .serializers import TradeSerializer, TradeResultSerializer, StrategySerializer, AssetSerializer, AccountSerializer, BrokerSerializer, WithdrawSerializer, DepositSerializer, StatusBarSerializer
from .models import Trade, TradeResult, Strategy, Asset, Account, Broker, Withdraw, Deposit


class TradeViewSet(ModelViewSet):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class TradeResultViewSet(ModelViewSet):
    queryset = TradeResult.objects.all()
    serializer_class = TradeResultSerializer

    def get_serializer_context(self):
        return {'trade_id': self.kwargs['trade_pk']}

    def get_queryset(self):
        return TradeResult.objects.filter(trade_id=self.kwargs['trade_pk'])


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

# Dashboard


class StatusBarView(APIView):
    def get(self, request, account_id):
        account = get_object_or_404(Account, id=account_id)

        account_balance = account.balance
        won_trades = Trade.objects.filter(account=account, is_won=True)
        lost_trades = Trade.objects.filter(account=account, is_won=False)
        trades_taken = Trade.objects.filter(account=account).count()

        data = {
            "account_balance": account_balance,
            "won_trades": won_trades,
            "lost_trades": lost_trades,
            "trades_taken": trades_taken,
        }

        serializer = StatusBarSerializer(data)

        return Response(serializer.data)
