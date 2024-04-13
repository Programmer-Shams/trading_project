// import mongoose from "mongoose";
// import { connectToDB } from "../pages/api/database";
// await connectToDB()

// const userSchema = new mongoose.Schema(
//   {
//     firstname: {
//       type: String,
//       required: true,
//       min: 3,
//       max: 20,
//     },
//     lastname: {
//       type: String,
//       required: true,
//       min: 3,
//       max: 20,
//     },
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// export const User = mongoose.models.User || mongoose.model("User", userSchema);
