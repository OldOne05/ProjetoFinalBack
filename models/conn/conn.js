const mongoose = require('mongoose');

function Conn(url,user,pass,banco){
    mongoose.connect(`mongodb+srv://dbTarefa:20050611@bancofullstack.exv9p.mongodb.net/myFirstDatabase`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;