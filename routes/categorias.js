// routes/categorias.js
const express = require('express');
const router = express.Router();
const CategoriaProducto = require('../models/categoriaProducto');

// Crear una nueva categoría
router.post('/categorias', async (req, res) => {
  try {
    const categoria = await CategoriaProducto.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
});

// Actualizar una categoría por ID
router.put('/categorias/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await CategoriaProducto.findByPk(id);
    if (categoria) {
      await categoria.update(req.body);
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
});

module.exports = router;
