import { Box, styled, Typography, useTheme } from "@mui/material";
import DvrIcon from '@mui/icons-material/Dvr';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { AboutCard } from "../../../components/AboutCard";
import IconNode from "../../../assets/skills/node.svg"
import { tokens } from "../../../styles/theme";
// import { BackgroundSky } from "../../../lib/BackgroundSky";
// import { BackgroundParticle } from "../../../lib/BackgroundParticle";

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
      {/* <BackgroundSky /> */}
      {/* <BackgroundParticle height="695px" /> */}

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
            subtitle="3+ Years Working"
          />
          <AboutCard
            icon={<DvrIcon color="secondary" />}
            title="Projects"
            subtitle="70+ Completed"
          />
          <AboutCard
            icon={<WorkspacePremiumIcon color="secondary" />}
            title="Certificate"
            subtitle="40+ Completed"
          />
        </Box>

        <Typography
          fontWeight={400}
          variant="h6"
          color={colors.grey[300]}
          maxWidth="500px"
        >
          Profissional de desenvolvimento determinado e ambicioso, constantemente em busca de novos desafios e oportunidades para aprimorar minhas habilidades. Ingressei na área de programação em 2018 durante o curso técnico no SENAI, onde tive meu primeiro contato com linguagens como PHP, Javascript e SQL. O domínio dessas linguagens despertou meu interesse no desenvolvimento de aplicações, impulsionando-me a explorar projetos Full-Stack.
          Atualmente, tenho experiência e atuação em projetos envolvendo serviços SAP, destacando meu conhecimento em tecnologias como SAP Fiori Freestyle UI5, SAP Fiori Elements, SAP ABAP, SAP BTP, SAP CDS Views, SAP BOPF, SAP Hana, SAP Gateway e SAP Workflow. Minha trajetória profissional reflete meu comprometimento em alcançar a excelência na programação, e meu objetivo contínuo é aprimorar-me constantemente, contribuindo para soluções eficientes e inovadoras.
        </Typography>
      </Box>
    </Box>
  )
}