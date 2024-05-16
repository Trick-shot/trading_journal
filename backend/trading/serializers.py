from .models import Strategy, Asset, Account, Broker, Withdraw, Deposit
from rest_framework.serializers import ModelSerializer


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
