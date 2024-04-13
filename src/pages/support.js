import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Container, Button, Stack, SvgIcon, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button"

const Page = () => {
  return (
    <>
      <Head>
        <title>Customers | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 items-start w-full max-w-6xl mx-auto shadow-sm p-10">
          <div className="space-y-4 lg:col-span-2 lg:space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact Support</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Our support team is here to help. Please fill out the form below and we'll get back
                to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter the subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
              <Button variant="contained">Send message</Button>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

// export default function Component() {
//   return (
// <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 items-start w-full max-w-6xl px-4 mx-auto">
//   <div className="space-y-4 lg:col-span-2 lg:space-y-8">
//     <div className="space-y-2">
//       <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Support</h1>
//       <p className="text-gray-500 dark:text-gray-400">
//         Our support team is here to help. Please fill out the form below and we'll get back to you as soon as
//         possible.
//       </p>
//     </div>
//     <div className="space-y-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Label htmlFor="first-name">First name</Label>
//           <Input id="first-name" placeholder="Enter your first name" />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="last-name">Last name</Label>
//           <Input id="last-name" placeholder="Enter your last name" />
//         </div>
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="email">Email</Label>
//         <Input id="email" placeholder="Enter your email" type="email" />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="subject">Subject</Label>
//         <Input id="subject" placeholder="Enter the subject" />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="message">Message</Label>
//         <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
//       </div>
//       <Button>Send message</Button>
//     </div>
//   </div>
//   <div className="flex items-center space-x-4 lg:space-x-8">
//     <img
//       alt="Support"
//       className="rounded-lg object-cover"
//       height="200"
//       src="/placeholder.svg"
//       style={{
//         aspectRatio: "300/200",
//         objectFit: "cover",
//       }}
//       width="300"
//     />
//   </div>
// </div>
//   )
// }
