const { Plot, Crew, Role, Staff } = require('../models/index')

const getStaff = async (req, res) => {
    const roles = Role.find()
    const plots = Plot.find()
    const crews = Crew.find()
    const staff = Staff.find()
        .populate('crew')
        .populate('role')
        .populate('plot')

    const data = await Promise.all([roles, plots, crews, staff])

    res.render('staff', { roles: data[0], plots: data[1], crews: data[2], staff: data[3] })
}

const getOneStaff = async (req, res) => {
    const staff = await Staff.findById(req.params.id)

    res.send({ staff })
}

const updateStaff = async (req, res) => {
    await Staff.findByIdAndUpdate(
        req.params.id,
        { ...req.body }
    )

    res.send()
}

const postStaff = async (req, res) => {
    let { fullname, age, address, plot, crew, role } = req.body

    await new Staff({ fullname, age, address, plot, crew, role }).save()

    res.redirect('/admin/staff')
}

const deleteStaff = async (req, res) => {
    await Staff.findByIdAndDelete(req.params.id)

    res.redirect('/admin/staff')
}

module.exports = {
    getOneStaff,
    getStaff,
    deleteStaff,
    postStaff,
    updateStaff
}