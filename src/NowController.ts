import {SlackBot, SlackMessage} from 'botkit';
import axios from 'axios';

export class NowController {
  static async run(bot: SlackBot, msg: SlackMessage) {
    const response = await axios.request({
      url: process.env.KURUO_URL,
      method: 'get',
      responseType: 'stream'
    });

    const payload = {
      channels: msg.channel,
      filename: 'kuruo.jpg',
      title: 'kuruo_now',
      file: response.data,
    };

    bot.api.files.upload(payload, (err, _) => {
      if (err) {
        bot.reply(msg, `kuruo error: ${err}`);
      }
    });
  }
}
