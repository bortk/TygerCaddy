# Generated by Django 2.0.3 on 2018-05-24 17:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('hosts', '0011_auto_20180520_1649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='host',
            name='proxy',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='proxies.Proxy'),
            preserve_default=False,
        ),
    ]
