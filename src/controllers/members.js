const { Member } = require('../models/index')

const getMembers = async (req, res) => {
    const members = await Member.find()

    res.render('members', { members })
}

const getMember = async (req, res) => {
    const member = await Member.findById(req.params.id)

    res.send({ member })
}

const updateMember = async (req, res) => {
    await Member.findByIdAndUpdate(
        req.params.id,
        { ...req.body }
    )

    res.send()
}

const postMember = async (req, res) => {
    await new Member({ ...req.body }).save()

    res.redirect('/admin/members')
}

const deleteMember = async (req, res) => {
    await Member.findByIdAndDelete(req.params.id)

    res.redirect('/admin/members')
}

module.exports = {
    getMember,
    getMembers,
    postMember,
    updateMember,
    deleteMember
}