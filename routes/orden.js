// routes/orden.js
const express = require('express');
const router = express.Router();
const Orden = require('../models/orden');

// Crear una nueva orden
router.post('/orden', async (req, res) => {
  try {
    const orden = await Orden.create(req.body);
    res.status(201).json(orden);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la orden' });
  }
});

// Actualizar una orden por ID
router.put('/orden/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const orden = await Orden.findByPk(id);
    if (orden) {
      await orden.update(req.body);
      res.status(200).json(orden);
    } else {
      res.status(404).json({ error: 'Orden no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la orden' });
  }
});

module.exports = router;
