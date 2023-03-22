import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";

import { Header, OverviewChart } from "components";

// Overview
const Overview = () => {
  // view - units/sales
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />

      {/* Content */}
      <Box height="75vh">
        {/* Select View Form */}
        <FormControl
          sx={{
            mt: "1rem",
          }}
        >
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>

        {/* Overview Chart */}
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
