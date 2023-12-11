import {
  AppBar,
  Box,
  Button,
  colors,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
  styled,
  Toolbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Logo from '../assets/logo.png'

const StyledToolbar = styled(Toolbar)({
  width: "100%",
  maxWidth: "1120px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
          <img src={Logo} width="50px" />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Link to="/react-portifolio" style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography color="primary" variant="h5">
                Home
              </Typography>
            </Button>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography color="primary" variant="h5">
                Projects
              </Typography>
            </Button>
          </Link>

          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="/react-portifolio" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>
                <Typography color="primary" variant="h5">
                  Home
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>
                <Typography color="primary" variant="h5">
                  Projects
                </Typography>
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}