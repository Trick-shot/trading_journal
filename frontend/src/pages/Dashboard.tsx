import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";
import StatusBar from "../components/dashboard/StatusBar";

import { IoWallet } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { MdGppGood } from "react-icons/md";

import apiClient from "../services/api-client";

interface statusData {
  account_balance: number;
  trades_taken: number;
  won_trades: number;
  lost_trades: number;
}

const Dashboard = () => {
  const [status, setStatus] = useState<statusData>({});

  useEffect(() => {
    apiClient.get("/status-bar/1").then((res) => setStatus(res.data));
  }, []);

  return (
    <>
      {/* First view */}
      <Stack flexDirection="row" justifyContent="sp">
        <StatusBar
          statusData={status.account_balance}
          statusName="Account balance"
          Icon={<IoWallet fontSize="23" />}
          Status="account_balance"
        />
        <StatusBar
          statusData={status.trades_taken}
          statusName="Amount Trade taken"
          Icon={<AiOutlineLineChart fontSize="23" />}
          Status="amount_trade_taken"
        />
        <StatusBar
          statusData={status.won_trades}
          Status="trade_won"
          statusName="Trade Won"
          Icon={<MdGppGood fontSize="23" />}
        />
        <StatusBar
          statusData={status.lost_trades}
          Status="trade_lost"
          statusName="Trade Lost"
          Icon={<MdOutlineCancel fontSize="23" />}
        />
      </Stack>
      {/* END statusbar */}
    </>
  );
};

export default Dashboard;
