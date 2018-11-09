const express = require('express');
const ChirpStore = require('./chirpstore')
let router = express.Router();


router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if(id){
        res.json(ChirpStore.GetChirp(id));

    } else{
        res.json(ChirpStore.GetChirps());
    }
 
});

router.post('/', (req, res) => {
    ChirpStore.CreateChirp(req.body);
    res.sendStatus(200);
})

router.put('/:id', (req, res) => {
    ChirpStore.UpdateChirp(req.params.id, req.body);
    res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
    ChirpStore.DeleteChirp(req.params.id);
    res.sendStatus(200)
})


module.exports = router;