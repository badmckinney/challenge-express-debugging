const express = require('express');
const exphbs = require('express-handlebars');
router = express.Router();

const app = express();
const PORT = process.env.PORT || 8080;
const home = require('./router/home/index.js'); // rename this to router
const about = require('./router/about/index.js'); // rename this to router
const contact = require('./router/contact/index.js'); // rename this to router

app.use(express.static('public'));
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
