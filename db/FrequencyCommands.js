// Add Frequency
(req, res) => {
    Frequency.create({
        frequency: req.body.frequency,
    }).then(dbFrequency => {
        res.json(dbFrequency);
    });
}

// Read All Frequencies
(req, res) => {
    Frequency.findAll({

    }).then(dbFrequency => {
        res.json(dbFrequency);
    });
}

// Read Frequency by ID
(req, res) => {
    Frequency.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbFrequency => {
        res.json(dbFrequency);
    });
}

// Read ID by Frequency
(req, res) => {
    Frequency.findOne({
        where: {
            frequency: req.params.frequency
        }
    }).then(dbFrequency => {
        res.json(dbFrequency);
    });
}

// Delete Frequency by ID
(req, res) => {
    Frequency.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbFrequency => {
        res.json(dbFrequency);
    });
}