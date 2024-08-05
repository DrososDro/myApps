from django.db import models

from core_apps.common.models import TimeStampedModel

# Create your models here.


class Todos(TimeStampedModel):
    name = models.CharField(max_length=50)
    is_completed = models.BooleanField(default=False)
    complete_until = models.DateTimeField()
