// Create User
(req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    }).then(dbUser => {
        res.json(dbUser);
    });
}

// Delete User by ID
(req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbUser => {
        res.json(dbUser);
    });
}

// Find User Email by ID
(req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    }).then(dbUser => {
        res.json(dbUser);
    });
}

// Find User/Recipient ID by email
(req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            email: req.params.email
        }
    }).then(dbUser => {
        res.json(dbUser);
    });
}

// Update User Password by User ID
(req, res) => {
    User.update({
        password: req.body.password
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(dbUser => {
        res.json(dbUser);
    });
}