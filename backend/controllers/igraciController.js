const igraci=require('../models/igraci');

exports.createIgrac=async(req,res)=>{
    try{
        const{
            slika,
            ime,
            prezime,
            nadimak,
            datum_rodjenja,
            broj,
            rating,
            pozicija,
            noga,
            klub
        }=req.body;

        const newIgrac= new igraci({
            slika,
            ime,
            prezime,
            nadimak,
            datum_rodjenja,
            broj,
            rating,
            pozicija,
            noga,
            klub
        });

        await newIgrac.save();
        res.status(201).json(newIgrac);
    }catch (err) {
        res.status(400).json({ message: err.message });
      }
};

exports.getIgraci=async(req,res)=>{
    try{
        const players=await igraci.find().populate('klubovi');
        res.json(players);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
};

exports.getIgracById=async(req,res)=>{
    try{
        const player=await igraci.findById(req.params.id).populate('klubovi');
        if(!player){
            return res.status(404).json({ message: 'Igrač ne postoji' });
        }
        res.json(player);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

exports.updateIgrac=async(req,res)=>{
    try{
        const player=await igraci.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!player){
            return res.status(404).json({message: 'Igrač ne postoji'});
        }
        res.json(player);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};

exports.deleteIgrac=async(req,res)=>{
    try{
        const player=await igraci.findByIdAndDelete(req.params.id);
        if(!player){
            return res.status(404).json({message: 'Igrač ne postoji'});
        }
        res.json({ message: 'Igrač izbrisan' });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};