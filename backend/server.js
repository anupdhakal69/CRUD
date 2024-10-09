import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGODB_URI)
    .then(() =>{
        console.log('Connected to the database!');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch(error => console.log(error));

app.use("/api/user",userRoutes);
