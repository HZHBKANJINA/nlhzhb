const mongoose = require('mongoose');

const statIgracaSchema=new mongoose.Schema({
    igrac:{type:mongoose.Schema.Types.ObjectId,ref:'igraci'},
    utakmica:{type:mongoose.Schema.Types.ObjectId,ref:'utakmica'},
    golovi:Number,
    minute_golova:String,
    je_li_pocetna:String,
    minuta_ulaska:String,
    odigrano_minuta:String
});

module.exports=mongoose.model('statIgraca',statIgracaSchema);