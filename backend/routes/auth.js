// Rutes users ---- host + /api/auth 

const { Router } = require('express');
const router = Router();

// router.get('/', (req, res) => {
//     console.log(`se requiere /`)
//     res.json({ 
//         ok:true 
//     })
// });

router.post('/register', (req, res) => {
    res.json({
        ok:true,
        msg:'register'
    })
});

router.post('/', (req, res) => {
    res.json({
        ok:true,
        msg:'login'
    })
});

router.post('/renew', (req, res) => {
    res.json({
        ok:true,
        msg:'validate'
    })
});

module.exports = router;