const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/tasks', (req, res) => {
    mysqlConnection.query('SELECT * FROM task', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


router.get('/task/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM task WHERE ID = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


router.delete('/task/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM task WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'task Deleted' });
        } else {
            console.log(err);
        }
    });
});


router.post('/task', (req, res) => {
    mysqlConnection.query('INSERT INTO task set ?', [req.body], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'task Saved' });
        } else {
            console.log(err);
        }
    });

});

router.put('/task/:id', (req, res) => {
    mysqlConnection.query('UPDATE task set ?', [req.body], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'task Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;