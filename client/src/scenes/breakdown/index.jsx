import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import { BreakdownChart } from "components";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="BREAKDOWN" subtitle="Breakdown of sales by category" />

      {/* Content */}
      <Box mt="40px" height="75vh">
        {/* chart */}
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
