const Pattern = require('../models/patterns')

createPattern = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a pattern',
        })
    }

    const pattern = new Pattern(body)

    if (!pattern) {
        return res.status(400).json({ success: false, error: err })
    }

    pattern
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: pattern._id,
                message: 'Pattern created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Pattern not created!',
            })
        })
}

updatePattern = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Pattern.findOne({ _id: req.params.id }, (err, pattern) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Pattern not found!',
            })
        }
        pattern.service = body.service
        pattern.pattern = body.pattern
        pattern
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: pattern._id,
                    message: 'Pattern updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Pattern not updated!',
                })
            })
    })
}

deletePattern = async (req, res) => {
    await Pattern.findOneAndDelete({ _id: req.params.id }, (err, pattern) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: pattern })
    }).catch(err => console.log(err))
}

getPatternById = async (req, res) => {
    await Pattern.findOne({ _id: req.params.id }, (err, pattern) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!pattern) {
            return res
                .status(404)
                .json({ success: false, error: `Pattern not found` })
        }
        return res.status(200).json({ success: true, data: pattern })
    }).catch(err => console.log(err))
}

getPatterns = async (req, res) => {
    await Pattern.find({}, (err, patterns) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: patterns })
    }).catch(err => console.log(err))
}

module.exports = {
    createPattern,
    updatePattern,
    deletePattern,
    getPatterns,
    getPatternById,
}