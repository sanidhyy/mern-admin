import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navbar, Sidebar } from "components";
import { useGetUserQuery } from "state/api";

// Layout
const Layout = () => {
  // is desktop
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  // is sidebar open
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // get user id from redux selector
  const userId = useSelector((state) => state.global.userId);
  // get data
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      {/* Sidebar */}
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Navbar */}
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
