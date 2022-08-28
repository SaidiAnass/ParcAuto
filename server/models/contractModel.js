const  mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const ContractSchema = new mongoose.Schema({
   //voiture:
    marque: { type: String, required: true} ,
    immatriculation:{ type: String, required: true} ,
    bariole: { type: Boolean} ,
    typeVehicule : { type: String} ,
    numeroChassis: { type: String, required: true} ,
    dateMiseEnCirculation: { type: String} ,
    puissanceFiscale: { type: Number,} ,
    couleur: { type: String, } ,
    codeRadio: { type: String, } ,
    refPneus: { type: String, } ,
    echeanceVisiteTechnique: { type: String, required: true} ,
    assuranceContractEnCours: { type: String,required: true } ,
    vignette: { type: String, required: true} ,
    ww: { type: String, required: true} ,
    nombreDeCles: { type: Number, required: true } ,
    RecoAttrVehicule: { type: String, } ,
    cartesVerte: { type: String, } ,
    
    //conducteur:
    nom: { type: String, required: true} ,
    prenom: { type: String,required: true } ,
    matricule: { type: String,required: true }  ,
    grade: { type: String, } ,
    departement: { type: String, } ,
    filiale: { type: String, required: true} ,
    numTagJawaz: { type: String, } ,
    plafondJawaz: { type: Number, }  ,
    numeroCarteCarburant: { type: String, } ,
    dotationCarteCarburant: { type: Number, } ,
    expirationCarteCarburant: { type: String, } ,

    //ss-contrat:
    prestataire: { type: String, required: true}  ,
    utilisation: { type: String,required: true } ,
    dateDebut: { type: String, required: true } ,
    dateFin: { type: String, required: true} ,
    montant: { type: Number, required: true} ,
    // -----------------------
    voitureId: { type: Number, required: true} ,
    conducteurId: { type: Number, required: true} ,
    // -----------------------
    numeroParc: { type: String, required: true} ,
    annee: { type: Number, required: true} ,
    A_O_N: { type: String, required: true} ,
    numberoContract: { type: String,required: true } ,
    referenceParcContractLoueur: { type: String,required: true } ,
    duree: { type: String, required: true} ,
    montantMensuelHT: { type: Number, required: true } ,
    Montant_TTC: { type: Number, required: true} ,
    montantMarcheHT: { type: Number,required: true } ,
    montantFranchiseHT: { type: Number, required: true} ,
    remiseAccordee: { type: Number, required: true} ,
    KM_limit: { type: Number,required: true } ,
    KM_plus: { type: Number, required: true} ,
    KM_moins: { type: Number, required: true} ,
    echeanceDeCirculation: { type: String,required: true } ,
    DatePrevueRestitution: { type: String, required: true} ,
    DateEffectiveRestitution: { type: String,required: true } ,
    KM_dateRetour:{ type: Number, required: true}  ,
    contractEchu_enCours: { type: String,required: true } ,
   
}, {timestamps: true});

const contrat = mongoose.model('contrat',ContractSchema);

module.exports = contrat;
