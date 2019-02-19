import {SlackBot, SlackMessage} from 'botkit';

const KURUO_BIRTHDAY = new Date('2018-11-26 11:27:00');

export class AgeController {
  static run(bot: SlackBot, msg: SlackMessage) {
    const now = new Date();

    const deltaMs = now.getTime() - KURUO_BIRTHDAY.getTime(),
      deltaMin = deltaMs / (1000 * 60),
      deltaHour = deltaMin / 60,
      deltaDay = Math.floor(deltaHour / 24);

    const deltaMinOfHour = Math.floor(deltaMin % 60),
      deltaHourOfDay = Math.floor(deltaHour % 24);

    bot.reply(msg, `生後${deltaDay}日と${deltaHourOfDay}時間${deltaMinOfHour}分`);
  }
}
