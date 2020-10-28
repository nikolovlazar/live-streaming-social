# Raycast Script: Change Twitter name when streaming

This is a Raycast command that appends "🔴 LIVE - " to your Twitter Name when you go Live Streaming.

## Setup
- You need to have [node](https://nodejs.org/en/) installed
- Run `npm install` in the terminal in the root of this project
- Make sure you have a Twitter Developer Account
- Create a new App in the [Developer Portal](https://developer.twitter.com/en/portal) and set the "**Read and Write**" permissions
- Get your keys from the "**Keys and tokens**" and make sure you write them down somewhere because on 01/12/2021 your consumer keys will no longer be visible
- Rename the `.sample-env` to `.env` and enter the required variables:
  - `CONSUMER_KEY` is your **API Key**
  - `CONSUMER_SECRET` is your **API Key Secret**
  - `ACCESS_TOKEN_KEY` is your **Access token**
  - `ACCESS_TOKEN_SECRET` is your **Access token secret**
  - `TWITTER_HANDLE` is your **Twitter Handle** (like "NikolovLazar", without the `@`)
- In the `*.sh` files inside `scripts/` change the `[PATH_TO_PROJET_LOCATION]` to your project location, for example: `~/Documents/raycast/scripts/`
- Make sure the scripts have an execute permissions by running `chmod +x start-streaming.sh` and `chmod +x stop-streaming.sh` in the terminal.
- Add them in your Raycast Scripts and enjoy 🙌