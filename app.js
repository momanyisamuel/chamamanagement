const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

//database 
const db = require('./models/index');

//test db connection
// db.authenticate()
// .then(() => {
//   console.log('DB Connection has been established successfully.');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

db.sequelize.sync({
    force : false,
    logging : console.log
}).then(function(){
   console.log('Nice db looks good')
}).catch(function(err){
  console.log(err, "oh no! something is wrong")
})


app.get('/', (req, res) => res.render('index'))

app.use('/chamas', require('./routes/chamas'))
app.use('/contributions', require('./routes/contributions'))


const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log('app started...'));