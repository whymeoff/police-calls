const { Member } = require('../models/index')

const getMembers = async (req, res) => {
    const members = await Member.findAll()

    res.render('members', { members })
}

const getMember = async (req, res) => {
    const member = await Member.findOne({
        where: {
            id: req.params.id
        }
    })

    res.send({ member })
}

const updateMember = async (req, res) => {
    await Member.update(
        { ...req.body },
        { where: {
            id: req.params.id
        } }
    )

    res.send()
}

const postMember = async (req, res) => {
    await Member.build({ ...req.body }).save()

    res.redirect('/admin/members')
}

const deleteMember = async (req, res) => {
    await Member.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/admin/members')
}

module.exports = {
    getMember,
    getMembers,
    postMember,
    updateMember,
    deleteMember
}