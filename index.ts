import axios from 'axios';
import * as Botkit from 'botkit';
import * as dotenv from 'dotenv';

dotenv.config();

const botController = Botkit.slackbot({});
botController.spawn({
  token: process.env.SLACK_TOKEN,
}).startRTM((err) => {
  if (err) {
    throw err;
  }
});

botController.hears(/now/, ['mention', 'direct_mention'], (bot, msg) => {
  axios.request({
    url: process.env.KURUO_URL,
    method: 'get',
    responseType: 'stream'
  }).then((res) => {
    const payload = {
      channels: msg.channel,
      filename: 'kuruo.jpg',
      title: 'kuruo_now',
      file: res.data,
    };

    bot.api.files.upload(payload, (err, _) => {
      if (err) {
        bot.reply(msg, `kuruo error: ${err}`);
      }
    });
  });
});
