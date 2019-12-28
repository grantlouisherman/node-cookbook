const express = require('express')
const app = express()
const past = require('./past')
const future = require('./future')

app.get('/:age', (req,res) => {
    const { params } = req
    res.send(past(params.age, 10)+future(params.age,10))
})


app.listen(3000, () => { 
    console.log("On PORT 3000")
})
