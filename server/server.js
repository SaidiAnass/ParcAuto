require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const contractRoutes = require('./routes/contract');
const userRoutes = require('./routes/user');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
}))



app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/contract', contractRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port: ', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err);
    })


