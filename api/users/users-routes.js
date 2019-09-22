const router = require('express').Router();
const Users = require('./users-model.js');

router.get('/', (req, res) => {
    Users.getAll().then(users => {
        res.status(200).json(users);
    });
});

router.get('/:id', (req, res) => {
    const user_id = req.params.id;

    Users.getUser(user_id).then(user => {
        res.status(200).json(user);
    });
});

module.exports = router;
