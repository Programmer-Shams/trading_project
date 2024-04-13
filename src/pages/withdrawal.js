import Head from "next/head";
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import {
  Box,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Button,
  Unstable_Grid2 as Grid,
  Input,
} from "@mui/material";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

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
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Request for Withdrawal</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>USDT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-4">
                      <li>
                        Minimum amount: <span className="font-semibold">$10</span>
                      </li>
                      <li>
                        Maximum amount: <span className="font-semibold">$100000</span>
                      </li>
                      <li>
                        Charge Type: <span className="font-semibold">fixed</span>
                      </li>
                      <li>
                        Charges Amount: <span className="font-semibold">$0</span>
                      </li>
                      <li>
                        Duration: <span className="font-semibold">Instant Payment</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-4">
                    <Button
                      onClick={() => router.push("/withdrawal-confirmation")}
                      sx={{ mt: 2 }}
                      target="_blank"
                      variant="contained"
                    >
                      + Request withdrawal
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Ethereum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-4">
                      <li>
                        Minimum amount: <span className="font-semibold">$10</span>
                      </li>
                      <li>
                        Maximum amount: <span className="font-semibold">$100000</span>
                      </li>
                      <li>
                        Charge Type: <span className="font-semibold">fixed</span>
                      </li>
                      <li>
                        Charges Amount: <span className="font-semibold">$0</span>
                      </li>
                      <li>
                        Duration: <span className="font-semibold">Instant Payment</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-4">
                    <Button
                      onClick={() => router.push("/withdrawal-confirmation")}
                      sx={{ mt: 2 }}
                      target="_blank"
                      variant="contained"
                    >
                      + Request withdrawal
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Bitcoin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-4">
                      <li>
                        Minimum amount: <span className="font-semibold">$10</span>
                      </li>
                      <li>
                        Maximum amount: <span className="font-semibold">$100000</span>
                      </li>
                      <li>
                        Charge Type: <span className="font-semibold">fixed</span>
                      </li>
                      <li>
                        Charges Amount: <span className="font-semibold">$0</span>
                      </li>
                      <li>
                        Duration: <span className="font-semibold">Instant Payment</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-4">
                    <Button
                      onClick={() => router.push("/withdrawal-confirmation")}
                      sx={{ mt: 2 }}
                      target="_blank"
                      variant="contained"
                    >
                      + Request withdrawal
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <footer className="text-center text-sm text-gray-500 mt-12">
                All Rights Reserved © Digitalbase Network 2024
              </footer>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
