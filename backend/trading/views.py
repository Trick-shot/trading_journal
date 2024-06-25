from django.shortcuts import get_object_or_404
from django.db.models import Sum
from django.db.models.functions import TruncMonth

from .serializers import TradeSerializer, TradeResultSerializer, StrategySerializer, AssetSerializer, AccountSerializer, BrokerSerializer, WithdrawSerializer, DepositSerializer, StatusBarSerializer, YearlyChartSerializer
from .models import Trade, TradeResult, Strategy, Asset, Account, Broker, Withdraw, Deposit

from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import mixins, viewsets


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


class StatusBarViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = StatusBarSerializer
    
    def get_queryset(self, account_id):
        account = get_object_or_404(Account, id=account_id)

        account_balance = account.balance
        won_trades = Trade.objects.filter(account=account, results__is_won=True).count()
        lost_trades = Trade.objects.filter(account=account, results__is_won=False).count()
        trades_taken = Trade.objects.filter(account=account).count()
        
        data = {
            "account_balance": account_balance,
            "won_trades": won_trades,
            "lost_trades": lost_trades,
            "trades_taken": trades_taken,
        }
    
        return data


class YearlyChartViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = YearlyChartSerializer
    
    def get_queryset(self):
        # account = get_object_or_404(Account, id=account_id)

        # profit = TradeResult.objects.filter(trade__account=account, is_won=True).annotate(month=TruncMonth('exit_date')).values("month").annotate(total_won=Sum('profit_loss')).order_by('month')
        # lost = TradeResult.objects.filter(trade__account=account, is_won=False).annotate(month=TruncMonth('exit_date')).values("month").annotate(total_won=Sum('profit_loss')).order_by('month')
        net_profit = 0
        profit = 0
        lost = 0
        
        # monthly_data = {}
        # for p in profit:
        #     month = p["month"]
        #     monthly_data[month] = {"month": month,
        #                            "total_won": p["total_won"], lost: 0}

        # for l in lost:
        #     month = l["month"]
        #     if month in monthly_data:
        #         monthly_data[month]["total_lost"] = l["total_lost"]
        #     else:
        #         monthly_data[month] = {
        #             "month": month, "total_won": 0, "total_loss": l["total_loss"]}

        # # Calculate net profit for each month
        # for month_data in monthly_data.values():
        #     month_data["net_profit"] = month_data["total_won"] + \
        #         month_data["total_lost"]

        # data = list(monthly_data.values())
        
        data = {
            "profit": profit,
            "lost": lost,
            "net_profit": net_profit,
        }

        return data
