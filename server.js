const express = require('express');

const app = express();

console.log(__dirname + '/public');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');


app.use((req, res, next) => {
    let date = new Date();
    if (date.getDay() !== 1 && date.getDay() !== 6 && date.getHours() >= 9 && date.getHours() <= 17) {
        console.log("Open!"); 
        next();
    } else {
    console.log('Closed!');
}
})

app.get('/', (req, res, next) => {
    res.render('Home');
})


app.get('/service', (req, res, next) => {
    res.render('Service');
})

app.get('/contact', (req, res, next) => {
    res.render('Contact');
})

app.use((req, res, next) => {
    res.status(404).render('404');
})

app.listen(3000, (err) => {
    if (err) {
        console.log('Connection Failed');
    }
    console.log("Connection Success\nhttp://localhost:3000");
});