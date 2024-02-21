// app.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Povezivanje s MongoDB bazom podataka
mongoose.connect('mongodb://localhost:27017/cityscape', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Definiranje Mongoose modela
const recenzijaSchema = new mongoose.Schema({
  name: String,
  recenzija: String,
  ocjena: String
});

const Recenzija = mongoose.model('Recenzija', recenzijaSchema);

// Postavljanje rute za dohvat recenzija
app.get('/recenzije', async (req, res) => {
  try {
    // Dohvati sve recenzije iz baze podataka
    const recenzije = await Recenzija.find();
    res.json(recenzije); // Pošalji recenzije kao JSON odgovor
  } catch (error) {
    console.error('Error fetching recenzije:', error);
    res.status(500).json({ error: 'Error fetching recenzije' });
  }
});

// Pokretanje Express servera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
