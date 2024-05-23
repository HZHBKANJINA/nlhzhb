const mongoose = require('mongoose');

const delegatSchema=new mongoose.Schema({
    ime:String,
    prezime:String,
    datum_rodjenja:Date
});

module.exports=mongoose.model('delegati',delegatSchema);