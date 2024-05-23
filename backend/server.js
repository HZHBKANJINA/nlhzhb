const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const igraciController=require('../backend/controllers/igraciController');
const kluboviController = require('./controllers/kluboviController');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/nlhzhb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(cors());

app.post('/igraci',igraciController.createIgrac);
app.get('/igraci',igraciController.getIgraci);
app.get('/igraci/:id',igraciController.getIgracById);
app.put('/igraci/:id',igraciController.updateIgrac);
app.delete('/igraci/:id',igraciController.deleteIgrac);
app.post('/klubovi', kluboviController.createKlub);
app.get('/klubovi', kluboviController.getKlubovi);
app.get('/klubovi/:id', kluboviController.getKlubById);
app.put('/klubovi/:id', kluboviController.updateKlub);
app.delete('/klubovi/:id', kluboviController.deleteKlub);

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: { message: err.message } });
  });
  
  module.exports = app;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });