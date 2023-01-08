import { Box, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { AboutMeSection } from "./AboutMeSection";
import { HomeSection } from "./HomeSection";
import { SkillSection } from "./SkillSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { QualificationSection } from "./QualificationSection";


export function Home() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <>
      <Box>
        {/* <HomeSection /> */}
        {/* <AboutMeSection /> */}
        {/* <SkillSection /> */}
        {/* <ProjectsSection /> */}
        <QualificationSection />
        {/* <ContactSection /> */}

      </Box>
    </>
  )
}