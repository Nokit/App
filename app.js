'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
var fs = require('fs');

var stream = fs.createReadStream("src/getTdnet/Tdnet-rss/Tdnet-rss-20181220.xml");
stream.setEncoding('utf8');

console.log(stream);

app.get('/', (req, res) => {
   res.setHeader('Content-Type', 'text/plain');
   res.send(stream);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
