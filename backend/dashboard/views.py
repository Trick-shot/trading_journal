from django.shortcuts import render

# serializers
from trading.serializers import TradeSerializer, StrategySerializer

#models
from trading.models import Trade, TradeResult, Strategy, Asset, Account, Broker

#rest_framework
from rest_framework.views import APIView
from rest_framework.response import Response


class AccountBalanceView(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        
        # retrieve account balance
        account = Account.objects.get()
        account_balance = account.balance
        
        # retrieve number of trades taken by a user
        num_trade_taken = TradeResult.objects.filter(account=account).count()
        num_trade_won = TradeResult.objects.filter(account=account, is_won=True).count()
        num_trade_lost = TradeResult.objects.filter(account=account, is_won=False).count()
        
        data = {
            'account_balance': account_balance,
            'num_trade_taken': num_trade_taken,
            'num_trade_won':num_trade_won,
            'num_trade_lost':num_trade_lost
        }
        
        return Response(data)
