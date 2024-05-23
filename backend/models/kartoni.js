const mongoose = require('mongoose');

const kartonSchema=new mongoose.Schema({
    naziv:String,
    minuta:Number,
    igrac:{type:mongoose.Schema.Types.ObjectId,ref:'igraci'},
    klub:{type:mongoose.Schema.Types.ObjectId,ref:'klubovi'},
    utakmica:{type:mongoose.Schema.Types.ObjectId,ref:'utakmica'}
});

module.exports=mongoose.model('kartoni',kartonSchema);