from django.contrib import admin

from core_apps.todos.models import Todo, TodoTasks


@admin.register(Todo)
class TodosAdmin(admin.ModelAdmin):
    list_display = ("name", "todos_list", "is_completed", "id")


@admin.register(TodoTasks)
class TodosAdminList(admin.ModelAdmin):
    list_display = (
        "title",
        "complete_until",
        "completed",
        "completed_in_time",
        "expired",
        "id",
    )
