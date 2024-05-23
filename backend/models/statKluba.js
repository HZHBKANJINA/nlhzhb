const mongoose=require('mongoose');

const statKlubaSchema=new mongoose.Schema({
    klub:{type:mongoose.Schema.Types.ObjectId,ref:'klubovi'},
    utakmica:{type:mongoose.Schema.Types.ObjectId,ref:'utakmica'},
    broj_golova:Number,
    zaledja:Number,
    korneri:Number
});

module.exports=mongoose.model('statKluba',statKlubaSchema);