const { Crew, Car } = require('../models/index')

const getCrews = async (req, res) => {
    const crews = await Crew.find()
        .populate('car')
    const cars = await Car.find()
    res.render('crews', { crews, cars })
}

const getCrew = async (req, res) => {
    const crew = await Crew.findById(req.params.id)

    res.send({ crew })
}

const updateCrew = async (req, res) => {
    await Crew.findByIdAndUpdate(
        req.params.id,
        { ...req.body }
    )

    res.send()
}

const postCrew = async (req, res) => {
    let { crewName, car } = req.body

    await new Crew({ crewName, car }).save()

    res.redirect('/admin/crews')
}

const deleteCrew = async (req, res) => {
    await Crew.findByIdAndDelete(req.params.id)

    res.redirect('/admin/crews')
}

module.exports = {
    getCrew,
    getCrews,
    updateCrew,
    deleteCrew,
    postCrew
}