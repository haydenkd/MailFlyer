// Add Recipient
(req, res) => {
    Recipient.create({
        flyer_id: req.body.flyer_id,
        recipient_id: req.body.recipient_id
    }).then(dbRecipient => {
        res.json(dbRecipient);
    });
}

// Read All Recipients
(req, res) => {
    Recipient.findAll({

    }).then(dbRecipient => {
        res.json(dbRecipient);
    });
}

// Read Recipients by FLYER_ID
(req, res) => {
    Recipient.findAll({
        where: {
            flyer_id: req.params.flyer_id
        }
    }).then(dbRecipient => {
        res.json(dbRecipient);
    });
}

// Read Recipient by ID
(req, res) => {
    Recipient.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbRecipient => {
        res.json(dbRecipient);
    });
}

// Delete Recipient by RECIPIENT_ID and FLYER_ID
(req, res) => {
    Recipient.destroy({
        where: {
            flyer_id: req.params.flyer_id,
            recipient_id: req.params.recipient_id
        }
    }).then(dbRecipient => {
        res.json(dbRecipient);
    });
}