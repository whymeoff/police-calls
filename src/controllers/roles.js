const { Role } = require('../models/index.js')

const getRoles = async (req, res) => {
    const roles = await Role.find()

    res.render('roles', { roles })
}

const getRole = async (req, res) => {
    const role = await Role.findById(req.params.id)

    res.send({ role })
}

const updateRole = async (req, res) => {
    await Role.findByIdAndUpdate(
        req.params.id,
        { ...req.body }
    )

    res.send()
}

const postRole = async (req, res) => {
    try {
        await new Role({ rolename: req.body.rolename }).save()
    } catch (e) {
        console.log(e)
    }
    res.redirect('/admin/roles')
}

const deleteRole = async (req, res) => {
    await Role.findByIdAndDelete(req.params.id)

    res.redirect('/admin/roles')
}

module.exports = {
    getRoles,
    getRole,
    updateRole,
    postRole,
    deleteRole
}