const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

const listCustomer = require('./routes/customer')


const port = 8800;
app.use(cors());


mongoose
    .connect(
        `mongodb+srv://ducduy2209:ducduy2209@cluster0.fgocw.mongodb.net/QuanLiThanhVien?retryWrites=true&w=majority`,
        {
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("😎 DB is running succesfully")
    })
    .catch(console.error)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/customer", listCustomer);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})