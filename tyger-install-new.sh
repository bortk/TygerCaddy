#!/bin/bash

# Set used terminal colors
GREEN=$(tput setaf 2)
NORMAL=$(tput sgr0)
LIME_YELLOW=$(tput setaf 190)

# do not change, these are hardcoded elsewhere
APPS_DIR=/apps
TYGER_ROOT=$APPS_DIR/TygerCaddy
TYGER_DIR=$TYGER_ROOT/TygerCaddy
TYGER_DATA=$TYGER_DIR/data
TYGER_LOGS=$TYGER_DATA/logs

if [ "$(whoami)" != 'root' ]; then
  printf "${GREEN}This script must be run as root${NORMAL}\n"
  printf "\n"
  SCRIPTPATH=$( cd $(dirname $0) ; pwd -P )
  SELF=`basename $0`
  sudo $SCRIPTPATH'/'$SELF
  exit 1
fi

printf "${GREEN}You are about to install TygerCaddy.${NORMAL}\n"
read -p "${LIME_YELLOW}Proceed? (y/N)${NORMAL} " -r
printf "\n"
if [[ ! $REPLY =~ ^[Yy*] ]]
then
    exit
fi

printf "${GREEN}Installing dependencies...${NORMAL}\n"
apt-get update && apt-get -y upgrade && apt-get -y install --no-install-recommends \
  python3 \
  python3-pip \
  python3-setuptools \
  python3-wheel \
  python3-dev \
  gcc \
  libssl-dev \
  libffi-dev \
  git \
  curl \
  virtualenv

printf "${GREEN}Cloning repository...${NORMAL}\n"
mkdir $APPS_DIR
cd $APPS_DIR

git clone -b api https://github.com/morph1904/TygerCaddy.git

virtualenv -p /usr/bin/python3.6 $APPS_DIR/tygerenv
mkdir -p $TYGER_DATA \
         $TYGER_DATA/logs

touch $TYGER_DATA/caddyfile.conf
touch $TYGER_LOGS/caddy.txt
touch $TYGER_LOGS/uwsgi.txt

printf "${GREEN}Installing Caddy...${NORMAL}\n"
curl https://getcaddy.com | bash -s personal hook.service

printf "${GREEN}Creating folders, moving files, setting permissions...${NORMAL}\n"
mkdir -p /etc/caddy \
         /etc/ssl/caddy

pip3 install -r requirements.txt

cp $TYGER_ROOT/caddy.service        /etc/systemd/system/caddy.service
cp $TYGER_ROOT/uwsgi.service        /etc/systemd/system/uwsgi.service
cp $TYGER_ROOT/caddy-reload.path    /etc/systemd/system/caddy-reload.path
cp $TYGER_ROOT/caddy-reload.service /etc/systemd/system/caddy-reload.service
cp $TYGER_ROOT/gunicorn.service /etc/systemd/system/gunicorn.service
cp $TYGER_ROOT/gunicorn.socket /etc/systemd/system/gunicorn.socket
cp $TYGER_ROOT/gunicorn.conf /etc/tmpfiles.d/gunicorn.conf


chown -R www-data:root /etc/caddy \
                       /etc/ssl/caddy
chown -R www-data:www-data $TYGER_ROOT
chown root:root /etc/systemd/system/caddy.service \
                /etc/systemd/system/uwsgi.service \
                /etc/systemd/system/caddy-reload.path \
                /etc/systemd/system/caddy-reload.service \
                /etc/systemd/system/gunicorn.service \
                /etc/systemd/system/gunicorn.socket \
                /etc/tmpfiles.d/gunicorn.conf \
                /usr/local/bin/caddy

chmod -R 700 /etc/ssl/caddy
chmod -R 755 $TYGER_ROOT \
             /usr/local/bin/caddy \
             /etc/systemd/system/caddy.service \
             /etc/systemd/system/caddy-reload.path \
             /etc/systemd/system/caddy-reload.service \
             /etc/systemd/system/uwsgi.service \
             /etc/systemd/system/gunicorn.service \
             /etc/systemd/system/gunicorn.socket \
             /etc/tmpfiles.d/gunicorn.conf \

setcap 'cap_net_bind_service=+eip' /usr/local/bin/caddy

printf "${GREEN}Setting up services to run on boot...${NORMAL}\n"
systemctl daemon-reload
systemctl enable caddy.service
systemctl enable uwsgi.service
systemctl enable gunicorn.socket
systemctl enable gunicorn.service

source $APPS_DIR/tygerenv/bin/activate
cd $APPS_DIR
pip3 install -r $TYGER_DIR/requirements.txt

printf "${GREEN}Starting TygerCaddy... Almost there!${NORMAL}\n"
systemctl start uwsgi
systemctl start caddy
systemctl start gunicorn
printf "${GREEN}Install complete! Enter the server IP in your chosen browser complete the install wizard.${NORMAL}\n"
