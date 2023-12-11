import { Box, Typography, Link as MuiLink, useTheme, Button } from "@mui/material";
// import { Carousel } from "../../../components/Carousel";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";
import { BackgroundSky } from "../../../lib/BackgroundSky";
import { tokens } from "../../../styles/theme";
import { Link } from "react-router-dom";

export function ProjectsSection() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      width: "100%",
      mt: 20,

      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <BackgroundParticle height="895px" />
      <BackgroundSky />

      <Box sx={{
        width: "1120px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
      }}>
        <Typography variant="h2" color="primary">
          Projects
        </Typography>
        <Typography
          color={colors.grey[300]}
          variant="h5"
          textAlign="center"
        >
          Esses são alguns dos meus projetos já desenvolvidos. Os demais projetos estão no Github e na sessao projects! 🐱‍👤🚀
        </Typography>
        <Box display="flex" gap={3}>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Button variant="outlined" >
              <Typography variant="button" fontWeight="bold">
                Projects
              </Typography>
            </Button>
          </Link>
          <MuiLink underline="none" href="https://github.com/Vinicius-Holtman?tab=repositories">
            <Button variant="contained">
              <Typography variant="button" fontWeight="bold">
                Github
              </Typography>
            </Button>
          </MuiLink>
        </Box>

        {/* <Box display="flex" gap={4} width="80%">
          <Carousel />
        </Box> */}
      </Box>
    </Box>
  )
}
