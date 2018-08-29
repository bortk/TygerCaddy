from certificates.api.serializers import CertificateSerializer, BundleSerializer, KeySerializer
from certificates.models import Bundle, Certificate, Key
from rest_framework import viewsets


class CertificateViewset(viewsets.ModelViewSet):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer


class BundleViewset(viewsets.ModelViewSet):
    queryset = Bundle.objects.all()
    serializer_class = BundleSerializer


class KeyViewset(viewsets.ModelViewSet):
    queryset = Key.objects.all()
    serializer_class = KeySerializer
