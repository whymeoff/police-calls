const { Plot, Car } = require('../models/index')

const getCars = async (req, res) => {
    const cars = Car.find({})
        .populate('plot')
    const plots = Plot.find()

    const data = await Promise.all([cars, plots])

    res.render('cars', { cars: data[0], plots: data[1] })
}

const getCar = async (req, res) => {
    const car = await Car.findById(req.params.id)

    res.send({ car })
}

const updateCar = async (req, res) => {
    await Car.findByIdAndUpdate(
        req.params.id,
        { ...req.body }
    )

    res.send()
}

const postCar = async (req, res) => {
    let { model, color, govnumber, plot } = req.body

    await new Car({ model, color, govnumber, plot }).save()

    res.redirect('/admin/cars')
}

const deleteCar = async (req, res) => {
    await Car.findByIdAndDelete(req.params.id)

    res.redirect('/admin/cars')
}

module.exports = {
    getCar,
    getCars,
    updateCar,
    deleteCar,
    postCar
}