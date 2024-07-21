
const { Type_abonner } = require('../models');

const createTypeAbonner = async (req, res) => {
    const { libelle, description, tarif, duree,IDadmin } = req.body;
  
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
module.exports={createTypeAbonner}