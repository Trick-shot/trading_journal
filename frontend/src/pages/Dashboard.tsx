import { useEffect, useState } from "react";

import { Stack } from "@chakra-ui/react";
import StatusBar from "../components/dashboard/StatusBar";

import { IoWallet } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { MdGppGood } from "react-icons/md";

import { loadStatus, getStatus } from "../store/dashboard";
import { useAppDispatch, useAppStore, useAppSelector } from "../app/hooks";
import apiClient from "../services/api-client";
import AccountDetails from "../components/dashboard/AccountDetails";
import YearlyChart from "../components/dashboard/YearlyChart";

interface statusData {
  account_balance: number;
  trades_taken: number;
  won_trades: number;
  lost_trades: number;
}

interface AccountDetailsProps {
  name: string;
  server_name: string;
  account_id: number;
  type_option: string;
  leverage: string;
  broker: string;
  platform: string;
}
const Dashboard = () => {
  const [status, setStatus] = useState<statusData>({});
  const [accountDetails, setAccountDetails] = useState<AccountDetailsProps>({});
  // const stateList: statusData = useAppSelector(getStatus);

  // useEffect(() => {
  //   apiClient.get("/status-bar/1").then((res) => setStatus(res.data));
  //   console.log(status);
  // }, []);

  useEffect(() => {
    apiClient.get("/accounts/1").then((res) => setAccountDetails(res.data));
    console.log(accountDetails.name);
  }, []);

  return (
    <Stack pl="2px">
      {/* First view */}
      <Stack flexDirection="row" justifyContent="">
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
      {/* Second View */}
      <Stack pt="11px">
        <AccountDetails
          accountName={accountDetails.name}
          serverName={accountDetails.server_name}
          accountId={accountDetails.account_id}
          typeOption={accountDetails.type_option}
          leverage={accountDetails.leverage}
          broker={accountDetails.broker}
          platform={accountDetails.platform}
        />
      </Stack>
      {/* END statusbar */}

      {/* Third View*/}
      <Stack>
        <YearlyChart />
      </Stack>

      {/* END Third View */}
    </Stack>
  );
};

export default Dashboard;
