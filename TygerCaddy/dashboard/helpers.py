from certificates.models import Certificate
from hosts.models import Host
from proxies.models import Proxy, Header, Policies


def host_count():
    count = Host.objects.count()
    return count


def proxy_count():
    count = Proxy.objects.count()
    return count


def header_count():
    count = Header.objects.count()
    return count


def certificate_count():
    count = Certificate.objects.count()
    return count


def policy_count():
    count = Policies.objects.count()
    return count
