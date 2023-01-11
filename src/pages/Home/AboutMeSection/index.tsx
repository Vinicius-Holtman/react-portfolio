import { Box, styled, Typography, useTheme } from "@mui/material";
import DvrIcon from '@mui/icons-material/Dvr';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { AboutCard } from "../../../components/AboutCard";
import IconNode from "../../../assets/skills/node.svg"
import { BackgroundSky } from "../../../lib/BackgroundSky";
import { tokens } from "../../../styles/theme";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";

const NodeIconBackground = styled("img")(({ theme }) => {
  return {
    position: "absolute",
    height: "50%",
    width: "50%",
    zIndex: -1
  }
})

export function AboutMeSection() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      width: "100%",

      display: "flex",
      justifyContent: "center",
    }}>
      <BackgroundSky />
      <BackgroundParticle height="695px" />

      <NodeIconBackground src={IconNode} alt="Image Background Node" />

      <Box sx={{
        width: "1120px",
        display: "flex",
        marginTop: "90px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
      }}>
        <Typography variant="h2" color="primary">
          About Me
        </Typography>

        <Box display="flex" gap={4}>
          <AboutCard
            icon={<WorkIcon color="secondary" />}
            title="Experience"
            subtitle="1+ Years Working"
          />
          <AboutCard
            icon={<DvrIcon color="secondary" />}
            title="Projects"
            subtitle="70+ Completed"
          />
          <AboutCard
            icon={<WorkspacePremiumIcon color="secondary" />}
            title="Certificate"
            subtitle="25+ Completed"
          />
        </Box>

        <Typography
          fontWeight={400}
          variant="h6"
          color={colors.grey[300]}
          maxWidth="500px"
        >
          Programador determinado e ambicioso sempre em busca de novos desafios e conhecimentos.
          Conheci a área de programação em 2018 no curso técnico do SENAI. Minhas primeiras linguagens estudas foram PHP, Javascript e SQL, após estudá-las adquiri apreço por desenvolvimento de aplicações. Possuo conhecimentos e experiência com projetos Full-Stack, meu objetivo dentro da programação é minha capacitação, sempre procurando me desenvolver melhor a cada dia.
        </Typography>
      </Box>
    </Box>
  )
}