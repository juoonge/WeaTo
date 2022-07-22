from django.contrib import admin

# Register your models here.
from users.models import NewUser
from django.contrib.auth.admin import UserAdmin
from django import forms
from django.forms import TextInput, Textarea, CharField
from django.db import models

class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ("email", "user_name")
    list_filter = ('email', 'user_name', 'is_active', 'is_staff')
    ordering = ('-created_at',)
    list_display = ('email', 'id', 'create_comment', 'user_name', 'is_active', 'is_staff')

    fieldsets = (
        (None, {'fields': ('email','user_name')}),
        ('Permissions', {'fields': ('is_staff','is_active')}),
       
    )

    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':20,'cols':60})},
    }

    add_fieldsets = (
        (None, {
            'classes' : ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2', 'is_active', 'is_staff',)
        }),
    )


admin.site.register(NewUser, UserAdminConfig)