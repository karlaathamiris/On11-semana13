const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/movies', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log('MongoDB conectado')).catch(err => console.err)
}

module.exports = { connect }