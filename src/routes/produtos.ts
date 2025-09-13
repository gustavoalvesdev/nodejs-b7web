import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({produtos: [
        {
            id: 2,
            name: 'Farinha Dona Benta',
            price: 13.34,
            qty: 12,
            min_qty: 5
        },
        {
            id: 7,
            name: 'Macarrão Renata Spaguetti',
            price: 3.54,
            qty: 20,
            min_qty: 9
        }

    ]})
});

router.get('/:id', (req, res) => {
    
    let produtos = [
        {
            id: 2,
            name: 'Farinha Dona Benta',
            price: 13.34,
            qty: 12,
            min_qty: 5
        },
        {
            id: 7,
            name: 'Macarrão Renata Spaguetti',
            price: 3.54,
            qty: 20,
            min_qty: 9
        }

    ];

    let id: number = parseInt(req.params.id);
    let produto = {};
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {

            produto = produtos[i];

        }
    }
    
    res.json(produto)
});


export default router;