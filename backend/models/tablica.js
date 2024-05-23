const mongoose=require('mongoose');

const tablicaSchema=new mongoose.Schema({
    mjesto_na_tablici:Number,
    klub:{type:mongoose.Schema.Types.ObjectId,ref:'klubovi'},
    utakmice:{type:mongoose.Schema.Types.ObjectId,ref:'utakmica'},
    pobjede:{},
    porazi:{},
    nerijeseno:{},
    zabijeni_golovi:{},
    primljeni_golovi:{},
    gol_razlika:{},
    bodovi:{}
});

module.exports=mongoose.model('tablica',tablicaSchema);