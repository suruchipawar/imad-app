var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articles={
    article_one:{title:'article_one',heading:{article_one},content:`This is my first article.This is my first article.This is my first article.`},
      article_two:{title:'article_two',heading:{article_two},content:`This is my second article.This is my second article.This is my first article.`}
    
};
function create_temp(data)
{
    var title=data.title;
    var content=data.content;
    var html_template=`
    <html>
    <head><title>${title}</title></head>
    <body background='grey'>
    ${content}
    </body>
    </html>
        `;
        return html_template;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/article-1', function (req, res) {
  res.send(create_temp(article_one));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
