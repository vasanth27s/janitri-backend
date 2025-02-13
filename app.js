require('dotenv').config();
const express = require('express');
const path = require("path");

const connectDB = require(path.join(__dirname, "Config/db"));
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./Routes/user');
const patientRoutes = require('./Routes/patient');

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to Janitri Backend API');
});

app.use('/user', userRoutes);
app.use('/patient', patientRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
