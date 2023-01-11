import {
  AppBar,
  Box,
  Button,
  colors,
  Link as MuiLink,
  styled,
  Toolbar,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";

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
          <Typography variant="h4" sx={{ display: { sm: "block" } }}>
            H
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Button variant="text" sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography color="secondary" variant="h5">
                Home
              </Typography>
            </Link>
          </Button>
          <Button variant="text" sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <Typography color="secondary" variant="h5">
                Projects
              </Typography>
            </Link>
          </Button>
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}