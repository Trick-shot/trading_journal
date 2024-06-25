# Generated by Django 5.0.6 on 2024-06-04 17:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trading', '0004_alter_asset_name_alter_asset_symbol'),
    ]

    operations = [
        migrations.AlterField(
            model_name='broker',
            name='commission_rate',
            field=models.DecimalField(decimal_places=2, max_digits=5, null=True),
        ),
        migrations.AlterField(
            model_name='broker',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='deposit',
            name='account',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='trading.account'),
        ),
        migrations.AlterField(
            model_name='deposit',
            name='amount',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AlterField(
            model_name='trade',
            name='account',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, related_name='trades', to='trading.account'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='withdraw',
            name='account',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='trading.account'),
        ),
        migrations.AlterField(
            model_name='withdraw',
            name='amount',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
    ]