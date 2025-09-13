import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({pong: true});
});


router.get('/', (req, res) => {

    let name: string = 'Gustavo';
    let age: number = 33;

    // retornar um json
    res.json({name, age});
});

export default router;