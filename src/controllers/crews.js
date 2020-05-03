const { Crew, Car } = require('../models/index')

const getCrews = async (req, res) => {
    const crews = await Crew.findAll({ include: Car })
    const cars = await Car.findAll()
    res.render('crews', { crews, cars })
}

const getCrew = async (req, res) => {
    const crew = await Crew.findOne({
        where: {
            id: req.params.id
        }
    })

    res.send({ crew })
}

const updateCrew = async (req, res) => {
    await Crew.update(
        { ...req.body },
        { where: {
            id: req.params.id
        } }
    )

    res.send()
}

const postCrew = async (req, res) => {
    let { crewName, CarId } = req.body
    CarId = parseInt(CarId)

    await Crew.build({ crewName, CarId }).save()

    res.redirect('/admin/crews')
}

const deleteCrew = async (req, res) => {
    await Crew.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/admin/crews')
}

module.exports = {
    getCrew,
    getCrews,
    updateCrew,
    deleteCrew,
    postCrew
}