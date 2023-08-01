const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const mongoose = require("mongoose")

app.post("/", (req, res) => {
    console.log("kgjd");
})


app.listen(3001, () => {
    console.log("server strarted in port 3001");
})
