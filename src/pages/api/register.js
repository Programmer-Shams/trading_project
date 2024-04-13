import { User } from "src/lib/models";
import bcrypt from "bcrypt";
// import { connectToDB } from "./database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // await connectToDB();

      const { firstName, lastName, userName, email, password} = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email already exists!"); // Handle existing email error
      }

      // Hash the password securely before saving the user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new User({
        firstname: firstName,
        lastname: lastName,
        username: userName,
        email: email,
        password: hashedPassword,
      });

      await user.save(); // Save the user to the database

      res.status(201).json({ message: "User created successfully!" }); // Send success response
    } catch (err) {
      console.error(err);
      let errorMessage = "Failed to create user.";

      if (err.message.includes("email already exists")) {
        // Handle existing email error specifically
        errorMessage = "Email already in use. Please choose a different email.";
      }

      res.status(500).json({ message: errorMessage }); // Send error response with specific message
    }
  } else {
    res.status(405).json({ message: "Method not allowed" }); // Handle invalid methods
  }
}
