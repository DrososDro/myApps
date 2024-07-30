from os import getenv

from config.settings.base import *  # noqa

SECRET_KEY = getenv(
    "DJANGO_SECRET_KEY",
    "django-insecure-3^!ww-c$0z8=zh*l(_7zls4u27jdic+gb=jws83!e*gfeqel&s",
)

DEBUG = True

ALLOWED_HOSTS = ["localhost", "127.0.0.1", "0.0.0.0"]

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "%(levelname)s %(name)-12s %(asctime)s %(module)s %(process)d %(thread)d %(message)s",
        }
    },
    "handlers": {
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "verbose",
        }
    },
    "root": {
        "lever": "INFO",
        "handlers": ["console"],
    },
}