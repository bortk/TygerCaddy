#!/bin/bash

TYGER_DIR=/apps/TygerCaddy/TygerCaddy

if [ -e $TYGER_DIR/data/db.sqlite3 ]
then
  python3 $TYGER_DIR/manage.py migrate
else
  printf "Assuming new install, doing nothing"
fi

if [ -e $TYGER_DIR/data/caddyfile.conf ]
then
  printf "Assuming existing install, doing nothing"
else
  cp $TYGER_DIR/caddyfile.conf $TYGER_DIR/data
fi

uwsgi --emperor /apps/TygerCaddy/uwsgi.ini &
caddy -log stdout -pidfile=$TYGER_DIR/data/caddypid.txt -agree=true -conf=$TYGER_DIR/data/caddyfile.conf -root=/var/tmp
