import Head from "next/head";
import {
  Box,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Button,
  Unstable_Grid2 as Grid,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
const Page = () => {
    const [networkType, setNetworkType] = useState("Erc");
    const router = useRouter();
    // ** New state and functions for modal control **
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // **
  
    const handleNetworkChange = (event) => {
      setNetworkType(event.target.value);
    };
  
    const handleCompleteRequest = () => {
      // Simulate successful transaction
      console.log("Transaction request submitted");
      // ** Open the modal here **
      handleClickOpen();
    };
  return (
    <>
      <Head>
        <title>Companies | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Withdrawal Confirmation</h1>
              <div className="flex justify-center py-10">
                <div className="w-full max-w-[40rem] p-6 h-[40rem] bg-white rounded-lg border shadow-md">
                  <h1 className="text-2xl font-bold mb-8">Request for Withdrawal</h1>
                  <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
                    <p>Your Payment Method is Bitcoin</p>
                  </div>
                  <form>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900"
                        htmlFor="amount"
                      >
                        Enter Amount to withdraw
                      </label>
                      <Input id="amount" placeholder="Enter Amount" />
                    </div>
                    <div className="mb-7">
                      <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="otp">
                        Wallet Address
                      </label>
                      <Input id="otp" placeholder="Enter Wallet Address" />
                    </div>
                    <div className="mb-7">
                      <label className="block text-sm font-medium mb-1" htmlFor="network-type">
                        Transaction Network
                      </label>
                      <select
                        id="network-type"
                        className="block w-full p-2 border focus:ring-blue-500 focus:border-blue-500 rounded-md"
                        value={networkType}
                        onChange={handleNetworkChange}
                      >
                        <option value="Erc">Erc</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Ripple">Ripple</option>
                        <option value="Stellar">Stellar</option>
                      </select>
                    </div>
                    <div className="mb-10">
                      <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="otp">
                        Enter OTP
                      </label>
                      <Input id="otp" placeholder="Enter Code" />
                      <p className="mt-1 text-xs text-gray-600">
                        OTP will be sent to your email when you request
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                    <Button variant="contained" onClick={handleCompleteRequest}>
                        Complete Request
                      </Button>
                      <Button variant="contained">
                        <MailboxIcon className="mr-2" />
                        Request OTP{"\n                  "}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Stack>
        </Container>
      </Box>
      {/* Render the modal here */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Transaction Successful</DialogTitle>
        <DialogContent className=" flex flex-col gap-5 items-center">
            <IoMdCheckmarkCircle className=" text-green-600" size={60} />
          <p>Your transaction request has been submitted successfully.</p>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

function MailboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}
