var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

require('./config/mongoose.js');
var Schema = mongoose.Schema;

// var bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

require('./config/routes.js')(app);

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});