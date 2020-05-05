const { IncidentType } = require('../models/index')

const getIncidents = async (req, res) => {
    const incidents = await IncidentType.findAll()

    res.render('incidentTypes', { incidents })
}

const getIncident = async (req, res) => {
    const incident = await IncidentType.findOne({
        where: {
            id: req.params.id
        }
    })

    res.send({ incident })
}

const updateIncident = async (req, res) => {
    await IncidentType.update(
        { ...req.body },
        { where: {
            id: req.params.id
        } }
    )

    res.send()
}

const postIncident = async (req, res) => {
    try {
        await IncidentType.build({ name: req.body.name, description: req.body.description }).save()
    } catch (e) {
        console.log(e)
    }
    res.redirect('/admin/incidents')
}

const deleteIncident = async (req, res) => {
    await IncidentType.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/admin/incidents')
}

module.exports = {
    postIncident,
    getIncident,
    getIncidents,
    updateIncident,
    deleteIncident
}