const express = requeire('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const rouiter = require('./router');

const hostname = '127.0.0.1';
const port = 3001;

// consfigure bodyparser
const jsonParser = bodyParser.json();
const urEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

// configure cors
app.use(cors());

// configure the router
app.use('/api', router)

// get
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to express server of employee portal </h2>`);
});

app.listen(port, hostname, () => {
    console.log(`express server is started at http://${hostname}:{port}`)
});