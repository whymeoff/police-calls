const express = require('express')

const callsController = require('../controllers/calls')

const router = express.Router()

router.get('/make', callsController.getMakeCallPage)
router.post('/make', callsController.postCall)
router.get('/', callsController.getCallsPage)
router.patch('/accept/:id', callsController.acceptCall)
router.post('/complete', callsController.completeCalls)
router.get('/report/:id', callsController.getReport)

module.exports = router