const express = require('express')
const logger = require('./logger')

const app = express()
const port = 5000

const {students} = require('./student')

app.use(logger)

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/students">Click me</a>')
})

app.get('/students', (req, res) => {
    res.json(students)
})

app.get('/students/:studentID', (req, res) => {
    const {studentID} = req.params
    const singleStudent = students.find((student) => student.id == studentID)

    if (!singleStudent) {
        return res.status(404).send("Student does not exist")
    } else {
        return res.json(singleStudent)
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})