const express = require('express');

var app = express();

app.use(express.json());

var data = require('./extinct.json')


app.get('/Extinct', (req, res) => {
    if (!data) {
        res.status(404).send('Information Not Found')
    }
    res.send(data)
})
// Get Method
app.get('/Extinct/:id', (req, res) => {
    const findAnimal = data.Extinct.find(function (animal) {
        return parseInt(req.params.id) === animal.id;
    })
    if (!findAnimal) {
        res.status(404).send('Information not Found')
    }
    res.send(findAnimal)
})
// Post Method
app.post('/Extinct', (req, res) => {
    const createNewInfo = {
        id: data.Extinct.length + 1,
        name: req.body.name,
        year: req.body.year,
        category: req.body.category,

    }
    data.Extinct.push(createNewInfo);
    res.send(createNewInfo);
})
// Put Method
app.put('/Extinct/:id', (req, res) => {
    const ind = data.Extinct.findIndex((animal) => {
        return parseInt(req.params.id) === animal.id
    })
    if (ind < 0) {
        res.status(404).send('Id Not Found, Please check your id and try again or Enter a different one ')
        return
    }
    data.Extinct[ind].name = req.body.name;
    data.Extinct[ind].year = req.body.year;
    data.Extinct[ind].category = req.body.category;
    res.send(data.Extinct[ind]);
})
// Delete Method
app.delete('/Extinct/:id', (req, res) => {
    const ind = data.Extinct.findIndex((animal) => {
        return parseInt(req.params.id) === animal.id
    })
    if (ind < 0) {
        res.status(404).send('Id not Found')
        return;
    }
    const check = data.Extinct.indexOf(ind);
    data.Extinct.splice(check, 1);
    res.json(data.Extinct)

})
app.listen(1338)

