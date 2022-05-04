const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://root:root@cluster0.m0s67.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
