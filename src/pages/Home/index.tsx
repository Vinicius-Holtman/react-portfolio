import { Box, Button, Card, CardContent, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography, useTheme } from "@mui/material";
import { BoxContainer } from "../../utils/BoxContainer";
import { AboutMeSection } from "./AboutMeSection";
import { HomeSection } from "./HomeSection";
import { tokens } from "../../styles/theme";
import { CardSkill } from "../../components/CardSkill";
import { SkillSection } from "./SkillSection";
import { ProjectsSection } from "./ProjectsSection";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Home() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box>
      {/* <HomeSection />
      <AboutMeSection />
      <SkillSection />
      <ProjectsSection /> */}


      <BoxContainer>
        <Box sx={{
          width: "1120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 5,
          p: "0px 200px",
        }}>
          <Typography variant="h2" color="primary">
            Entre em contato
          </Typography>
          <Typography variant="h4">
            Fique a vontade para escolher uma forma de contato 😊. Irei responder o mais breve possivel
          </Typography>

          <Box display="flex" width="100%" justifyContent="space-between" gap={4}>
            <Box display="flex" flexDirection="column" gap={3}>
              <Box display="flex" alignItems="center" gap={2}>
                <GitHubIcon sx={{ width: "30px", height: "30px" }} color="secondary" /> {/* Phone */}
                <Typography>
                  +55 (41)99214-8498
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <GitHubIcon sx={{ width: "30px", height: "30px" }} color="secondary" />{/* Email */}
                <Typography>
                  vinicius.holt.dev@gmail.com
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <GitHubIcon sx={{ width: "30px", height: "30px" }} color="secondary" />
                <LinkedInIcon sx={{ width: "30px", height: "30px" }} color="secondary" />
                <LinkedInIcon sx={{ width: "30px", height: "30px" }} color="secondary" /> {/* Discord */}
              </Box>
            </Box>

            <Card>
              <CardContent>
                <Typography variant="h4" color="secondary">Inputs</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </BoxContainer>
    </Box>
  )
}