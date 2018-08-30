from certificates.api.api_views import CertificateViewset, BundleViewset, KeyViewset
from config.api.api_views import ConfigViewset
from dashboard.api.api_views import StatsViewSet
from hosts.api.api_views import HostViewset
from proxies.api.api_views import ProxyViewset, HeaderViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'hosts', HostViewset)
router.register(r'proxies', ProxyViewset)
router.register(r'headers', HeaderViewset)
router.register(r'certificate', CertificateViewset)
router.register(r'bundle', BundleViewset)
router.register(r'key', KeyViewset)
router.register(r'config', ConfigViewset)
router.register(r'stats', StatsViewSet, base_name="stats")
