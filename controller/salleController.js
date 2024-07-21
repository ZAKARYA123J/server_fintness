const { Salle } = require('../models');

// Create a new Salle record
const createsalle = async (req, res) => {
  const { nom, adress, codepostal, ville, IDadmin } = req.body;
  try {
    const salle = await Salle.create({
      NomS: nom,
      AdresseS: adress,
      CodePostalS: codepostal,
      VilleS: ville,
      IDadmin
    });
    res.status(201).json({ message: "Salle created successfully", salle });
  } catch (error) {
    console.error('Error creating Salle:', error);
    res.status(500).json({ error: "An error occurred while creating the Salle" });
  }
};

// Get all Salle records
const getAllSalles = async (req, res) => {
  try {
    const salles = await Salle.findAll();
    res.status(200).json(salles);
  } catch (error) {
    console.error('Error fetching Salles:', error);
    res.status(500).json({ error: "An error occurred while fetching the Salles" });
  }
};

// Get a Salle record by primary key
const getSalleByPk = async (req, res) => {
  const { id } = req.params; // assuming `id` is the primary key
  try {
    const salle = await Salle.findByPk(id);
    if (!salle) {
      return res.status(404).json({ error: "Salle not found" });
    }
    res.status(200).json(salle);
  } catch (error) {
    console.error('Error fetching Salle:', error);
    res.status(500).json({ error: "An error occurred while fetching the Salle" });
  }
};

// Update a Salle record
const updateSalle = async (req, res) => {
  const { id } = req.params; // assuming `id` is the primary key
  const { nom, adress, codepostal, ville } = req.body;
  try {
    const salle = await Salle.findByPk(id);
    if (!salle) {
      return res.status(404).json({ error: "Salle not found" });
    }

    salle.NomS = nom || salle.NomS;
    salle.AdresseS = adress || salle.AdresseS;
    salle.CodePostalS = codepostal || salle.CodePostalS;
    salle.VilleS = ville || salle.VilleS;

    await salle.save();
    res.status(200).json({ message: "Salle updated successfully", salle });
  } catch (error) {
    console.error('Error updating Salle:', error);
    res.status(500).json({ error: "An error occurred while updating the Salle" });
  }
};

// Delete a Salle record
const deleteSalle = async (req, res) => {
  const { id } = req.params; // assuming `id` is the primary key
  try {
    const salle = await Salle.findByPk(id);
    if (!salle) {
      return res.status(404).json({ error: "Salle not found" });
    }
    await salle.destroy();
    res.status(200).json({ message: "Salle deleted successfully" });
  } catch (error) {
    console.error('Error deleting Salle:', error);
    res.status(500).json({ error: "An error occurred while deleting the Salle" });
  }
};

module.exports = { createsalle, getAllSalles, getSalleByPk, updateSalle, deleteSalle };
