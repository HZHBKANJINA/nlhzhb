const mongoose = require('mongoose');

const klubSchema=new mongoose.Schema({
    naziv:String,
    adresa:{type:mongoose.Schema.Types.ObjectId,ref:'adresa'},
    stadion:{type:mongoose.Schema.Types.ObjectId,ref:'stadioni'}
});

module.exports=mongoose.model('klubovi',klubSchema);