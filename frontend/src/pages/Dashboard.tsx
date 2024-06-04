import { Stack } from "@chakra-ui/react";
import StatusBar from "../components/dashboard/StatusBar";

import { IoWallet } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { MdGppGood } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      {/* First view */}
      <Stack flexDirection="row" justifyContent="sp">
        <StatusBar
          statusName="Account balance"
          Icon={<IoWallet fontSize="23" />}
        />
        <StatusBar
          statusName="Amount Trade taken"
          Icon={<AiOutlineLineChart fontSize="23" />}
        />
        <StatusBar statusName="Trade Won" Icon={<MdGppGood fontSize="23" />} />
        <StatusBar
          statusName="Trade Lost"
          Icon={<MdOutlineCancel fontSize="23" />}
        />
      </Stack>
    </>
  );
};

export default Dashboard;
