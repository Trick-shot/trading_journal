from django.shortcuts import render
# serializers
from trading.serializers import TradeSerializer, TradeResultSerializer, StrategySerializer, AccountAnalyticsSerializer
# models
from trading.models import Trade, TradeResult, Strategy, Asset, Account, Broker

# rest_framework
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.exceptions import MethodNotAllowed
from rest_framework.decorators import action


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


class AccountAnalyticsViewSet(viewsets.ViewSet):
    queryset = TradeResult.objects.all()

    # @action(detail=False, methods=['post'])
    def retrieve(self, request):
        trades = self.queryset
        account_id = 10

        # Assuming you pass account_id in the request data
        account = Account.objects.get(id=account_id)

        account_balance = account.balance

        # retrieve number of trades taken by a user
        num_trade_taken = trades.filter(account=account).count()
        num_trade_won = trades.filter(account=account, is_won=True).count()
        num_trade_lost = trades.filter(account=account, is_won=False).count()

        data = {
            'account_balance': account_balance,
            'num_trade_taken': num_trade_taken,
            'num_trade_won': num_trade_won,
            'num_trade_lost': num_trade_lost
        }

        serializer = AccountAnalyticsSerializer(data=data)
        serializer.is_valid(raise_exception=True
                            )
        return Response(serializer.data)


class Last10TradesView(ListAPIView):
    serializer_class = TradeSerializer
    lookup_field = 'pk'

    def get_queryset(self):
        last10_trade = Trade.objects.order_by('-entry_date')[:10]
        return last10_trade
