# Generated by Django 5.2.3 on 2025-07-17 09:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interview', '0017_alter_application_shortlisting_decision'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaderboard',
            name='Application',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='application', to='interview.application'),
        ),
    ]
