import { AppBar, Box, colors, styled, Toolbar, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  width: "100%",
  maxWidth: "1120px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

export function Navbar() {
  return (
    <AppBar position="sticky" sx={{
      width: "100%",
      mb: "10px",
      backgroundColor: colors.grey[800],
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
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
          <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
            Home
          </Typography>
          <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
            Projects
          </Typography>
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}