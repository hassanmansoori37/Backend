import express from 'express';

const app = express()
const port = 4002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/profile' ,(req, res) => {
    res.send({
        message: "hellouser",
        computer: "dell",
        water: "pakola",
        data: [1, 2, 3, 4, 5, 6]

    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// APIS

// GET
// POST
// PUT
// DELETE