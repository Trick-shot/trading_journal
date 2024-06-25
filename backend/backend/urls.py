from django.conf import settings
from django.conf.urls import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('Trading/', include('trading.urls')),
    path('__debug__/', include('debug_toolbar.urls')),
]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
