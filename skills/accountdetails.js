
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, "Thanks! You're authenticated. Let me get you transferred to your support team. One moment... \n\n Transferred to Agent");
};
