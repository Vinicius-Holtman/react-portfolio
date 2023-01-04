import { DarkMode, LightMode, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, colors, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import HoltbookLogo from "../assets/holtbook.png"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

export function Navbar() {
  return (
    <AppBar position="sticky" sx={{ mb: "10px", backgroundColor: colors.green[500] }}>
      <StyledToolbar>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          H
        </Typography>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          Home
        </Typography>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          Projects
        </Typography>
      </StyledToolbar>
    </AppBar>
  )
}