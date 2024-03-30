from django.contrib import admin
from .models import Trade, Strategy

# Register your models here.


@admin.register(Trade)
class TradeAdmin(admin.ModelAdmin):
    list_display = ['asset_name', 'strategy', 'commissions_fees', 'description', 'type_of_trade',
                    'take_profit', 'stop_loss', 'risk_reward_ratio', 'targeted_profit',
                    'targeted_loss', 'actual_profit', 'actual_loss', 'trade_result', 'time_frame', 'emotions_during_trade', 'position_size', 'before_screenshot', 'after_screenshot', 'entry_date', 'exit_date']


@admin.register(Strategy)
class StrategyAdmin(admin.ModelAdmin):
    list_display = ['name']
