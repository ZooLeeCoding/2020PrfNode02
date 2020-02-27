const router = require('express').Router();

router.route('/pelda').get((req, res) => {
    return res.status(200).send('igen, ez egy pelda');
}).post((req, res) => {
    return res.status(500).send('Ezt még nem implementáltuk');
}).delete((req, res) => {
    return res.status(404).send('Még nincs mit törölni');
})

module.exports = router;