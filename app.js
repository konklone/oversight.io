// this is an Express app
var express = require('express');
var app = express();

// environment and port
var env = process.env.NODE_ENV || 'development';
var port = parseInt(process.argv[2], 10);
if (isNaN(port)) port = 3000;

// app middleware/settings
app.engine('.html', require('ejs').__express);
app.engine('.xml',  require('ejs').__express);
app.enable('trust proxy')
  .use(require('body-parser').json())
  .use(require('body-parser').urlencoded({extended: false}))
  .use(require('method-override')())
  .use(function(req,res,next){
    res.locals.req = req;
    next();
  })
  .use(express.static(__dirname + '/public'));

// development vs production
if (env == "development")
  app.use(require('errorhandler')({dumpExceptions: true, showStack: true}))
else
  app.use(require('errorhandler')())


// helpers and routes
app.locals.helpers = require("./app/helpers");
app.locals.config = require("./config/config");

var routes = require("./app/routes");
app.get('/', routes.index);
app.get('/sitemap.xml', routes.sitemap);
app.get('/reports', routes.reports);
app.get('/report/:inspector/:report_id', routes.report);


// boot it up!
app.listen(port, function() {
  console.log("Express server listening on port %s in %s mode", port, env);
});
