const { Type_abonner } = require('../models');

// Create a new Type_abonner record
const createTypeAbonner = async (req, res) => {
  const { libelle, description, tarif, duree, IDadmin } = req.body;

  try {
    const newTypeAbonner = await Type_abonner.create({
      libelle,
      description,
      tarif,
      duree,
      IDadmin
    });

    return res.status(201).json({
      message: "Type_abonner created successfully",
      type_abonner: newTypeAbonner,
    });
  } catch (error) {
    console.error('Error creating Type_abonner:', error);
    return res.status(500).json({
      error: "An error occurred while creating the Type_abonner",
    });
  }
};

// Get all Type_abonner records
const getAllTypeAbonners = async (req, res) => {
  try {
    const typeAbonners = await Type_abonner.findAll();
    return res.status(200).json(typeAbonners);
  } catch (error) {
    console.error('Error fetching Type_abonners:', error);
    return res.status(500).json({
      error: "An error occurred while fetching Type_abonners",
    });
  }
};

// Get a Type_abonner record by primary key
const getTypeAbonnerByPk = async (req, res) => {
  const { id } = req.params; // assuming `id` is the primary key

  try {
    const typeAbonner = await Type_abonner.findByPk(id);
    if (!typeAbonner) {
      return res.status(404).json({
        error: "Type_abonner not found",
      });
    }
    return res.status(200).json(typeAbonner);
  } catch (error) {
    console.error('Error fetching Type_abonner:', error);
    return res.status(500).json({
      error: "An error occurred while fetching the Type_abonner",
    });
  }
};

// Update a Type_abonner record
const updateTypeAbonner = async (req, res) => {
  const { id } = req.params; // assuming `id` is the primary key
  const { libelle, description, tarif, duree } = req.body;

  try {
    const typeAbonner = await Type_abonner.findByPk(id);
    if (!typeAbonner) {
      return res.status(404).json({
        error: "Type_abonner not found",
      });
    }

    // Update fields except IDadmin
    typeAbonner.libelle = libelle || typeAbonner.libelle;
    typeAbonner.description = description || typeAbonner.description;
    typeAbonner.tarif = tarif || typeAbonner.tarif;
    typeAbonner.duree = duree || typeAbonner.duree;

    await typeAbonner.save();
    return res.status(200).json({
      message: "Type_abonner updated successfully",
      type_abonner: typeAbonner,
    });
  } catch (error) {
    console.error('Error updating Type_abonner:', error);
    return res.status(500).json({
      error: "An error occurred while updating the Type_abonner",
    });
  }
};

// Delete a Type_abonner record
const deleteTypeAbonner = async (req, res) => {
  const { id } = req.params; // assuming `id` is the primary key

  try {
    const typeAbonner = await Type_abonner.findByPk(id);
    if (!typeAbonner) {
      return res.status(404).json({
        error: "Type_abonner not found",
      });
    }
    await typeAbonner.destroy();
    return res.status(200).json({
      message: "Type_abonner deleted successfully",
    });
  } catch (error) {
    console.error('Error deleting Type_abonner:', error);
    return res.status(500).json({
      error: "An error occurred while deleting the Type_abonner",
    });
  }
};

module.exports = {
  createTypeAbonner,
  getAllTypeAbonners,
  getTypeAbonnerByPk,
  updateTypeAbonner,
  deleteTypeAbonner
};
