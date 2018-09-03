from rest_framework import serializers


class DashboardSerializer(serializers.Serializer):
    hostsCount = serializers.IntegerField()
    proxyCount = serializers.IntegerField()
    headersCount = serializers.IntegerField()
    IP = serializers.IPAddressField()
    cpu = serializers.CharField()
    memory = serializers.CharField()
    uptime = serializers.CharField()
