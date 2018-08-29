from certificates.models import Certificate, Bundle, Key
from rest_framework import serializers


class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = ('cert_name', 'bundle_upload', 'key_upload', 'bundle_text', 'key_text')


class BundleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bundle
        fields = '__all__'


class KeySerializer(serializers.ModelSerializer):
    class Meta:
        model = Key
        fields = '__all__'
