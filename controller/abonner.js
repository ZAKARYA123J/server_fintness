const { Abonner, Membre, Type_abonner, Admin } = require('../models'); // Assuming your models are correctly imported

const AbonnerController = {
  // Example method to get all subscriptions
  async getAllAbonners(req, res) {
    try {
      const abonners = await Abonner.findAll({
        include: [
          { model: Membre, as: 'membre' },
          { model: Type_abonner, as: 'type_abonnement' },
          { model: Admin } // If you want to include Admin details
        ]
      });
      res.json(abonners);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Example method to create a new subscription
  async createAbonner(req, res) {
    const { datedebut, datefin, NumM, IDadmin, NumT } = req.body;
    try {
      const newAbonner = await Abonner.create({
        datedebut,
        datefin,
        NumM,
        IDadmin,
        NumT
      });
      res.status(201).json(newAbonner);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create subscription' });
    }
  },

  // Example method to update a subscription
  async updateAbonner(req, res) {
    const { id } = req.params;
    const { datedebut, datefin, NumM, IDadmin, NumT } = req.body;
    try {
      const updatedAbonner = await Abonner.update({
        datedebut,
        datefin,
        NumM,
        IDadmin,
        NumT
      }, {
        where: { id }
      });
      res.json(updatedAbonner);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update subscription' });
    }
  },

  // Example method to delete a subscription
  async deleteAbonner(req, res) {
    const { id } = req.params;
    try {
      await Abonner.destroy({
        where: { id }
      });
      res.json({ message: 'Subscription deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete subscription' });
    }
  }
};

module.exports = AbonnerController;
