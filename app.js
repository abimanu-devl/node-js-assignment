const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/dbConnection');
const router = require('./routes/todoitem.api.js');

dotenv.config();
const app = express();

// Connect Database
connectDB();

const port = process.env.PORT;

app.use(express.json());

//todo api routes
app.use('/api/todo',router);

//check route is working
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome to the homepage",
    });
})

app.listen(port, () => {
    console.log(`Server is Running in Port ${port}`);
})




