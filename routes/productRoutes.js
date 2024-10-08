const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.get('/products', productController.getProducts);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

