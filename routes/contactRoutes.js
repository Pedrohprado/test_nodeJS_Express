const express = require('express');
const router = express.Router();

router.route('/').get(async(req, res) => {
    try {
        res.status(200).json({message: 'Get all contacts'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;