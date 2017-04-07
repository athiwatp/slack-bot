
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, `for(var index=0; index < key.length; index++) {
    === Your code ===
  }`);
};
