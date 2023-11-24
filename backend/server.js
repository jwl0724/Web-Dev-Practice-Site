const app = require('express')();
const cors = require('cors');
const PORT = 3000

app.use(cors());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log(`Server now active at port: ${PORT}`)
})