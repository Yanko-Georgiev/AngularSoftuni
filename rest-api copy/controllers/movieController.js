const { movieModel } = require('../models');

function getMovies(req, res, next) {
    movieModel.find()
        .populate('userId')
        .then(movies => res.json(movies))
        .catch(next);
}

function getMovie(req, res, next) {
    const { movieId } = req.params;

    movieModel.findById(movieId)
        .populate({
            path : 'likes',
            populate : {
              path : 'userId'
            }
          })
        .then(movie => res.json(movie))
        .catch(next);
}

function createMovie(req, res, next) {
    const { movieName, description, img, topCast} = req.body;
    const { _id: userId } = req.user;

    movieModel.create({ movieName, userId, likes:[], img, description, topCast})
        .then(movie => {
         res.status(200).json(movie)
        })
        .catch(next);
}
function editMovie(req, res, next) {
    const { movieId } = req.params;
    const { movieName, description, img} = req.body;

    movieModel.findOneAndUpdate({_id: movieId}, {movieName, description, img},{new:true})
    .then(updatedMovie => {
        if (updatedMovie) {
            res.status(200).json(updatedMovie);
        }
        else {
            res.status(401).json({ message: `Not allowed!` });
        }
    })
    .catch(next);
}
function deleteMovie(req, res, next) {
    const { movieId } = req.params;
    const { _id: userId } = req.user;
    Promise.all([
        movieModel.findOneAndDelete({ _id: movieId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { movies: movieId } }),
    ])
    .then(deletedMovie => {
        if (deletedMovie) {
            res.status(200).json(deletedMovie);
        }
        else {
            res.status(401).json({ message: `Not allowed!` });
        }
    })
    .catch(next);
}

function like(req, res, next) {
    const { movieId } = req.params.movieId;
    const { _id: userId } = req.user;

    console.log('like')

    movieModel.updateOne({ _id: movieId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getMovies,
    editMovie,
    deleteMovie,
    createMovie,
    getMovie,
    like
}
