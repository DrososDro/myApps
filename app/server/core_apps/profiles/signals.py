from config.settings.base import AUTH_USER_MODEL
from core_apps.profiles.models import Profiles
from django.db.models.signals import post_save
from django.dispatch import receiver


# @receiver(post_save, sender=AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        first_name = getattr(instance, "first_name", "n/a")
        last_name = getattr(instance, "last_name", "n/a")
        Profiles.objects.create(
            user=instance,
            first_name=first_name,
            last_name=last_name,
        )


post_save.connect(create_user_profile, sender=AUTH_USER_MODEL)
