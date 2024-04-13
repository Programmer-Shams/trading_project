// import { User } from "../../lib/models";
// import { connectToDB } from "./database";




// export const fetchUsers = async () => {
//   try {
//     await connectToDB(); // Ensure connection before fetching

//     const users = await User.find(); // Fetch all users

//     console.log("Fetched users:", users); // Optional logging

//     return users; // Return only the users array
//   } catch (err) {
//     console.error(err);
//     throw new Error("Failed to fetch users!");
//   }
// };


// // a functtion to create a new user in the database after creating account

// // export const createUser = async (userData) => {
// //   try {
// //     await connectToDB(); // Ensure connection before creating

// //     // Validate email uniqueness (optional, but recommended for security)
// //     const existingUser = await User.findOne({ email: userData.email });
// //     if (existingUser) {
// //       throw new Error("Email already exists!");
// //     }

// //     // Hash the password securely before saving the user
// //     const hashedPassword = await User.hashPassword(userData.password); // Replace with secure hashing method (e.g., bcrypt)

// //     const user = new User({
// //       ...userData, // Spread other user data (excluding password)
// //       password: hashedPassword,
// //     });

// //     await user.save(); // Save the user to the database

// //     console.log("Created user:", user); // Optional logging

// //     return user; // Return the created user
// //   } catch (err) {
// //     console.error(err);
// //     throw new Error("Failed to create user!");
// //   }
// // };

