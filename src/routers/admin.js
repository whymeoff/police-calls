const express = require('express')

const rolesController = require('../controllers/roles')
const plotsController = require('../controllers/plots')
const incidentsController = require('../controllers/incidents')
const staffController = require('../controllers/staff')
const crewsController = require('../controllers/crews')
const carsController = require('../controllers/cars')

const router = express.Router()

// Roles
router.get('/roles', rolesController.getRoles)

router.get('/roles/:id', rolesController.getRole)

router.patch('/roles/:id', rolesController.updateRole)

router.post('/roles', rolesController.postRole)

router.delete('/roles/:id', rolesController.deleteRole)

// Plots
router.get('/plots', plotsController.getPlots)

router.get('/plots/:id', plotsController.getPlot)

router.patch('/plots/:id', plotsController.updatePlot)

router.post('/plots', plotsController.postPlot)

router.delete('/plots/:id', plotsController.deletePlot)

// Incidents
router.get('/incidents', incidentsController.getIncidents)

router.get('/incidents/:id', incidentsController.getIncident)

router.patch('/incidents/:id', incidentsController.updateIncident)

router.post('/incidents', incidentsController.postIncident)

router.delete('/incidents/:id', incidentsController.deleteIncident)

// Staff
router.get('/staff', staffController.getStaff)

router.get('/staff/:id', staffController.getOneStaff)

router.patch('/staff/:id', staffController.updateStaff)

router.post('/staff', staffController.postStaff)

router.delete('/staff/:id', staffController.deleteStaff)

// Crews
router.get('/crews', crewsController.getCrews)

router.get('/crews/:id', crewsController.getCrew)

router.patch('/crews/:id', crewsController.updateCrew)

router.post('/crews', crewsController.postCrew)

router.delete('/crews/:id', crewsController.deleteCrew)

// Cars
router.get('/cars', carsController.getCars)

router.get('/cars/:id', carsController.getCar)

router.patch('/cars/:id', carsController.updateCar)

router.post('/cars', carsController.postCar)

router.delete('/cars/:id', carsController.deleteCar)

module.exports = router