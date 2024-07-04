from django.contrib import admin
from .models import Trade, Strategy, TradeResult, Asset, Account, Broker, Withdraw, Deposit

# Register your models here.


@admin.register(Trade)
class TradeAdmin(admin.ModelAdmin):
    list_display = ['account', 'asset_name', 'strategy', 'commission_fee', 'type_of_trade',
                    'take_profit', 'stop_loss', 'risk_reward_ratio', 'targeted_profit',
                    'targeted_loss', 'time_frame', 'emotions_during_trade', 'position_size', 'before_screenshot', 'entry_date', 'notes']


@admin.register(TradeResult)
class TradeResultAdmin(admin.ModelAdmin):
    list_display = ['trade', 'profit_loss',
                    'status', 'is_won', 'after_screenshot']


@admin.register(Strategy)
class StrategyAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']


@admin.register(Broker)
class BrokerAdmin(admin.ModelAdmin):
    list_display = ['name', 'commission_rate']


@admin.register(Asset)
class AssetAdmin(admin.ModelAdmin):
    list_display = ['name', 'symbol', 'market']


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ['account_id', 'name', 'balance', 'server_name', 'type_option', 'platform',
                    'leverage', 'type', 'broker']


@admin.register(Withdraw)
class WithdrawAdmin(admin.ModelAdmin):
    list_display = ['account', 'amount', 'date']


@admin.register(Deposit)
class DepositAdmin(admin.ModelAdmin):
    list_display = ['account', 'amount', 'date']
