from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Trade, TradeResult, Strategy, Withdraw, Deposit


class TradeResultSerializer(ModelSerializer):
    def create(self, validated_data):
        trade_id = self.context['trade_id']
        return TradeResult.objects.create(trade_id=trade_id, **validated_data)

    class Meta:
        model = TradeResult
        fields = ['trade', 'profit_loss',
                  'exit_date', 'status', 'is_won', 'after_screenshot']


class TradeSerializer(ModelSerializer):
    trade_result = TradeResultSerializer(many=True, read_only=True)

    class Meta:
        model = Trade
        fields = ['id', 'account', 'asset_name', 'strategy', 'commission_fee', 'type_of_trade',
                  'take_profit', 'stop_loss', 'risk_reward_ratio', 'targeted_profit',
                  'targeted_loss', 'time_frame', 'emotions_during_trade', 'position_size', 'before_screenshot', 'entry_date', 'trade_result']


class StrategySerializer(ModelSerializer):
    class Meta:
        model = Strategy
        fields = '__all__'


class WithdrawSerializer(ModelSerializer):
    class Meta:
        model = Withdraw
        fields = '__all__'


class DepositSerializer(ModelSerializer):
    class Meta:
        model = Deposit
        field = '__all__'


class AccountAnalyticsSerializer(serializers.Serializer):
    account_balance = serializers.DecimalField(max_digits=5, decimal_places=2)
    num_trade_take = serializers.IntegerField()
    num_trade_lost = serializers.IntegerField()
    num_trade_won = serializers.IntegerField()
