import Twitter from 'twitter-lite';
import dotenv from 'dotenv';

dotenv.config();

const twitterHandle = process.env.TWITTER_HANDLE;

if (!twitterHandle) {
  console.error('No twitter handle defined in .env!!');
  process.exit(1);
}

const client = new Twitter({
  subdomain: "api",
  version: "1.1",
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const isLive = process.argv[2] === 'on';

client.get('users/lookup', {
  screen_name: twitterHandle
})
  .then(data => {
    const name = data[0].name.replace('🔴 LIVE - ', '');

    client.post('account/update_profile', {
      name: isLive ? `🔴 LIVE - ${name}` : name
    })
      .then(() => {
        console.log("Success!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err.errors[0]);
        process.exit(1);
      })
  })
  .catch(err => {
    console.error(err.errors[0]);
    process.exit(1);
  })