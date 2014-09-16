var request = require("request");
var cheerio = require("cheerio");

request("http://news.dbanotes.net/", function (error, response, body) {
  if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        $('tr td.title a').each(function () {
            console.log('%s (%s)', $(this).text(), $(this).attr('href'));
        });
  }
});