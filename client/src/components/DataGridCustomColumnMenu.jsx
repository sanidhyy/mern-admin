import React from "react";
import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";

// Custom column menu
const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      {/* Menu Items */}
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
