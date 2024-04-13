import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Link, Select, Stack, TextField, Typography } from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import { useState } from "react";
import { quartersInYear } from "date-fns";
// import { connectToDB } from "../api/database";

// Handle database connection on the server
export async function getServerSideProps(context) {
  try {
    // await connectToDB();
  } catch (err) {
    console.error("Error connecting to database:", err);
  }quartersInYear

  return {
    props: {}, 
  };
}

const Page = ({}) => {
  const router = useRouter();
  // const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      name: Yup.string().max(255).required("Name is required"),
      password: Yup.string().max(255).required("Password is required").min(8, "Password must be at least 8 characters"), // Add minimum password length
    }),
    onSubmit: async (values, helpers) => {
      try {
        const userData = {
          firstName: values.firstName,
          lastName: values.lastName,
          userName: values.userName,
          email: values.email,
          password: values.password
        };

        // Use a separate API route to handle user creation securely
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error(await response.text()); // Handle API errors
        }

        // Handle successful registration (e.g., redirect, display success message)
        console.log("User created successfully!");
        router.push("/"); // Redirect to login or other appropriate page
      } catch (err) {
        // Handle errors gracefully
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message }); // Display user-friendly error message
        console.error(err); // Log the error for debugging
      }
    },
  });

  
  const [country, setCountry] = useState("Nigeria");
  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "NG", name: "Nigeria" },
  ];

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Register</Typography>
              <Typography color="text.secondary" variant="body2">
                Already have an account? &nbsp;
                <Link component={NextLink} href="/auth/login" underline="hover" variant="subtitle2">
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <Stack display="flex" flexDirection="row" gap={2}>
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="FirstName"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="LastName"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </Stack>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="UserName"
                  name="userName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                />
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                {/* <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Phone Number"
                  name="numder"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.number}
                /> */}
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                {/* <select
                  id="country"
                  className="block w-full py-4 px-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  value={country}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select> */}
                <Button href="/index" fullWidth size="large" sx={{ mt: 3 }} variant="contained">
                  Register
                </Button>
              </Stack>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
