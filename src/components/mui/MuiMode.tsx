import { Typography, useTheme } from "@mui/material";
import React from "react";

function MuiMode() {
  const { palette } = useTheme();
  return <Typography component="h1">{palette.mode} mode</Typography>;
}

export default MuiMode;
