# Generated by Django 5.0.7 on 2024-10-23 22:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("gym_tracker", "0001_initial"),
        ("profiles", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="gymday",
            name="profile",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="gym_profile",
                to="profiles.profile",
                verbose_name="Gym Profile",
            ),
        ),
        migrations.AddField(
            model_name="gymtracker",
            name="gym_day",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="gym_day",
                to="gym_tracker.gymday",
            ),
        ),
        migrations.AddField(
            model_name="gymtracker",
            name="gym_machine",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="gym_machine",
                to="gym_tracker.gymmachine",
            ),
        ),
    ]
