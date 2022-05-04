const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paletas.controller');

router.get('/all-paletas', paletasController.findPaletasController);
router.get('/one-paleta/:id', paletasController.findPaletaByIdController);
router.post('/create-paleta', paletasController.createPaletaController);
router.put('/update-paleta/:id', paletasController.updatePaletaController);
router.delete('/delete-paleta/:id', paletasController.deletePaletaController);

module.exports = router;
