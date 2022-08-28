const { Router } = require('express');
const express = require('express');

const router = express.Router();
const {
    getContracts,
    getContract,
    createContract,
    deleteContract,
    updateContract
} = require('../controllers/contractController');


//GET all actual contracts 
router.get('/', getContracts );

//GET a single contract
router.get('/:id', getContract);

//POST a new contract

router.post('/',createContract);

//DELETE a contract
router.delete('/:id',deleteContract);

//UPDATE a contract
router.patch('/:id', updateContract);

module.exports= router;