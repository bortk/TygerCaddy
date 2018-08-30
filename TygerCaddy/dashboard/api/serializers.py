from rest_framework import serializers


class DashboardSerializer(serializers.Serializer):
    hostsCount = serializers.IntegerField()
    proxyCount = serializers.IntegerField()
    headersCount = serializers.IntegerField()
    cpu = serializers.CharField()
