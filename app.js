'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
fs = require('fs');

let cache = [];
cache[0] = fs.readFileSync(src/getTdnet/Tdnet-rss/Tdnet-rss-20181220.xml);


app.get('/', (req, res) => {
   res.setHeader('Content-Type', 'text/xml');
   res.send(cache[0]);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
