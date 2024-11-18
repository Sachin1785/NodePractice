const express = require('express');
const path = require('path')

const app = express()
const port = 5050



app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'sample.html'))
})

app.use(express.static('./public'))

app.all('*', (req, res) => {
    res.status(404)
    res.send('Page not found')
})


app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})