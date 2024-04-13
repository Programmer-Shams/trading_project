import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};

// // const mongoose = require('mongoose');
// // const connectToDB = () => {
// //   const con = mongoose.connect(process.env.MONGO)
// //   .then(() => {
// //     console.log('Database connected');
// //   })
// //   .catch((err) => {
// //     console.log(err, 'Database connection failed');
// //   });
// // }
// // module.exports = connectToDB;
