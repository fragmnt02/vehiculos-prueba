const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
/*
    GET tickets
    GET tickets/:id
    POST tickets
    PUT tickets/:id
    DELETE tickets/:id
*/

// /api/v1/tickets
router.route('/')
    .get(controllers.getAllTickets)
    .post(controllers.createATicket);

// /api/v1/tickets/:id
router.route('/:id')
    .get(controllers.getATicket)
    .put(controllers.updateATicket)
    .delete(controllers.deleteATicket);

module.exports = router;