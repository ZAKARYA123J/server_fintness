const { Inscrire, Membre, Salle, Admin } = require('../models');

// Create a new Inscrire record
const createInscrire = async (req, res) => {
  const { NumM, NumS, IDadmin } = req.body;
  try {
    const existeInscrire = await Inscrire.findOne({ where: { NumM } });
    const existeNumM = await Membre.findOne({ where: { NumM } });
    const existeNumS = await Salle.findOne({ where: { NumS } });

    if (!existeNumS || !existeNumM) {
      return res.status(404).json({ message: 'Membre or Salle not found' });
    }

    if (existeInscrire) {
      return res.status(400).json({ error: 'NumM already has an Inscrire record' });
    }

    const inscrire = await Inscrire.create({ NumM, NumS, IDadmin });
    return res.status(201).json(inscrire);
  } catch (error) {
    console.error('Error creating Inscrire:', error);
    return res.status(500).json({ error: 'An error occurred while creating the Inscrire' });
  }
};

// Get all Inscrire records
const getAllInscrire = async (req, res) => {
  try {
    const inscrire = await Inscrire.findAll({
      include: [
        { model: Membre, as: 'Membre' },
        { model: Salle, as: 'Salle' },
        { model: Admin, as: 'Admin' }
      ]
    });
    return res.status(200).json(inscrire);
  } catch (error) {
    console.error('Error fetching Inscrire:', error);
    return res.status(500).json({ error: 'An error occurred while fetching the Inscrire' });
  }
};

// Get an Inscrire record by primary key
const getInscrireByPk = async (req, res) => {
  const { NumM } = req.params;
  try {
    const inscrire = await Inscrire.findOne({
      where: { NumM },
      include: [
        { model: Membre, as: 'Membre' },
        { model: Salle, as: 'Salle' },
        { model: Admin, as: 'Admin' }
      ]
    });
    if (!inscrire) {
      return res.status(404).json({ error: 'Inscrire not found' });
    }
    return res.status(200).json(inscrire);
  } catch (error) {
    console.error('Error fetching Inscrire:', error);
    return res.status(500).json({ error: 'An error occurred while fetching the Inscrire' });
  }
};

// Update an Inscrire record
const updateInscrire = async (req, res) => {
  const { NumM, NumS } = req.body;
  try {
    const inscrire = await Inscrire.findOne({ where: { NumM } });
    if (!inscrire) {
      return res.status(404).json({ error: 'Inscrire not found' });
    }
    inscrire.NumS = NumS;
    await inscrire.save();
    return res.status(200).json(inscrire);
  } catch (error) {
    console.error('Error updating Inscrire:', error);
    return res.status(500).json({ error: 'An error occurred while updating the Inscrire' });
  }
};

// Delete an Inscrire record
const deleteInscrire = async (req, res) => {
  const { NumM } = req.params;
  try {
    const inscrire = await Inscrire.findOne({ where: { NumM } });
    if (!inscrire) {
      return res.status(404).json({ error: 'Inscrire not found' });
    }
    await inscrire.destroy();
    return res.status(200).json({ message: 'Inscrire deleted successfully' });
  } catch (error) {
    console.error('Error deleting Inscrire:', error);
    return res.status(500).json({ error: 'An error occurred while deleting the Inscrire' });
  }
};

module.exports = { createInscrire, getAllInscrire, getInscrireByPk, updateInscrire, deleteInscrire };
