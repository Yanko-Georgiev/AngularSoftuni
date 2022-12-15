const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { movieController} = require('../controllers');

// middleware that is specific to this router

router.get('/', movieController.getMovies);
router.post('/', auth(), movieController.createMovie);
router.put('/:movieId', auth(), movieController.editMovie);
router.delete('/:movieId',auth(), movieController.deleteMovie);
router.put('/:movieId/like',auth(), movieController.like);

router.get('/:movieId', movieController.getMovie);

// router.get('/my-trips/:id/reservations', auth(), movieController.getReservations);

module.exports = router