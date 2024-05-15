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
    account = models.ForeignKey(
        'Account', on_delete=models.PROTECT, blank=True, null=True)
    asset_name = models.ForeignKey('Asset', on_delete=models.PROTECT)
    strategy = models.ForeignKey(
        'Strategy', on_delete=models.CASCADE, null=True, blank=True)
    commission_fee = models.IntegerField(null=True, blank=True)
    type_of_trade = models.CharField(
        max_length=10, choices=TYPE_OF_TRADE, default=None, blank=True, null=True)
    take_profit = models.IntegerField(null=True, blank=True)
    stop_loss = models.IntegerField(blank=True, null=True)
    risk_reward_ratio = models.DecimalField(
        max_digits=3, decimal_places=3, null=True, blank=True)
    targeted_profit = models.IntegerField(null=True, blank=True)
    targeted_loss = models.IntegerField(null=True, blank=True)
    time_frame = models.CharField(
        max_length=255, choices=TIME_FRAME, default=None, null=True, blank=True)
    emotions_during_trade = models.TextField(null=True, blank=True)
    position_size = models.DecimalField(
        max_digits=3, decimal_places=2, null=True, blank=True)
    before_screenshot = models.ImageField(
        upload_to='media/', null=True, blank=True)
    entry_date = models.DateTimeField()
    notes = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.asset_name.name


class TradeResult(models.Model):
    trade = models.OneToOneField(
        "Trade", on_delete=models.CASCADE, null=True, blank=True)
    profit_loss = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    exit_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=100, null=True, blank=True)
    is_won = models.BooleanField(default=False, null=True, blank=True)
    after_screenshot = models.ImageField(
        upload_to='media/', null=True, blank=True)

    def __str__(self):
        return f"Result for Trade {self.trade.pk}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.trade.account.balance += self.profit_loss
        self.trade.account.save()


class Strategy(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Asset(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    symbol = models.CharField(max_length=100, null=True, blank=True)
    market = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.symbol


class Account(models.Model):
    account_id = models.IntegerField(null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    server_name = models.CharField(max_length=100, null=True, blank=True)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    type_option = models.CharField(max_length=100, null=True, blank=True)
    platform = models.CharField(max_length=100, null=True, blank=True)
    leverage = models.CharField(max_length=100, null=True, blank=True)
    type = models.CharField(max_length=100, null=True, blank=True)
    broker = models.ForeignKey(
        'Broker', on_delete=models.PROTECT, blank=True, null=True)

    def __str__(self):
        return f'{self.account_id}, {self.name}'


class Broker(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    commission_rate = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name


class Withdraw(models.Model):
    account = models.ForeignKey(
        'Account', on_delete=models.PROTECT, null=True, blank=True)
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.account.balance -= self.amount
        self.account.save()


class Deposit(models.Model):
    account = models.ForeignKey(
        'Account', on_delete=models.PROTECT, null=True, blank=True)
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.account.balance += self.amount
        self.account.save()
