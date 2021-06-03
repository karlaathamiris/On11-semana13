const express = require('express')
const router = express.Router()

const controller = require('../controllers/moviesControllers')

router.get('/', controller.listMovies)
router.post('/', router.creatMovie)
router.get('/:id', router.movie)
router.get('/:id', router.searchBody)
router.get('/:id', router.getDelete)

module.exports = router