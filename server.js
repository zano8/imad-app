var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var blogs = {
    'blog-one': {
        title: 'my first blog',
        heading: 'my favourite fictional characters :',
        list: `   <ol> <li>newt (tmr)</li>
                    <li>minho (tmr)</li>
                    <li>gale (thg)</li>
                    <li>cinna (thg)</li>
                    <li>hermoine (hp)</li>
                    <li>sirius black (hp)</li>
                    <li>fred weasley (hp)</li>
                    <li>george weasley (hp)</li>
                    <li>augustus waters (tfios)</li>
                    <li>benjamin blue (v)</li>
                    <li>hiram stolowitski (v)</li>
                    </ol>`,
        content: `<hr>
            <div>
                ps: the order of the characters strictly do not matter except for the first two.
            </div>
                <hr>
                blogging date: 8/8/17-11:18pm
                <hr>
                update: time finished- 12:22pm.
                programming is freakin time consuming.
                <hr>
                <a href="/">main page</a>
        </div>`
    },
    'blog-two': { title: 'blog two',
        heading: 'my friends',
        list: `  <ul>
            <a href="https://discourse.imad.hasura.io/u/Zara_AR/summary"><li>Zahra Abdur Rahman</li></a>
            <li>Shirin Fathima</li>
            <li>Sharafunnisha</li>
            <li>Syed Fathima Sahana</li>
            <li>Jafrin</li>
            <li>aabidha Farheen</li>
            <li>ayman ahmad</li>
            <li> and lots more...</li>
        </ul> `,
        content:` <hr>
        <a href="/">main page</a><br>
        <a href="http://fzanofer66.imad.hasura-app.io/blog-one">my first blog</a>`
    },
    'blog-three': {
        title: 'blog three',
        heading: 'animals',
        list: `
        <ul><li>eagle</li>
        <li>dragon</li>
        <li>snake</li>
        <li>electric eel</li>
        <li>butterfly</li>
        <li>wolf</li>
        </ul>`,
        content: `<hr>
        <div>
        update: finished this site in 4 minutes. improving my programming skills :)
        </div>
        <hr>
        <a href="/">main page</a>
        <a href="fzanofer.imad.hasura-app.io/blog-one">blog one</a>
        <a href="fzanofer.imad.hasura-app.io/blog-two">blog two</a>
        <hr>
    },
};

function createtemplate(data)  {
    var title = data.title;
    var heading = data.heading;
    var list = data.list;
    var content = data.content;
    
    var htmltemplate = `<html>
    <head>
        <title>
         ${title}
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body bgcolor="yellow">
        <div class="first">
            <div>
                <h1><b>${heading}</b></h1>
            </div>
            <div>
             ${list}
            ${content}
        
    </body>
</html>`;
return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:blogname', function (req, res) {
    var blogname = req.params.blogname;
  res.send(createtemplate(blogs[blogname]));
});

app.get('/blog-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog two.html'));
});

app.get('/blog-three', function (req, res) {
    res.send('article three requested and will be served here');
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
