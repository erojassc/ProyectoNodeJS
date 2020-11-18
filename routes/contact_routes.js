const {Router} = require('express');
const router = Router();

router.get('/get', (req, res)=>{
    const data = {
        "name":"fast",
        "title":"hello word"
    };
    res.json(data);
});

module.exports = router;