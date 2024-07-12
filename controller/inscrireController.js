const { where } = require('sequelize');
const { Inscrire, Membre, Salle } = require('../models');

// Create a new Inscrire record
const createInscrire = async (req, res) => {
  const { NumM, NumS } = req.body;
  try {
    const existeinscrire=await Inscrire.findOne({where:{NumM}})
    const existeNumM=await Membre.findOne({where:{NumM}})
    const exiqtzNums=await Salle.findOne({where:{NumS}})
    if(!exiqtzNums || !existeNumM){
      return res.status(200).json({mesage:'not found'})
    }
    if(existeinscrire){
      return res.status(400).json({ error: "NumM already has an inscrire record" });
    }
    const inscrire = await Inscrire.create({ NumM, NumS });
    return res.status(201).json(inscrire);
  } catch (error) {
    console.error('Error creating inscrire:', error);
    return res.status(500).json({ error: "An error occurred while creating the inscrire" });
  }
};

// Get all Inscrire records
const getAllInscrire = async (req, res) => {
  try {
    const inscrire = await Inscrire.findAll({
      include: [
        { model: Membre, as: 'Membre' },
        { model: Salle, as: 'Salle' }
      ]
    });
    return res.status(200).json(inscrire);
  } catch (error) {
    console.error('Error fetching inscrire:', error);
    return res.status(500).json({ error: "An error occurred while fetching the inscrire" });
  }
};

// Get an Inscrire record by primary key
const getInscrireByPk = async (req, res) => {
  const { NumM } = req.params;
  try {
    const inscrire = await Inscrire.findByPk(NumM, {
      include: [
        { model: Membre, as: 'Membre' },
        { model: Salle, as: 'Salle' }
      ]
    });
    if (!inscrire) {
      return res.status(404).json({ error: "Inscrire not found" });
    }
    return res.status(200).json(inscrire);
  } catch (error) {
    console.error('Error fetching inscrire:', error);
    return res.status(500).json({ error: "An error occurred while fetching the inscrire" });
  }
};

// Update an Inscrire record
const updateInscrire = async (req, res) => {
  const { NumM, NumS } = req.body;
  try {
    const inscrire = await Inscrire.findByPk(NumM);
    if (!inscrire) {
      return res.status(404).json({ error: "Inscrire not found" });
    }
    inscrire.NumS = NumS;
    await inscrire.save();
    return res.status(200).json(inscrire);
  } catch (error) {
    console.error('Error updating inscrire:', error);
    return res.status(500).json({ error: "An error occurred while updating the inscrire" });
  }
};

// Delete an Inscrire record
const deleteInscrire = async (req, res) => {
  const { NumM } = req.params;
  try {
    const inscrire = await Inscrire.findByPk(NumM);
    if (!inscrire) {
      return res.status(404).json({ error: "Inscrire not found" });
    }
    await inscrire.destroy();
    return res.status(200).json({ message: "Inscrire deleted successfully" });
  } catch (error) {
    console.error('Error deleting inscrire:', error);
    return res.status(500).json({ error: "An error occurred while deleting the inscrire" });
  }
};

module.exports = { createInscrire, getAllInscrire, getInscrireByPk, updateInscrire, deleteInscrire };
