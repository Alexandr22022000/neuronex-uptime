const express = require('express');

module.exports = (app, onStop, onStart) => {
    let uptimeApp;
    if (app) uptimeApp = app;
    else uptimeApp = express();

    uptimeApp.get('/uptime/update', (req, res) => {
        console.log("Neuronex uptime: update at " + new Date() + " from " + req.query.node);
        res.end('ok');
    });

    uptimeApp.get('/uptime/start', (req, res) => {
        console.log("Neuronex uptime: started at " + new Date() + " from " + req.query.node);
        if (onStart) onStart();
        res.end('ok');
    });

    uptimeApp.get('/uptime/stop', (req, res) => {
        console.log("Neuronex uptime: stopped at " + new Date() + " from " + req.query.node);
        if (onStop) onStop();
        res.end('ok');
    });

    if (!app) {
        uptimeApp.set('port', (process.env.PORT || 4000));
        uptimeApp.listen(uptimeApp.get('port'), () => console.log("Neuronex uptime: server is started on port " + uptimeApp.get('port')));
    }
    else console.log("Neuronex uptime: used external server");
};