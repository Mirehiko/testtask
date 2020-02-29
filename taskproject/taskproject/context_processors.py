from django.conf import settings

def site_processor(request):
    return {
        'settings': {
            'STATIC_VERSION': settings.STATIC_VERSION,
        }
    }