'use strict';

var express     = require('express'),
    http        = require('http'),
    path        = require('path'),
    cons        = require('consolidate'),
    dustjs      = require('dustjs-linkedin'),
    app         = express(),
    controllers;

controllers = {
    homePage        : require('./controllers/pages/home-page'),
    battlePage      : require('./controllers/pages/battle-page'),
    formationPage   : require('./controllers/pages/formation-page')
};

// retain whitespace and newlines
dustjs.optimizers.format = function(ctx, node) { return node; };

app.set('port', 3000);
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', path.join(__dirname, 'views'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', controllers.homePage);
app.get('/battle', controllers.battlePage);
app.get('/formation', controllers.formationPage);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});