const {Router} = require('express');
const router = Router();
const connection = require('../infrastructure/contact_infrastructure');

router.get('/get', (req, res)=>{
    connection.query('select * from contacts', (err,rows, fields) => {
        if (!err) {
            res.json(rows);            
        } else {
            console.log(err);
            res.status(500).json({error:"There was an error."});
        }
    });
});

router.get('/get/:id', (req, res)=>{
    const { id } = req.params;
    connection.query('select * from contacts where id = ?', [id], (err,rows, fields) => {
        if (!err) {
            res.json(rows);            
        } else {
            console.log(err);
            res.status(500).json({error:"There was an error."});
        }
    });
});

router.post('/post', (req,res) => {
 const {id, name, last, phone, email, isActive, timestamp} = req.body;
 if (id, name, last, phone, email, isActive, timestamp) {
     const querydata = `insert into contacts (id, name, last, phone, email, isActive, timestamp) values( ? , ? , ? , ? , ? , ? , ?)`;
        connection.query(querydata, [id, name, last, phone, email, isActive, timestamp], (err,rows, fields) => {
            if (!err) {
                res.json({status:"contact Insert"});            
            } else {
                console.log(err);
                res.status(500).json({error:"There was an error."});
            }
        });  
 } else {
     res.status(500).json({error:"There was an error."});
 }
});

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    connection.query('delete from contacts where id = ?', [id], (err,rows, fields) => {
        if (!err) {
            res.json({status:"contact Delete"});            
        } else {
            console.log(err);
            res.status(500).json({error:"There was an error."});
        }
    });
});

router.put('/put/:id', (req, res) => {
    const { id } = req.params;
    const { name, last, phone, email, isActive, timestamp} = req.body;
    if (name && last && phone && email && isActive && timestamp) {
        const querydata = `update contacts set name=? , last =? , phone =? , email =? , isActive =? , timestamp =? where id = ?`;
        connection.query(querydata, [name, last, phone, email, isActive, timestamp, id], (err,rows, fields) => {
            if (!err) {
                res.json({status:"contact Update"});            
            } else {
                console.log(err);
                res.status(500).json({error:"There was an error."});
            }
        });    
    } else {
        res.status(500).json({error:"There was an error."});
    }
    
});

module.exports = router;