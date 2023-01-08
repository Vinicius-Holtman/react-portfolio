import { Box, ListItem, ListItemButton, ListItemIcon, Typography, Button, styled, useTheme } from "@mui/material";
import RocketseatIcon from "../../../assets/RocketseatIcon.svg"
import { tokens } from "../../../styles/theme";
import ImageHome from "../../../assets/imageHome.svg"
import ReactIcon from "../../../assets/skills/react.svg"
import { Icon } from "@iconify/react";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";

const ReactIconBackground = styled("img")(({ theme }) => {
  return {
    position: "absolute",
    height: "800px"
  }
})

export function HomeSection() {
  return (
    <Box sx={{
      width: "100%",
      height: "915px",
    
      display: "flex",
      justifyContent: "center",
    }}>
      <BackgroundParticle />

      <ReactIconBackground src={ReactIcon} alt="Background React" />
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
                <Icon color="#00875f" icon="mdi:github" width={30} height={30}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://linkedin.com/in/vinicius-holtman-9b014a208">
              <ListItemIcon>
                <Icon color="#00875f" icon="mdi:linkedin" width={30} height={30}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://app.rocketseat.com.br/me/vinicius-holtman">
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
          gap={10}
        >
          <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
            <Typography variant="h6" color="white">
              Hello! Welcome, I'm
            </Typography>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <Typography fontWeight="bold" variant="h3" color="primary">
                Vinicius Holtman
              </Typography>
              <Typography fontWeight="bold" variant="h6" color="secondary">
                Fullstack Developer
              </Typography>
            </Box>

            <Box display="flex" mt={4} gap={3}>
              <Button variant="outlined">
                <Typography variant="button" fontWeight="bold">
                  Download CV
                </Typography>
              </Button>
              <Button variant="contained">
                <Typography variant="button" fontWeight="bold">
                  Let's talk
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box>
            <img src={ImageHome} alt="Image Home" />
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