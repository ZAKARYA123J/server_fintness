// routes/membre.js
const express = require('express');
const router = express.Router();
const membreController = require('../controller/membreController');

// Route to create a member and inscribe them in a salle
router.post('/', membreController.createAndInscrireMembre);
router.put('/edit',membreController.updateMembre)
router.delete('/:NumM',membreController.deleteMembre)
router.get('/',membreController.displayMembres)
router.get('/:NumM',membreController.getMembreByNumM)

module.exports = router;
