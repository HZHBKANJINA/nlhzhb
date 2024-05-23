const mongoose = require('mongoose');

const osobljeSchema=new mongoose.Schema({
    ime:String,
    prezime:String,
    datum_rodjenja:Date,
    uloga:String,
    klub:{type:mongoose.Schema.Types.ObjectId,ref:'klubovi'}
});

module.exports=mongoose.model('osoblje',osobljeSchema);