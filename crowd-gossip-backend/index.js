const express = require('express')
const mongoose = require('mongoose')
const app = express()

const server = app.listen(8000,()=>{
    console.log('app running on port ',8000)
})
