from django.contrib import admin
from .models import Trade, Strategy, TradeResult, Asset, Account, Broker

# Register your models here.


@admin.register(Trade)
class TradeAdmin(admin.ModelAdmin):
    list_display = ['asset_name', 'account_id', 'strategy', 'commission_fee', 'type_of_trade',
                    'take_profit', 'stop_loss', 'risk_reward_ratio', 'targeted_profit',
                    'targeted_loss', 'time_frame', 'emotions_during_trade', 'position_size', 'before_screenshot', 'entry_date', 'exit_date', 'notes']


@admin.register(Strategy)
class StrategyAdmin(admin.ModelAdmin):
    list_display = ['name', 'wins_hit_tp',
                    'wins_break_even', 'break_even', 'losses']


# @admin.register(TradeResult)
# class TradeResultAdmin(admin.ModelAdmin):
#     list_display = '__all__'


@admin.register(Broker)
class BrokerAdmin(admin.ModelAdmin):
    list_display = ['name', 'commission_rate']


@admin.register(Asset)
class AssetAdmin(admin.ModelAdmin):
    list_display = ['name', 'symbol', 'market']


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ['account_id', 'name', 'server_name', 'type_option', 'platform',
                    'leverage', 'type']
