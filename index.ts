import * as Botkit from 'botkit';
import * as dotenv from 'dotenv';
import {NowController} from "./src/NowController";
import {AgeController} from "./src/AgeController";

dotenv.config();

const bot = Botkit.slackbot({});
bot.spawn({
  token: process.env.SLACK_TOKEN,
}).startRTM((err) => {
  if (err) {
    throw err;
  }
});

/*
 * Replies current picture of Kuruo.
 *
 * usage: @kuruo now
 */
bot.hears(/now/, ['mention', 'direct_mention'], NowController.run);

/*
 * Replies current age of Kuruo.
 *
 * usage: @kuruo age
 */
bot.hears(/age/, ['mention', 'direct_mention'], AgeController.run);
