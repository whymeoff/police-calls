const { Plot, Crew, Role, Staff } = require('../models/index')

const getStaff = async (req, res) => {
    const roles = Role.findAll()
    const plots = Plot.findAll()
    const crews = Crew.findAll()
    const staff = Staff.findAll({ include: [Role, Plot, Crew] })

    const data = await Promise.all([roles, plots, crews, staff])

    res.render('staff', { roles: data[0], plots: data[1], crews: data[2], staff: data[3] })
}

const getOneStaff = async (req, res) => {
    const staff = await Staff.findOne({
        where: {
            id: req.params.id
        }
    })

    res.send({ staff })
}

const updateStaff = async (req, res) => {
    await Staff.update(
        { ...req.body },
        { where: {
            id: req.params.id
        } }
    )

    res.send()
}

const postStaff = async (req, res) => {
    let { fullname, age, address, PlotId, CrewId, RoleId } = req.body

    age = parseInt(age)
    PlotId = parseInt(PlotId)
    CrewId = parseInt(CrewId)
    RoleId = parseInt(RoleId)

    await Staff.build({ fullname, age, address, PlotId, CrewId, RoleId }).save()

    res.redirect('/admin/staff')
}

const deleteStaff = async (req, res) => {
    await Staff.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/admin/staff')
}

module.exports = {
    getOneStaff,
    getStaff,
    deleteStaff,
    postStaff,
    updateStaff
}