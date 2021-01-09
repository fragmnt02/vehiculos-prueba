const router = require('express').Router();
const ticketsRouter = require('./tickets/router');

router.use('/tickets',ticketsRouter);

// /api/v1/
router.get('/',(req,res)=>{
    res.status(200).send('Versión 1 de la API');
});

module.exports = router;