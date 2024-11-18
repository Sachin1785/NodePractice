const express = require('express')
const logger = require('./logger')

const app = express()
const port = 5000

app.use(logger)

app.get('/', (req, res)=>{
    res.json([
        {
            name: "wjasd",
            age: 69
        },
        {
            name: 'ajshdjhn',
            age: 420
        }
    ])
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})