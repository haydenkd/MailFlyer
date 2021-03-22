// Add Content Type
(req, res) => {
    ContentType.create({
        type: req.body.type,
        description: req.body.description
    }).then(dbContentType => {
        res.json(dbContentType);
    });
}

// Read All Content Types
(req, res) => {
    ContentType.findAll({

    }).then(dbContentType => {
        res.json(dbContentType);
    });
}

// Read Content Type by ID
(req, res) => {
    ContentType.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbContentType => {
        res.json(dbContentType);
    });
}

// Read ID by Content Type
(req, res) => {
    ContentType.findOne({
        where: {
            type: req.params.type
        }
    }).then(dbContentType => {
        res.json(dbContentType);
    });
}

// Update Content Type Description By ID
(req, res) => {
    ContentType.update({
        description: req.body.description
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(dbContentType => {
        res.json(dbContentType);
    });
}

// Delete Content Type
(req, res) => {
    ContentType.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbContentType => {
        res.json(dbContentType);
    });
}