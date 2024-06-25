from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Strategy, Asset, Account, Broker, Withdraw, Deposit, Trade, TradeResult


class TradeResultSerializer(ModelSerializer):
    def create(self, validated_data):
        trade_id = self.context['trade_id']
        return TradeResult.objects.create(trade_id=trade_id, **validated_data)

    class Meta:
        model = TradeResult
        fields = ['id', 'profit_loss', 'exit_date',
                  'status', 'is_won', 'after_screenshot']


class TradeSerializer(ModelSerializer):
    results = TradeResultSerializer(read_only=True)

    class Meta:
        model = Trade
        fields = ['id', 'account', 'asset_name', 'strategy', 'commission_fee', 'type_of_trade', 'take_profit', 'stop_loss', 'risk_reward_ratio', 'targeted_profit',
                  'targeted_loss', 'time_frame', 'emotions_during_trade', 'position_size', 'before_screenshot', 'entry_date', 'notes', 'results']


class StrategySerializer(ModelSerializer):
    class Meta:
        model = Strategy
        fields = '__all__'


class AssetSerializer(ModelSerializer):
    class Meta:
        model = Asset
        fields = '__all__'


class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class BrokerSerializer(ModelSerializer):
    class Meta:
        model = Broker
        fields = '__all__'


class WithdrawSerializer(ModelSerializer):
    class Meta:
        model = Withdraw
        fields = '__all__'


class DepositSerializer(ModelSerializer):
    class Meta:
        model = Deposit
        fields = '__all__'


class StatusBarSerializer(serializers.Serializer):
    account_balance = serializers.DecimalField(max_digits=10, decimal_places=2)
    won_trades = serializers.IntegerField()
    lost_trades = serializers.IntegerField()
    trades_taken = serializers.IntegerField()


class YearlyChartSerializer(serializers.Serializer):
    # month = serializers.DateField()
    profit = serializers.DecimalField(max_digits=10, decimal_places=2)
    loss = serializers.DecimalField(max_digits=10, decimal_places=2)
    net_profit = serializers.DecimalField(max_digits=10, decimal_places=2)
