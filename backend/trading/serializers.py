from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Trade, Strategy


class TradeSerializer(ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='trade-detail', lookup_field='pk')

    class Meta:
        model = Trade
        fields = ['url', 'id', 'asset_name', 'strategy', 'commissions_fees', 'description', 'type_of_trade',
                  'take_profit', 'stop_loss', 'risk_reward_ratio', 'targeted_profit',
                  'targeted_loss', 'actual_profit', 'actual_loss', 'trade_result', 'time_frame', 'emotions_during_trade', 'position_size', 'before_screenshot', 'after_screenshot', 'entry_date', 'exit_date']


class StrategySerializer(ModelSerializer):
    class Meta:
        model = Strategy
        fields = '__all__'
