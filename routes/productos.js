// routes/productos.js
const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Crear un nuevo producto
router.post('/productos', async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

// Actualizar un producto por ID
router.put('/productos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (producto) {
      await producto.update(req.body);
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
});

module.exports = router;
