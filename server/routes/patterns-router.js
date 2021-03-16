const express = require('express')

const PatternCtrl = require('../controllers/patterns')

const router = express.Router()

router.post('/pattern', PatternCtrl.createPattern)
router.put('/pattern/:id', PatternCtrl.updatePattern)
router.delete('/pattern/:id', PatternCtrl.deletePattern)
router.get('/pattern/:id', PatternCtrl.getPatternById)
router.get('/patterns', PatternCtrl.getPatterns)

module.exports = router