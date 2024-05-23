const mongoose=require('mongoose');

const trenerSchema=new mongoose.Schema({
    ime:String,
    prezime:String,
    datum_rodjenja:Date,
    klub:{type:mongoose.Schema.Types.ObjectId,ref:'klubovi'}
});

module.exports=mongoose.model('treneri',trenerSchema);