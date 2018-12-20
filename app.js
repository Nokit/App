'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => res.send(/src/getTdnet/Tdnet-rss/Tdnet-rss-20181220.xml));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
