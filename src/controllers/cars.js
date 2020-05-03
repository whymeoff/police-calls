const { Plot, Car } = require('../models/index')

const getCars = async (req, res) => {
    const cars = Car.findAll({ include: Plot })
    const plots = Plot.findAll()

    const data = await Promise.all([cars, plots])

    res.render('cars', { cars: data[0], plots: data[1] })
}

const getCar = async (req, res) => {
    const car = await Car.findOne({
        where: {
            id: req.params.id
        }
    })

    res.send({ car })
}

const updateCar = async (req, res) => {
    await Car.update(
        { ...req.body },
        { where: {
            id: req.params.id
        } }
    )

    res.send()
}

const postCar = async (req, res) => {
    let { model, color, govnumber, PlotId } = req.body
    PlotId = parseInt(PlotId)

    await Car.build({ model, color, govnumber, PlotId }).save()

    res.redirect('/admin/cars')
}

const deleteCar = async (req, res) => {
    await Car.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/admin/cars')
}

module.exports = {
    getCar,
    getCars,
    updateCar,
    deleteCar,
    postCar
}