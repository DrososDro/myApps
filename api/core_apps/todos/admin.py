from django.contrib import admin

from core_apps.todos.models import Todos, TodosList

# Register your models here.


@admin.register(Todos)
class TodosAdmin(admin.ModelAdmin):
    list_display = ("name", "todos_list", "is_completed", "id")


@admin.register(TodosList)
class TodosAdminList(admin.ModelAdmin):
    list_display = (
        "title",
        "complete_until",
        "is_completed",
        "is_completed_in_time",
        "id",
    )
