var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
  title:'Article One | Tatsuya Shiba',
  heading:'Article One',
  date:'11th Aug 2017',
  content:`
          <p>
          This is article one 
          </p>
          <p>
          This is article one 
          </p>
          <p>
          This is article one 
          </p>
  
          `
},
'article-two':{
  title:'Article Two | Tatsuya Shiba',
  heading:'Article Two',
  date:'13th Aug 2017',
  content:`
          <p>
          This is article two. 
          </p>
          <p>
          This is article two. 
          </p>
          <p>
          This is article two. 
          </p>
  
          `
},
'article-three':{
  title:'Article Three | Tatsuya Shiba',
  heading:'Article Three',
  date:'15th Aug 2017',
  content:`
          <p>
          This is article three.
          </p>
          <p>
          This is article three.
          </p>
          <p>
          This is article three.
          </p>
  
          `
}
};
function createTemplate(data)
{
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
        var htmlTemplate=`<!DOCTYPE HTML>
        <html>
            <head>
                <title>
                  ${title} 
                </title>
                <meta name="viewport" cotent="width=device-width ,initial scale=1 " />
                <link href="/ui/style.css" rel="stylesheet" />
              
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <h3>${heading}</h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>`;
    return htmlTemplate;            
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});

app.get('/article-two',function (req,res) {
   res.send(createTemplate(articleTwo)); 
});

app.get('/article-three',function (req,res) {
   res.send(createTemplate(articleThree)); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
