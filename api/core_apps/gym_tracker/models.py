from django.db import models

from core_apps.common.models import TimeStampedModel

# Create your models here.


class GymMachine(TimeStampedModel):
    machine_name = models.CharField(
        max_length=50,
    )
    is_tracked_by_time = models.BooleanField(default=False)


class GymTracker(TimeStampedModel):
    """General gym class when the gym machine is selected
    the front end should choose the corect fields"""

    gym_machine = models.ForeignKey(
        GymMachine, on_delete=models.CASCADE, related_name="gym_machine"
    )
    gym_sets = models.IntegerField()
    gym_reps = models.IntegerField()
    gym_weight = models.IntegerField()
    gym_workout_time = models.FloatField()
    gym_dificulty = models.FloatField()
