#!/bin/bash -
set -o nounset
echo "$LOCATION"
echo "$PROXY_PASS"
sed -i "s/^.*location \^\~ \/location/   location \^\~ $LOCATION/g"  "/etc/nginx/conf.d/default.conf"
sed -i "s/^.*proxy_pass http:\/\/127.0.0.1:80/   proxy_pass $PROXY_PASS/g"  "/etc/nginx/conf.d/default.conf"
exec nginx -g 'daemon off;'
