const  mongoose  = require('mongoose');
const contrat = require('../models/contractModel');


//get all contracts
const getContracts = async (req, res) => {
const contracts = await contrat.find({}).sort({createdAt: -1});
if (!contracts) {
    res.status(404).json({error: "aucune contrat trouvee"});
}
res.status(200).json(contracts); 
}
//get a single contract
const getContract = async (req, res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'aucune contrat correspondante'})
      }
    const contract = await contrat.findOne({_id: id})
    if (!contract) {
       return  res.status(404).json({error: "aucune contrat correspondante"});
    }
    res.status(200).json(contract);
}
//create a new contract
const createContract = async (req, res) => {
    const data = req.body;
    try {
        const contract = await new contrat(data).save();
              res.status(200).send(contract);
     } catch(error){
         res.status(400).json({error: error.message})
      }
     }
//delete a contract
const deleteContract = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'aucune contrat correspondante'})
      }
    const contract = await contrat.findOneAndDelete({_id: id});
    if (!contract) {
        return res.status(404).json({error: "aucune contrat correspondante"});
    }
    res.status(200).json(contract);
}

//update a contract
const updateContract = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'aucune contrat correspondante'})
    }

    const contract = await contrat.findOneAndUpdate({_id: id},{...req.body});
    if (!contract) {
       return res.status(404).json({error: "aucune contrat correspondante"});
    }
       
       res.status(200).json(contract);   
        
}



module.exports={
    getContracts,
    getContract,
    createContract,
    deleteContract,
    updateContract
}