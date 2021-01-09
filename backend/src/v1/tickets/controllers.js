const { Ticket } = require('../../../utils/models/Ticket');

exports.getAllTickets = async (req, res) => {
    Ticket.find({}, (err, tickets) => {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(tickets);
    }).exec();
}

exports.getATicket = async (req, res) => {
    let { id } = req.params;
    Ticket.findById(id, (err, ticket) => {
        callback(err, ticket, res);
    }).exec();
};

exports.createATicket = async (req, res) => {
    Ticket.create(req.body).then((ticket) => {
        res.status(201).json(ticket.toJSON());
    }).catch(err => {
        res.status(400).json(err);
    });
};

exports.updateATicket = async (req, res) => {
    const { id } = req.params;
    Ticket.findByIdAndUpdate(id, req.body, { new: true }, (err, ticket) => {
        callback(err, ticket, res);
    }).exec();
};

exports.deleteATicket = async (req, res) => {
    const { id } = req.params;
    Ticket.findByIdAndDelete(id, { useFindAndModify: true }).exec().then(() => {
        res.status(200).send();
    }).catch((err) => {
        res.status(400).json(err);
    });
};

function callback (err, ticket, res) {
    if (!ticket) {
        return res.status(404).send();
    } else {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(ticket.toJSON());
    }
}