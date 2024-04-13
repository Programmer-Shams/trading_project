import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GrBitcoin } from "react-icons/gr";
const Page = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const walletAddress = "bc1qw5ga7z9643msme4erkn4049vnl8al5wdt1mdva";
  const [copied, setCopied] = useState(false);
  const [networkType, setNetworkType] = useState("Erc");

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
            Done
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;