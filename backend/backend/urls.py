from django.contrib import admin
from django.urls import path, include
import debug_toolbar

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('Trading/', include('trading.urls')),
    path('__debug__/', include('debug_toolbar.urls')),
]
