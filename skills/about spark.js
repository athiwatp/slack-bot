
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'Spark is automated content sharing app. Visit https://spark.shellstack.com for more details!');
};
