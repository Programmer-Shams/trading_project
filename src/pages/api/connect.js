// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGO;
// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env"
//   );
// }

// let cached = { conn: null, promise: null };

// export const connectToDatabase = async () => {
//   if (cached.conn) return cached.conn;
  
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//       dbName: "festifusion",
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// };