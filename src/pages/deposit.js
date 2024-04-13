import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Button } from "@/components/ui/button"
import { LiaAmazonPay } from "react-icons/lia";
import { GrBitcoin } from "react-icons/gr";
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Page =  () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const router = useRouter()

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
        <Container maxWidth="xl">
          <Typography variant="h4" marginBottom={5}>
            Fund Your Account
          </Typography>
          <Stack spacing={30}>
            <Stack direction="row" justifyContent="space-between" className="shadow-md">
              <Stack spacing={1}>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <div className="mx-auto my-8 p-6 flex flex-col gap-8">
                    {/* <h1 className="text-2xl font-semibold mb-6">Fund Your Account</h1> */}
                    <div className="mb-4">
                      <label className="block text-md font-medium mb-2" htmlFor="amount">
                        Enter Amount
                      </label>
                      <input
                        className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md p-5"
                        id="amount"
                        placeholder="Enter Amount"
                        type="number"
                      />
                    </div>
                    <div className="mb-6">
                      <h2 className="text-lg font-medium mb-7">
                        Choose Payment Method from the list below
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          className={`flex items-center justify-between px-4 py-2 border rounded-md shadow-sm text-sm font-medium bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                            selectedMethod === "USDT" ? "border-blue-500" : "border-gray-300"
                          }`}
                          onClick={() => setSelectedMethod("USDT")}
                        >
                          <SiTether size={25} className="text-green-500" />
                          USDT
                        </button>
                        <button
                          className={`flex items-center justify-between px-4 py-2 border rounded-md shadow-sm text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                            selectedMethod === "Ethereum" ? "border-blue-500" : "border-gray-300"
                          }`}
                          onClick={() => setSelectedMethod("Ethereum")}
                        >
                          <FaEthereum size={25} className="text-gray-500" />
                          Ethereum
                        </button>
                        <button
                          className={`flex items-center justify-between px-4 py-2 border rounded-md shadow-sm text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                            selectedMethod === "Bitcoin" ? "border-blue-500" : "border-gray-300"
                          }`}
                          onClick={() => setSelectedMethod("Bitcoin")}
                        >
                          <GrBitcoin size={25} className="text-orange-500" />
                          Bitcoin
                        </button>
                      </div>
                    </div>
                    <div onClick={() => router.push("/payment")}>
                    <Button  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold items-center gap-3 flex justify-center">
                      Proceed to Payment <span><LiaAmazonPay size="32px" className=" pt-1" /></span>
                    </Button>
                    </div>
                  </div>
                </Stack>
              </Stack>
            </Stack>
            <div className="text-center text-xs text-gray-500 mt-6">
              All Rights Reserved © Digitalbase Network 2024
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

function BitcoinIcon(props) {
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
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
