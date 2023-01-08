import { AppBar, Box, colors, styled, Toolbar, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  maxWidth: "960px",
  display: "flex",
  marginLeft: "5rem",
  justifyContent: "space-between"
})

export function Navbar() {
  return (
    <AppBar position="sticky" sx={{
      mb: "10px",
      backgroundColor: colors.grey[800],
    }}>
      <StyledToolbar>
        <Box>
          <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
            H
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
            Home
          </Typography>
          <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
            Projects
          </Typography>
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}