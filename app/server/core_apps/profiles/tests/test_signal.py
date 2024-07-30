import pytest
from core_apps.profiles.models import Profiles
from django.contrib.auth import get_user_model

pytestmark = pytest.mark.django_db


def test_create_user_and_auto_create_profile_should_succeed(user):
    """Create a user model and check if the profile created"""
    get_user_model().objects.create_user(**user)
    filtered_user = Profiles.objects.get(user__email=user["email"])
    assert filtered_user.user.email == user["email"]
    assert filtered_user.first_name == "n/a"
    assert filtered_user.last_name == "n/a"


def test_profiles_str_method_should_succed(user):
    """Test create a Profile model and check str method"""
    get_user_model().objects.create_user(**user)
    filtered_user = Profiles.objects.get(user__email=user["email"])
    assert str(filtered_user) == user["email"]
