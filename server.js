var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title: 'Article one | Ankit choudhary',
        heading: 'Article one',
        date: 'Apr 19, 2018',
        content: ` 
                    <p>
                        This is my first article.My name is Ankit choudhary.I am a B.Tech cse student.I am in my final year.I love coding.
                    </p>
                    <p>
                        I am passionate about coding and a data science enthusiast.I have a penchant for learning new hings and i am a firm believer in the saying that failures are the pillar of success.
                    </p>`
    },
    'article-two':{
        title: 'Article Two | Ankit choudhary',
        heading: 'Article Two',
        date: 'Apr 19, 2018',
        content: ` 
                    <p>
                        This is my second article.My name is Ankit choudhary.I am a B.Tech cse student.I am in my final year.I love coding.
                    </p>
                    <p>
                        I am passionate about coding and a data science enthusiast.I have a penchant for learning new hings and i am a firm believer in the saying that failures are the pillar of success.
                    </p>`
    },
    'article-three':{
        title: 'Article Three | Ankit choudhary',
        heading: 'Article Three',
        date: 'Apr 19, 2018',
        content: ` 
                    <p>
                        This is my third article.My name is Ankit choudhary.I am a B.Tech cse student.I am in my final year.I love coding.
                    </p>
                    <p>
                        I am passionate about coding and a data science enthusiast.I have a penchant for learning new hings and i am a firm believer in the saying that failures are the pillar of success.
                    </p>`
    }
};
function  createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
               ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <br>
                <h3>
                    ${heading}
                </h3>
                <div>
                   ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]={} content object for article one
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName])); 
});

app.get('/article-two',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));  
});

app.get('/article-three',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));   
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
