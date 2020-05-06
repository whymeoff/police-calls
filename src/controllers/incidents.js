const { IncidentType } = require('../models/index')

const getIncidents = async (req, res) => {
    const incidents = await IncidentType.find()

    res.render('incidentTypes', { incidents })
}

const getIncident = async (req, res) => {
    const incident = await IncidentType.findById(req.params.id)

    res.send({ incident })
}

const updateIncident = async (req, res) => {
    await IncidentType.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
    )

    res.send()
}

const postIncident = async (req, res) => {
    try {
        await new IncidentType({ name: req.body.name, description: req.body.description }).save()
    } catch (e) {
        console.log(e)
    }
    res.redirect('/admin/incidents')
}

const deleteIncident = async (req, res) => {
    await IncidentType.findByIdAndDelete(req.params.id)

    res.redirect('/admin/incidents')
}

module.exports = {
    postIncident,
    getIncident,
    getIncidents,
    updateIncident,
    deleteIncident
}