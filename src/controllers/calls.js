const { Call, Crew, IncidentMember, CallIncident, IncidentType, Member } = require('../models/index')

const getMakeCallPage = (req, res) => {
    res.render('makeCall')
}

const postCall = async (req, res) => {
    await new Call({ ...req.body }).save()

    res.redirect('/')
}

const acceptCall = async (req, res) => {
    await Call.findByIdAndUpdate(
        req.params.id,
        { status: 'accepted', crew: req.body.crew },
    )

    res.redirect('/calls')
}

const getCallsPage = async (req, res) => {
    const promises = []

    promises.push(Call.find({status: req.query.status || 'received' }).populate('crew'))

    if (!req.query.status || req.query.status === 'received') {
        promises.push(Crew.find())
    }

    const data = await Promise.all(promises)

    res.render('calls', { calls: data[0], crews: data[1], status: req.query.status || 'received' })
}

const completeCalls = async (req, res) => {
    const { members, incidents, call } = req.body

    await Call.findByIdAndUpdate( 
        call,
        { status: 'completed', incidents, members },
    )

    res.send()
}

const getReport = async (req, res) => {
    const CallId = req.params.id

    const call = await Call.findById(CallId)
        .populate('incidents')
        .populate('members.member')

    res.send({ call })
}

module.exports = {
    getMakeCallPage,
    getCallsPage,
    postCall,
    acceptCall,
    completeCalls,
    getReport
}