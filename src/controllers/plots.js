const { Plot } = require('../models/index')

const getPlots = async (req, res) => {
    const plots = await Plot.findAll()

    res.render('plots', { plots })
}

const getPlot = async (req, res) => {
    const plot = await Plot.findOne({
        where: {
            id: req.params.id
        }
    })

    res.send({ plot })
}

const updatePlot = async (req, res) => {
    await Plot.update(
        { ...req.body },
        { where: {
            id: req.params.id
        } }
    )

    res.send()
}

const postPlot = async (req, res) => {
    try {
        await Plot.build({ address: req.body.address }).save()
    } catch (e) {
        console.log(e)
    }
    res.redirect('/admin/plots')
}

const deletePlot = async (req, res) => {
    await Plot.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/admin/roles')
}

module.exports = {
    getPlots,
    getPlot,
    updatePlot,
    deletePlot,
    postPlot
}

