import { Button } from "@/components/ui/button";
import { CgArrowUp } from "react-icons/cg";
import { CgArrowDown } from "react-icons/cg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";

export default function MarketOverView() {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoImg, setCryptoImg] = useState([]);
  const ApiKey = "3ce4e26c-f466-4d44-a75f-27cf28b05c1c";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${ApiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Check if cryptoData is not empty before executing fetchData()
    if (cryptoData.length > 0) {
      const value = cryptoData.map((crypto) => crypto.id);
      console.log(value);

      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${value.join(
              ","
            )}&CMC_PRO_API_KEY=${ApiKey}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const { data } = await response.json();
          console.log(data);
          setCryptoImg(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [cryptoData]);

  return (
    <section
      style={{
        margin: "auto",
        padding: "1.5rem",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      className="w-[45rem] overflow-scroll h-[40rem]"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Trending Market</h2>
        <Button
          style={{
            color: "#3B82F6",
            border: "1px solid #3B82F6",
            padding: "0.4rem 0.5rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            background: "transparent",
          }}
        >
          View more markets
        </Button>
      </div>
      <div className=" pl-5">
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #E5E7EB",
            padding: "0.5rem 1rem",
            fontWeight: "bold",
          }}
        >
          <div style={{ flex: "1.5" }}>Token</div>
          <div style={{ flex: "1.5" }}>Last Price</div>
          <div style={{ flex: "1.5" }}>24H Change</div>
          <div style={{ flex: "1.5" }}>Market Cap</div>
        </div>
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id}
            style={{
              borderBottom: "1px solid #E5E7EB",
              display: "flex",
              padding: "0.5rem 1rem",
              height: "5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1", display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src={cryptoImg[crypto.id]?.logo}
                alt={crypto.name}
                className=" w-[30px] rounded-full"
              />
              <span>{crypto.symbol}</span>
            </div>
            <div style={{ flex: "1" }}>{formatPrice(crypto.quote.USD.price)}</div>
            <div style={{ flex: "1" }}>
              <span
                style={{
                  fontWeight: "bold",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  width: "fit-content",
                  alignItems: "center",
                  justifyContent: "center",
                  color:
                    parseFloat(crypto.quote.USD.percent_change_24h) >= 0 ? "#10B981" : "#EF4444",
                }}
              >
                {parseFloat(crypto.quote.USD.percent_change_24h) >= 0 ? (
                  <CgArrowUp style={{ color: "#10B981", marginRight: "0.25rem" }} />
                ) : (
                  <CgArrowDown style={{ color: "#EF4444", marginRight: "0.25rem" }} />
                )}
                {parseFloat(crypto.quote.USD.percent_change_24h).toFixed(2)}%
              </span>
            </div>
            <div style={{ flex: "1" }}>{formatMarketCap(crypto.quote.USD.market_cap)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function formatPrice(price) {
  return `$${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function formatMarketCap(marketCap) {
  if (marketCap >= 1000000) {
    return `$${(marketCap / 1000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}M`;
  } else {
    return `$${marketCap.toLocaleString()}`;
  }
}

function ArrowUpIcon(props) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function BanknoteIcon(props) {
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

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

function LandmarkIcon(props) {
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
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}
