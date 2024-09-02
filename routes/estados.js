// routes/estados.js
const express = require('express');
const router = express.Router();
const Estado = require('../models/estado');

// Crear un nuevo estado
router.post('/estados', async (req, res) => {
  try {
    const estado = await Estado.create(req.body);
    res.status(201).json(estado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el estado' });
  }
});

// Actualizar un estado por ID
router.put('/estados/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await Estado.findByPk(id);
    if (estado) {
      await estado.update(req.body);
      res.status(200).json(estado);
    } else {
      res.status(404).json({ error: 'Estado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el estado' });
  }
});

module.exports = router;
