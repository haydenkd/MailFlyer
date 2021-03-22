// Add Flyer
(req, res) => {
    Flyer.create({
        owner_id: req.body.owner_id,
        content_id: req.body.content_id,
        start_date: req.body.start_date,
        stop_date: req.body.stop_date,
        freq_id: req.body.freq_id,
        active: req.body.active
    }).then(dbFlyer => {
        res.json(dbFlyer);
    });
}

// Read All Flyers
(req, res) => {
    Flyer.findAll({

    }).then(dbFlyer => {
        res.json(dbFlyer);
    });
}

// Read Flyer by ID
(req, res) => {
    Flyer.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbFlyer => {
        res.json(dbFlyer);
    });
}

// Update Content Type Description By ID
(req, res) => {
    Flyer.update({
        content_id: req.body.content_id,
        start_date: req.body.start_date,
        stop_date: req.body.stop_date,
        freq_id: req.body.freq_id,
        active: req.body.active
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(dbFlyer => {
        res.json(dbFlyer);
    });
}

// Delete Flyer by ID
(req, res) => {
    Flyer.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbFlyer => {
        res.json(dbFlyer);
    });
}