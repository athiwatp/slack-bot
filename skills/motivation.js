
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  var request = require("request")

var url = "http://api.forismatic.com/api/1.0/";

request.post({
    url: url,
    form: {method: 'getQuote',format: 'json', lang: 'en'}
}, function (error, response, body) {
    console.log(error);
    console.log(response.statusCode);

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        body = JSON.parse(body);
        bot.reply(message,body.quoteText+ ':hugging_face:');
    }
});
};
