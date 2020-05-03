const { Role } = require('../models/index.js')

const getRoles = async (req, res) => {
    const roles = await Role.findAll()

    res.render('roles', { roles })
}

const getRole = async (req, res) => {
    const role = await Role.findOne({
        where: {
            id: req.params.id
        }
    })

    res.send({ role })
}

const updateRole = async (req, res) => {
    await Role.update(
        { ...req.body },
        { where: {
            id: req.params.id
        } }
    )

    res.send()
}

const postRole = async (req, res) => {
    try {
        await Role.build({ rolename: req.body.rolename }).save()
    } catch (e) {
        console.log(e)
    }
    res.redirect('/admin/roles')
}

const deleteRole = async (req, res) => {
    await Role.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/admin/roles')
}

module.exports = {
    getRoles,
    getRole,
    updateRole,
    postRole,
    deleteRole
}