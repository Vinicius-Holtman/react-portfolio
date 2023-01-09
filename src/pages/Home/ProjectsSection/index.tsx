import { Box, Typography, Card, CardContent } from "@mui/material";
import { Carousel } from "../../../components/Carousel";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";
import { BackgroundSky } from "../../../lib/BackgroundSky";

export function ProjectsSection() {
  return (
    <Box sx={{
      width: "100%",
      height: "895px",

      display: "flex",
      justifyContent: "center",
    }}>
      <BackgroundParticle height="895px" />
      <BackgroundSky />

      <Box sx={{
        width: "1120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 5,
      }}>
        <Typography variant="h2" color="primary">
          Projects
        </Typography>
        <Typography variant="h5">
          Esses são alguns dos meus projetos já desenvolvidos. Os demais projetos estão no Github e na sessao projects! 🐱‍👤🚀
        </Typography>

        <Box display="flex" gap={4} width="80%">
          <Carousel />
        </Box>
      </Box>
    </Box>
  )
}
