import { Box, Button, Card, CardContent, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography, useTheme } from "@mui/material";
import { HomeSection } from "./HomeSection";

import WorkIcon from '@mui/icons-material/Work';
import { AboutCard } from "../../components/AboutCard";
import DvrIcon from '@mui/icons-material/Dvr';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import IconNode from "../../assets/IconNode.svg"

const NodeIconBackground = styled("img")(({ theme }) => {
  return {
    position: "absolute",
    height: "500px"
  }
})

export function Home() {

  return (
    <Box>
      <HomeSection />

      <Box sx={{
        width: "100%",
        height: "895px",

        display: "flex",
        justifyContent: "center",
      }}>
        <NodeIconBackground src={IconNode} alt="Image Background Node" />

        <Box p="0px 300px" sx={{
          width: "1120px",
          display: "flex",
          marginTop: "90px",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
        }}>
          <Typography variant="h3" color="primary">
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
            fontWeight={600} variant="body1">
            Programador determinado e ambicioso sempre em busca de novos desafios e conhecimentos.
            Conheci a área de programação em 2018 no curso técnico do SENAI. Minhas primeiras linguagens estudas foram PHP, Javascript e SQL, após estudá-las adquiri apreço por desenvolvimento de aplicações. Possuo conhecimentos e experiência com projetos Full-Stack, meu objetivo dentro da programação é minha capacitação, sempre procurando me desenvolver melhor a cada dia.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}