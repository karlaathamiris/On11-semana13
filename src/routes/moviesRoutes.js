const express = require('express')
const router = express.Router()

const controller = require('../controllers/moviesControllers')

router.post('/', controller.addMovie)
router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.patch('/:id', controller.refreshMovie)
router.delete('/:id', controller.deleteMovie)

module.exports = router