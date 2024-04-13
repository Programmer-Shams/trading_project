import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GrBitcoin } from "react-icons/gr";
import { useRouter } from "next/navigation";
const Page = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const walletAddress = "bc1qw5ga7z9643msme4erkn4049vnl8al5wdt1mdva";
  const [copied, setCopied] = useState(false);
  const [networkType, setNetworkType] = useState("Erc");
  const router = useRouter();

  const handleNetworkChange = (event) => {
    setNetworkType(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 3 seconds
      })
      .catch((error) => console.error("Failed to copy wallet address:", error));
  };

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
          <Stack spacing={30} display="flex" alignItems="center">
            <div className="max-w-lg mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
              <h1 className="text-2xl font-bold mb-4">Confirm Payment</h1>
              <div className="mb-6">
                <p className="mb-2">
                  You are to make payment of <span className="font-semibold">$200</span> using your
                  selected payment method. Screenshot and upload the proof of payment
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <GrBitcoin size={45} className="text-orange-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">Bitcoin</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 px-3" htmlFor="bitcoin-address">
                  Bitcoin Address:
                </label>
                <div className="flex items-center space-x-2">
                  <Input className="flex-1" id="bitcoin-address" readOnly value={walletAddress} />
                  <Button
                    className="flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleCopy}
                    disabled={copied} // Disable button when copied
                  >
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="network-type">
                  Network Type:
                </label>
                <select
                  id="network-type"
                  className="block w-full p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  value={networkType}
                  onChange={handleNetworkChange}
                >
                  <option value="Erc">Erc</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Ripple">Ripple</option>
                  <option value="Stellar">Stellar</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" htmlFor="file-upload">
                  Upload Payment proof after payment.
                </label>
                <input
                  className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-gray-50 file:text-gray-700
                        hover:file:bg-gray-100
    "
                  id="file-upload"
                  name="file-upload"
                  type="file"
                />
              </div>
              <div onClick={() => router.push("/")} className="bg-blue-600 w-fit cursor-pointer rounded-xl font-semibold text-white">
                <Button>Submit Payment</Button>
              </div>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

// export default function Component() {
//   return (
// <div className="max-w-lg mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
//   <h1 className="text-2xl font-bold mb-4">Make Payment</h1>
//   <div className="mb-6">
//     <p className="mb-2">
//       You are to make payment of <span className="font-semibold">$200</span> using your selected payment method.
//       Screenshot and upload the proof of payment
//     </p>
//     <div className="flex items-center space-x-4">
//       <div className="flex-shrink-0">
//         <img
//           alt="Bitcoin"
//           className="h-16 w-16"
//           height="64"
//           src="/placeholder.svg"
//           style={{
//             aspectRatio: "64/64",
//             objectFit: "cover",
//           }}
//           width="64"
//         />
//       </div>
//       <div className="flex flex-col">
//         <span className="text-lg font-semibold">Bitcoin</span>
//       </div>
//     </div>
//   </div>
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1" htmlFor="bitcoin-address">
//       Bitcoin Address:
//     </label>
//     <div className="flex items-center space-x-2">
//       <Input className="flex-1" id="bitcoin-address" readOnly value="bc1qw5ga7z9643msme4erkn4049vnl8al5wdt1mdva" />
//       <Button className="flex-shrink-0" variant="secondary">
//         Copy
//       </Button>
//     </div>
//   </div>
//   <div className="mb-4">
//     <label className="block text-sm font-medium mb-1" htmlFor="network-type">
//       Network Type:
//     </label>
//     <Input id="network-type" readOnly value="Erc" />
//   </div>
//   <div className="mb-6">
//     <label className="block text-sm font-medium mb-1" htmlFor="file-upload">
//       Upload Payment proof after payment.
//     </label>
//     <input
//       className="block w-full text-sm text-gray-500
//   file:mr-4 file:py-2 file:px-4
//   file:rounded-full file:border-0
//   file:text-sm file:font-semibold
//   file:bg-gray-50 file:text-gray-700
//   hover:file:bg-gray-100
// "
//       id="file-upload"
//       name="file-upload"
//       type="file"
//     />
//   </div>
//   <Button>Submit Payment</Button>
// </div>
//   )
// }
