import { Box, styled, useTheme } from "@mui/material";
import { AboutMeSection } from "./AboutMeSection";
import { HomeSection } from "./HomeSection";
import { SkillSection } from "./SkillSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { QualificationSection } from "./QualificationSection";
import { Footbar } from "../../components/Footbar";
import { CertificateSection } from "./CertificateSection";

export function Home() {
  return (
    <>
      <Box>
        {/* <HomeSection />
        <AboutMeSection />
        <SkillSection />
        <ProjectsSection />
        <QualificationSection />
        <ContactSection /> */}

        <CertificateSection />
      </Box>
    </>
  )
}