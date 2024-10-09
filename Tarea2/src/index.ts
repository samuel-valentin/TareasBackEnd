import express from "express";
import { config } from "dotenv";
import mongoose, { connect } from "mongoose"; 

config();

import userRoutes from './routes/users';

const app = express ();
const port = process.env.PORT || 3000;
const dburl = process.env.DB_URL;

console.log("Mongo url:", dburl);

app.use(express.json());
app.use('/users', userRoutes);

connect(dburl as string).then(res => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });
}).catch();