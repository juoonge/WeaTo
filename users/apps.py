from django.apps import AppConfig

class UsersConfig(AppConfig):

    name = 'users'

    def ready(self):
        from .jobs import updater
        updater.start()
