const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.controller.js');
const checkValid = require('../middleware/validation.js');

router.post('/',checkValid,controller.createNewItem);
router.put('/:id',checkValid,controller.updateItem);
router.get('/',controller.getAllItem);
router.delete('/:id',controller.deleteItem);
router.get('/v1',controller.searchByKeyword);
router.get('/v2',controller.filterByProprity);
router.get('/v3',controller.filterByColor);



module.exports = router;