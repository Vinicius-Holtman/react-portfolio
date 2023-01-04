import { Box, Button, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketseatIcon from "../assets/RocketseatIcon.svg"
import { tokens } from "../styles/theme";



export function Home() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      sx={{
        width: "100%",
        height: "895px",

        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box sx={{
        width: "1120px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Box>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://github.com/Vinicius-Holtman">
              <ListItemIcon>
                <GitHubIcon color="secondary" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://linkedin.com/in/vinicius-holtman-9b014a208">
              <ListItemIcon>
                <LinkedInIcon color="secondary" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://linkedin.com/in/vinicius-holtman-9b014a208">
              <ListItemIcon>
                <img src={RocketseatIcon} alt="Rocketseat" width={30} height={30} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Box>

        <Box
          height="90%"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
            <Typography variant="h6" color="white">
              Hello! Welcome, I'm
            </Typography>
            <Typography variant="h3" color="primary">
              Vinicius Holtman
            </Typography>
            <Typography variant="h5" color="secondary">
              Fullstack Developer
            </Typography>

            <Box display="flex" gap={3}>
              <Button variant="outlined">
                Download CV
              </Button>
              <Button variant="contained">
                Let's talk
              </Button>
            </Box>
          </Box>
          <Box>
            Imagem
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h5"
            color="secondary"
            sx={{ transform: 'rotate(90deg)' }}
          >
            Scroll Down
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}