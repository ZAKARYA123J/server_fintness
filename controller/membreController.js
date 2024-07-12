// controllers/membreController.js
const { Membre } = require('../models');
const membre = require('../models/membre');

const createAndInscrireMembre = async (req, res) => {
  const { nom, prenom, adresse, ville, dateDeNaissance } = req.body;

  try {
    // Check if the salle exists
 

    // Create the Membre
    const membre = await Membre.create({
      NomM: nom,
      PrenomM: prenom,
      AdresseM: adresse,
      VilleM: ville,
      DateDeNaissanceM: dateDeNaissance,
    });

    // Create the Inscrire record


    return res.status(201).json({
      message: 'Membre created  successfully',
      membre,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while creating  the membre' });
  }
};
const updateMembre = async (req, res) => {
  const { nom, prenom, adresse, ville, dateDeNaissance, NumM } = req.body;

  try {
    const membre = await Membre.findByPk(NumM);

    if (!membre) {
      return res.status(404).json({ error: 'Membre not found' });
    }

    membre.NomM = nom;
    membre.PrenomM = prenom;
    membre.AdressM = adresse;
    membre.VilleM = ville;
    membre.DateDeNaissanceM = dateDeNaissance;

    await membre.save();

    return res.status(200).json({ message: 'Membre updated successfully', membre });
  } catch (error) {
    console.error('Error updating membre:', error);
    return res.status(500).json({ error: 'An error occurred while updating the membre' });
  }
};

const deleteMembre = async (req, res) => {
  const { NumM } = req.params;

  try {
    const membre = await Membre.findByPk(NumM);

    if (!membre) {
      return res.status(404).json({ error: "Membre not found" });
    }

    await membre.destroy();
    return res.status(200).json({ message: "Membre deleted successfully" });
  } catch (error) {
    console.error('Error deleting membre:', error);
    return res.status(500).json({ error: "An error occurred while deleting the membre" });
  }
};
const displayMembres = async (req, res) => {
  try {
    const membres = await Membre.findAll();
    return res.status(200).json(membres);
  } catch (error) {
    console.error('Error fetching membres:', error);
    return res.status(500).json({ error: "An error occurred while fetching the membres" });
  }
};
const getMembreByNumM =async(req,res)=>{
  const {NumM}=req.params
  try{
      const member=await Membre.findByPk(NumM)
      if(!member){
       return res.status(500).json({message:"not found"})
      }
      res.status(200).json(member)
  }catch(error){
      console.log('error')
      res.status(404).json({error:"error "})
  }
}
module.exports = {
  createAndInscrireMembre,updateMembre,deleteMembre,displayMembres,getMembreByNumM
};
