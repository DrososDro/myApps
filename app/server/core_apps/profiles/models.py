"""
Model for profile app
"""

from core_apps.common.models import TimeStampedModel
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


# TODO: add profile pic and full name return
class Profiles(TimeStampedModel):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="profile",
    )
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)

    def __str__(self) -> str:
        return self.user.email
