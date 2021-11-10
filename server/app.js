const express = require('express');

const app = express();
const port = 3002;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const cors = require('cors')

app.use(cors())

app.get('/', async function(req,res) {

    let dogs = await knex('dogs').select('*')
    res.json(dogs)

    // res.status(200).send({
    //     "dogs": "dogs"
    // });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
module.exports = app;
