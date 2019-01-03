const neuronex_uptime = require('./index'),
    express = require('express'),
    app = express();

neuronex_uptime(app);

app.get('/', (req, res) => {
    res.end("hello!");
});

app.listen(5000, () => console.log("Server is started on port " + 5000));