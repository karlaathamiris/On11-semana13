const Movie = require('../models/movie')

const addMovie = async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        gender: req.body.gender,
        avaible_on: req.body.avaible_on,
        created_at: req.body.created_at
    })

    try {
        const newMovie = await movie.save()
        res.status(201).json(newMovie)
    }catch (err){
        res.status(400).json({
            message: err.message
        })
    }
}

const getAll = async (req, res) => {
    const movies = await Movie.find()
    res.status(200).json(movies)
}

const getOne = async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    
    if (movie == null){
        return res.status(404).json({
            messagem: 'Que pena, não temos esse filme em nosso banco de dados'
        })
    }
    res.json(movie)
}

const refreshMovie = async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id)
        if(movie == null){
            return res.status(404).json({
                message: 'Filme não encontrado. Tente outro id'
            })
        }

        if (req.body.title != null){
            movie.title = req.body.title
        }

        if (req.body.description != null){
            movie.description = req.body.description
        }
        
        if (req.body.gender != null){
            movie.gender = req.body.gender
        }

        if (req.body.avaible_on != null){
            movie.avaible_on = req.body.avaible_on
        }

        if (req.body.created_at != null){
            movie.created_at = req.body.created_at
        }

        const movieRefresh = await movie.save()
        res.status(200).json(movieRefresh)
    
    }catch (err){
        res.status(500).json({
            message: err.message
        })
    }
}

const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie == null) {
        return res.status(404).json({ message: 'filme não encontrado!'})
        }
    
        await movie.remove()
        res.json({ message: 'filme deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
}

module.exports = {
    addMovie,
    getAll,
    getOne,
    refreshMovie,
    deleteMovie
}