const { Plot } = require('../models/index')

const getPlots = async (req, res) => {
    const plots = await Plot.find()

    res.render('plots', { plots })
}

const getPlot = async (req, res) => {
    const plot = await Plot.findById(req.params.id)

    res.send({ plot })
}

const updatePlot = async (req, res) => {
    await Plot.findByIdAndUpdate(
        req.params.id,
        { ...req.body }
    )

    res.send()
}

const postPlot = async (req, res) => {
    try {
        await new Plot({ address: req.body.address }).save()
    } catch (e) {
        console.log(e)
    }
    res.redirect('/admin/plots')
}

const deletePlot = async (req, res) => {
    await Plot.findByIdAndDelete(req.params.id)

    res.redirect('/admin/roles')
}

module.exports = {
    getPlots,
    getPlot,
    updatePlot,
    deletePlot,
    postPlot
}

