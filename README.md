# Run Google Page Speed against Websites that are behind Basic Authentication.

This is a nifty way to test environments that are live, but live behind Basic Authentication.

## Installation

1. Download [ngrok](http://ngrok.com).
1. Install this node application

## Configuration

For a user `admin` with the password `admin` at http://staging.mywebsite.com`, you would update the following:

1. Edit `proxy.js` and rename the following placeholders
1. `<your website>` to `http://staging.mywebsite.com`
1. `<your username>` to `admin`
1. `<your password>` to `admin`

## Usage

1. `$ npm i` (server will now be running on `localhost:3000`)
1. Run ngrok: `$ ngrok http localhost:3000` which spins up an ngrox proxy to localhost (which points to your website)
1. Copy the URL in the first "Forwarding" propery below.
1. Paste it in this page - https://developers.google.com/speed/pagespeed/insights/

```
Tunnel Status                 online
Update                        update available (version 2.1.18, Ctrl-U to update)
Version                       2.0.25/2.1.18
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://xxxxxxxx.ngrok.io -> localhost:3000
Forwarding                    https://xxxxxxxx.ngrok.io -> localhost:3000

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```