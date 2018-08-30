import psutil
from dashboard.helpers import *
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .serializers import DashboardSerializer


class StatsViewSet(ViewSet):
    """
    A simple ViewSet for listing stats.
    """

    def list(self, request):
        ip = request.META['REMOTE_ADDR']
        queryset = {"hostsCount": host_count(), "proxyCount": proxy_count(), "headersCount": header_count(), "IP": ip,
                    "cpu": psutil.cpu_percent()}
        serializer = DashboardSerializer(queryset, many=False)
        return Response(serializer.data)
