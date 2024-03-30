from django.db import models


class Trade(models.Model):
    TYPE_OF_TRADE = [
        ("Long", "Long"),
        ("Short", "short")
    ]

    TIME_FRAME = [
        ("15min", "15min"),
        ("30min", "30min"),
        ("45min", "45min"),
        ("1hr", "1hr"),
        ("2hr", "2hr"),
        ("3hr", "3hr"),
        ("4hr", "4hr"),
        ("1D", "1D")
    ]

    TRADE_RESULT = [
        ("WIN", "WIN"),
        ("LOSS", "LOSS"),
        ("BE", "BREAK_EVEN"),
        ("DEFAULT", "DEFAULT")
    ]

    asset_name = models.CharField(max_length=10)
    strategy = models.ForeignKey(
        'Strategy', on_delete=models.CASCADE, null=True, blank=True)
    commissions_fees = models.IntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    type_of_trade = models.CharField(
        max_length=10, choices=TYPE_OF_TRADE, default=None, blank=True, null=True)
    take_profit = models.IntegerField(null=True, blank=True)
    stop_loss = models.IntegerField(blank=True, null=True)
    risk_reward_ratio = models.DecimalField(
        max_digits=3, decimal_places=3, null=True, blank=True)
    targeted_profit = models.IntegerField(null=True, blank=True)
    targeted_loss = models.IntegerField(null=True, blank=True)
    actual_profit = models.IntegerField(null=True, blank=True)
    actual_loss = models.IntegerField(null=True, blank=True)
    trade_result = models.CharField(
        max_length=255, choices=TRADE_RESULT, default=TRADE_RESULT[3], null=True, blank=True)
    time_frame = models.CharField(
        max_length=255, choices=TIME_FRAME, default=None, null=True, blank=True)
    emotions_during_trade = models.TextField(null=True, blank=True)
    position_size = models.DecimalField(
        max_digits=3, decimal_places=2, null=True, blank=True)
    before_screenshot = models.ImageField(
        upload_to='media/', null=True, blank=True)
    after_screenshot = models.ImageField(
        upload_to='media/', null=True, blank=True)
    entry_date = models.DateTimeField(null=True, blank=True)
    exit_date = models.DateTimeField(null=True, blank=True)


class Strategy(models.Model):
    name = models.CharField(max_length=255)
