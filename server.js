//<-----server.js----->

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const knex = require('./db.js');

//<-----MIDDLEWARE---->

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes
app.get('/', (req, res) => {
  response.send('The slash route is working.');
});

app.get('/student_data', (req, res) => {
  // this returns an array of objects representing all the rows in that table and all the columns in those rows
  knex('student_info_table')
  .then(rows => res.json(rows));
})

app.get('/student_data/:id', (req, res) => {
  // access the request object, tack on params, then id
  const studentInfoTableId = req.params.id;
  knex('student_info_table')
  .where('id', studentInfoTableId) // SELECT * from student_info_table WHERE id=studentInfoTableId
  .then(rows => {
    // we want the first thing in the array, which is the id, so rows[0] is what we want
    const foundStudentInfoTableId = rows[0];
    // send the res as json
    res.json(foundStudentInfoTableId);
  })
})

app.patch('/student_data/:id', (req, res) => {
  // fullName, gitHub, linkedIn, email, professionalSite, capstoneLink, capstoneDesc
  const studentInfoTableId = req.params.id;
  // console.log(`req.body: ${res.body}`); // debug
  const {fullName, gitHub, linkedIn, email, capstoneDesc} = req.body;

  knex('student_info_table')
  .where('id', studentInfoTableId)
  .returning('*')
  .update({fullName, gitHub, linkedIn, email, capstoneDesc}) // todo change column names to snake_case
  .then (rows => {
    const studentId = rows[0];
    res.json(studentId)
  });
});

app.delete('/student_data/:id', (req, res) => {
  const studentId = req.params.id;
  knex('student_info_table')
  .where('id', studentId)
  .del()
  .then(res.send('Deleted'));
});



//<---I'M LISTENING--->

app.listen(process.env.PORT || PORT , () => console.log(`Listening on http://localhost:${PORT}/`))
