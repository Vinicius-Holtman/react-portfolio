import { Box, ListItem, ListItemButton, ListItemIcon, Typography, Button, styled, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketseatIcon from "../../../assets/RocketseatIcon.svg"
import { tokens } from "../../../styles/theme";
import ImageHome from "../../../assets/imageHome.svg"
import ReactIcon from "../../../assets/IconReactBackground.svg"
import { BoxContainer } from "../../../utils/BoxContainer";

const ReactIconBackground = styled("img")(({ theme }) => {
  return {
    position: "absolute",
    height: "800px"
  }
})

export function HomeSection() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <BoxContainer>
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
          gap={10}
        >
          <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
            <Typography variant="h6" color="white">
              Hello! Welcome, I'm
            </Typography>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
              <Typography fontWeight="bold" variant="h3" color="secondary">
                Vinicius Holtman
              </Typography>
              <Typography fontWeight="bold" variant="h6" color="primary">
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
    </BoxContainer>
  )
}