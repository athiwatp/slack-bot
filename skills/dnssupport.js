
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, "Ok. Let me hand you off to your support team. I'll need to authenticate you first. What is your account number, email address or phone number, please?" );
};
