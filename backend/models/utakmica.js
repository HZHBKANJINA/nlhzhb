const mongoose = require('mongoose');

const utakmicaSchema=new mongoose.Schema({
    termin:String,
    rezultat:String,
    domacin:{type:mongoose.Schema.Types.ObjectId,ref:'klubovi'},
    gost:{type:mongoose.Schema.Types.ObjectId,ref:'klubovi'},
    glavniSudac:{type:mongoose.Schema.Types.ObjectId,ref:'sudije'},
    pomocniSudac1:{type:mongoose.Schema.Types.ObjectId,ref:'sudije'},
    pomocniSudac2:{type:mongoose.Schema.Types.ObjectId,ref:'sudije'},
    cetvrtiSudac:{type:mongoose.Schema.Types.ObjectId,ref:'sudije'},
    varSudac:{type:mongoose.Schema.Types.ObjectId,ref:'sudije'},
    avarSudac:{type:mongoose.Schema.Types.ObjectId,ref:'sudije'},
    delegat:{type:mongoose.Schema.Types.ObjectId,ref:'delegati'},
    kupUtakmica:{type:mongoose.Schema.Types.ObjectId,ref:'utakmica'},
});

module.exports=mongoose.model('utakmica',utakmicaSchema);