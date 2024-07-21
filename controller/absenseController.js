const { Absence, Membre, Admin } = require('../models');

// Create a new Absence record
const createAbsence = async (req, res) => {
  const { dateAbsence, status, numM, IDadmin } = req.body;

  try {
    const newAbsence = await Absence.create({
      dateAbsence,
      status,
      numM,
      IDadmin
    });

    return res.status(201).json({
      message: "Absence created successfully",
      absence: newAbsence,
    });
  } catch (error) {
    console.error('Error creating Absence:', error);
    return res.status(500).json({
      error: "An error occurred while creating the Absence",
    });
  }
};

// Get all Absence records
const getAllAbsences = async (req, res) => {
  try {
    const absences = await Absence.findAll({
      include: [
        { model: Membre, as: 'Membre' },
        { model: Admin, as: 'Admin' }
      ]
    });
    return res.status(200).json(absences);
  } catch (error) {
    console.error('Error fetching Absences:', error);
    return res.status(500).json({
      error: "An error occurred while fetching Absences",
    });
  }
};

// Get an Absence record by primary key
const getAbsenceByPk = async (req, res) => {
  const { id } = req.params;

  try {
    const absence = await Absence.findByPk(id, {
      include: [
        { model: Membre, as: 'Membre' },
        { model: Admin, as: 'Admin' }
      ]
    });
    if (!absence) {
      return res.status(404).json({
        error: "Absence not found",
      });
    }
    return res.status(200).json(absence);
  } catch (error) {
    console.error('Error fetching Absence:', error);
    return res.status(500).json({
      error: "An error occurred while fetching the Absence",
    });
  }
};

// Update an Absence record
const updateAbsence = async (req, res) => {
  const { id } = req.params;
  const { dateAbsence, status, numM } = req.body;

  try {
    const absence = await Absence.findByPk(id);
    if (!absence) {
      return res.status(404).json({
        error: "Absence not found",
      });
    }

    // Update fields except IDadmin
    absence.dateAbsence = dateAbsence || absence.dateAbsence;
    absence.status = status || absence.status;
    absence.numM = numM || absence.numM;

    await absence.save();
    return res.status(200).json({
      message: "Absence updated successfully",
      absence,
    });
  } catch (error) {
    console.error('Error updating Absence:', error);
    return res.status(500).json({
      error: "An error occurred while updating the Absence",
    });
  }
};

// Delete an Absence record
const deleteAbsence = async (req, res) => {
  const { id } = req.params;

  try {
    const absence = await Absence.findByPk(id);
    if (!absence) {
      return res.status(404).json({
        error: "Absence not found",
      });
    }
    await absence.destroy();
    return res.status(200).json({
      message: "Absence deleted successfully",
    });
  } catch (error) {
    console.error('Error deleting Absence:', error);
    return res.status(500).json({
      error: "An error occurred while deleting the Absence",
    });
  }
};

module.exports = {
  createAbsence,
  getAllAbsences,
  getAbsenceByPk,
  updateAbsence,
  deleteAbsence
};
