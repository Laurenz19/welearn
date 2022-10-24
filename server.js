const express = require('express')

const app = express()

app.use('/', express.static(path.join(__dirname, '/dist')))
app.get(/.*/, (req, res)=>{
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = 8080
app.listen(port)

console.log(`app listen on port ${port}`)