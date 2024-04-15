from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Trade, TradeResult, Strategy, Withdraw, Deposit


class TradeResultSerializer(ModelSerializer):
    class Meta:
        model = TradeResult
        fields = ['account', 'trade', 'profit_loss',
                  'exit_date', 'status', 'is_won', 'after_screenshot']


class TradeSerializer(ModelSerializer):
    trade_result = TradeResultSerializer()

    url = serializers.HyperlinkedIdentityField(
        view_name='trade-detail', lookup_field='pk')

    class Meta:
        model = Trade
        fields = ['url', 'id', 'asset_name', 'strategy', 'commission_fee', 'type_of_trade',
                  'take_profit', 'stop_loss', 'risk_reward_ratio', 'targeted_profit',
                  'targeted_loss', 'time_frame', 'emotions_during_trade', 'position_size', 'before_screenshot', 'entry_date', 'trade_result']

    def to_representation(self, instance):
        # Override to_representation method to remove 'trade_result' key from nested serialization
        data = super().to_representation(instance)
        return data['trade_result']


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
