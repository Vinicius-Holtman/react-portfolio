import { Box } from "@mui/material";
import { HomeSection } from "./HomeSection";
import { AboutMeSection } from "./AboutMeSection";
import { SkillSection } from "./SkillSection";
import { ProjectsSection } from "./ProjectsSection";
import { CertificateSection } from "./CertificateSection";
import { QualificationSection } from "./QualificationSection";
import { ContactSection } from "./ContactSection";

export function Home() {
  return (
    <Box>
      <HomeSection />
      <AboutMeSection />
      <SkillSection />
      <ProjectsSection />
      <CertificateSection />
      <QualificationSection />
      <ContactSection />
    </Box>
  );
}
