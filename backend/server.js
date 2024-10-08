import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
    .then(() =>{
        console.log('Connected to the database!');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch(error => console.log(error));

app.get('/', (req, res) => {
  res.send('<b>Api working!</b>');
})

app.use("/api/user",userRoutes);
