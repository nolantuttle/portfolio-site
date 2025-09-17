#!/usr/bin/bash

cd /home/nolan/nolan-website

/usr/bin/npm run start &

/usr/bin/cloudflared tunnel run portfolio-tunnel &

wait
