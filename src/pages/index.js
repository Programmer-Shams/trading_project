import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import MarketOverView from "src/sections/overview/overview-market";
import { GrBitcoin } from "react-icons/gr";
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";

const now = new Date();

const Page  =  () => {

  return (
    <>
      <Head>
        <title>Overview | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="$24,000" />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value="1.6k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} positive />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
            </Grid>
            <Grid xs={12} lg={8}>
              <OverviewSales
                chartSeries={[
                  {
                    name: "This year",
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                  },
                  {
                    name: "Last year",
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={["Desktop", "Tablet", "Phone"]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} md={12} lg={8}>
              <MarketOverView />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewLatestProducts
                products={[
                  {
                    id: "5e86805e2bafd54f66cc95c3",
                    amount: "500.00",
                    payment_mode: "BTC",
                    status: "completed",
                    icon: <GrBitcoin size={25} className="text-orange-500" />,
                    createdAt: subDays(subHours(now, 11), 2).getTime(),
                  },
                  {
                    id: "5e86805e2bafd54f66cc95c3",
                    amount: "100.00",
                    payment_mode: "USDT",
                    status: "completed",
                    icon: <SiTether size={25} className="text-green-500" />,
                    createdAt: subDays(subHours(now, 11), 2).getTime(),
                  },
                  {
                    id: "5e86805e2bafd54f66cc95c3",
                    amount: "240.00",
                    payment_mode: "ETH",
                    status: "completed",
                    icon: <FaEthereum size={25} className="text-gray-500" />,
                    createdAt: subDays(subHours(now, 11), 2).getTime(),
                  },
                  {
                    id: "5e86805e2bafd54f66cc95c3",
                    amount: "400.00",
                    payment_mode: "BTC",
                    status: "completed",
                    icon: <GrBitcoin size={25} className="text-orange-500" />,
                    createdAt: subDays(subHours(now, 11), 2).getTime(),
                  },
                  {
                    id: "5e86805e2bafd54f66cc95c3",
                    amount: "250.00",
                    payment_mode: "USDT",
                    status: "completed",
                    icon: <SiTether size={25} className="text-green-500" />,
                    createdAt: subDays(subHours(now, 11), 2).getTime(),
                  },
                  {
                    id: "5e86805e2bafd54f66cc95c3",
                    amount: "50.00",
                    payment_mode: "BTC",
                    status: "completed",
                    icon: <GrBitcoin size={25} className="text-orange-500" />,
                    createdAt: subDays(subHours(now, 11), 2).getTime(),
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
