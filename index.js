const express = require('express');
const PORT = process.env.PORT || 9000;
const routes = require('./routes');


const bodyParser = require('body-parser');

//do I need these as well?  pending.
//let db = require('./models');
//let Users = db.Users;

const app = express();



app.use(express.static('public'));


app.use(bodyParser.json());

//smoke test
app.get('/', (req, res) => {
  res.send('working');
});

app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
})

app.listen(PORT, () => {
  //revisit this!
  db.sequelize.sync( {force: true} );
  console.log(`server running on ${PORT}`);
});
// Setup the Server

// DONE create a new node project using npm
// DONE add the express and body-parser dependency
// DONE add the sequelize pg and pg-hstore dependencies
// (need to require in sequelize but not dependencies)
// DONE initialize a new sequelize project //SEQUELIZE INIT (makes folders too!)
// for following run sql file in psql
// DONE create a postgres user named bored with a password
// DONE create a postgres database named message_bored owned by bored
// DONE update config/config.json
// Use sequelize-cli for the following:
// create a 3 models, Users, Topics, and Messages refer to schemas
// DONE sync your models with postgres refer to sql
// DONE setup an express project in index.js
// DONE set up express static middleware configured to serve content from ./public
// DONE set up express static middleware for body-parser
// add router middleware for /api to use the /api/index.js module
// /api/index.js will require and use the three modules, ./messages, ./topics, ./users
// implement the routes defined in routes
