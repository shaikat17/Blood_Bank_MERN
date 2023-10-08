const express = require('express')

const app = express()


// variables
const PORT = 3000


// routes
app.get('/', (req, res) => {
    res.json({'msg': 'Server Started'})
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})