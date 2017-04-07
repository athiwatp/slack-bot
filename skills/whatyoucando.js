
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'I can do this: \n - Ask me about cat \n - Ask me to inspire you \n - Ask me to give you code \n - Ask me a for loop');
};
