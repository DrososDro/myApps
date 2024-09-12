# Generated by Django 5.0.7 on 2024-09-03 17:47

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("profiles", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="DiaryDate",
            fields=[
                (
                    "pkid",
                    models.BigAutoField(
                        editable=False, primary_key=True, serialize=False
                    ),
                ),
                (
                    "id",
                    models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("edited_at", models.DateTimeField(auto_now=True)),
                ("date", models.DateField()),
                (
                    "profile",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="diary_profile",
                        to="profiles.profile",
                        verbose_name="Diary Date",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="DiaryNotes",
            fields=[
                (
                    "pkid",
                    models.BigAutoField(
                        editable=False, primary_key=True, serialize=False
                    ),
                ),
                (
                    "id",
                    models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("edited_at", models.DateTimeField(auto_now=True)),
                (
                    "note_type",
                    models.CharField(
                        choices=[
                            ("diary", "Diary"),
                            ("nutrition", "Nutrition"),
                            ("gym", "Gym"),
                            ("feelings", "Feelings"),
                        ],
                        default="diary",
                        max_length=25,
                    ),
                ),
                ("time", models.TimeField()),
                ("note", models.TextField()),
                (
                    "diary_date",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="diary_date",
                        to="daily_diary.diarydate",
                        verbose_name="Diary Note",
                    ),
                ),
            ],
            options={
                "ordering": ["diary_date", "time", "note_type"],
            },
        ),
    ]
