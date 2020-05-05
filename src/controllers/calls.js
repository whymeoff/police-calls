const { Call, Crew, IncidentMember, CallIncident, IncidentType, Member } = require('../models/index')

const getMakeCallPage = (req, res) => {
    res.render('makeCall')
}

const postCall = async (req, res) => {
    await Call.build({ ...req.body }).save()

    res.redirect('/')
}

const acceptCall = async (req, res) => {
    console.log('here')
    await Call.update(
        { status: 'accepted', CrewId: req.body.CrewId },
        { where: {
            id: req.params.id 
        } }
    )

    res.redirect('/calls')
}

const getCallsPage = async (req, res) => {
    const promises = []

    promises.push(Call.findAll({
        where: {
            status: req.query.status || 'received'
        },
        include: Crew
    }))

    if (!req.query.status || req.query.status === 'received') {
        promises.push(Crew.findAll())
    }

    const data = await Promise.all(promises)

    res.render('calls', { calls: data[0], crews: data[1], status: req.query.status || 'received' })
}

const completeCalls = async (req, res) => {
    const { members, incidents, call } = req.body
    const promises = []

    members.map((el) => {
        promises.push(IncidentMember.build({ CallId: parseInt(call), MemberId: parseInt(el[0]), description: el[2] }).save())
    })

    incidents.map((el) => {
        promises.push(CallIncident.build({ CallId: parseInt(call), IncidentTypeId: parseInt(el) }).save())
    })

    promises.push(Call.update( 
        { status: 'completed' },
        { where: {
            id: call
        } })
    )

    try {
        await Promise.all(promises)
    } catch (e) {
        console.log(e)
    }

    res.send()
}

const getReport = async (req, res) => {
    const CallId = req.params.id

    const call = await Call.findOne({
        where: {
            id: CallId
        },
        include: [Member, IncidentType]
    })

    res.send({ call: call.toJSON() })
}

module.exports = {
    getMakeCallPage,
    getCallsPage,
    postCall,
    acceptCall,
    completeCalls,
    getReport
}