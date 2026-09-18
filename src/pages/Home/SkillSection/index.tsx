import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import StorageIcon from "@mui/icons-material/Storage";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import CodeIcon from "@mui/icons-material/Code";
import HandymanIcon from "@mui/icons-material/Handyman";
import { skillGroups, skillsSection } from "../../../data/content";
import { useT } from "../../../i18n";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";
import {
  RevealGroup,
  revealItemVariants,
} from "../../../components/motion/Reveal";

const GROUP_ICONS: Record<string, JSX.Element> = {
  storage: <StorageIcon fontSize="small" />,
  cloud: <CloudQueueIcon fontSize="small" />,
  factory: <PrecisionManufacturingIcon fontSize="small" />,
  code: <CodeIcon fontSize="small" />,
  tools: <HandymanIcon fontSize="small" />,
};

export function SkillSection() {
  const t = useT();
  const reduced = useReducedMotion();

  return (
    <Section id="skills">
      <SectionTitle
        title={t(skillsSection.title)}
        kicker={t(skillsSection.kicker)}
      />

      <RevealGroup stagger={0.1}>
        <Grid container spacing={3}>
          {skillGroups.map((group) => (
            <Grid
              item
              xs={12}
              md={group.featured ? 4 : 6}
              key={group.id}
              sx={{ display: "flex" }}
            >
              <Card
                component={motion.div}
                variants={revealItemVariants}
                whileHover={reduced ? undefined : { y: -6 }}
                sx={{
                  width: "100%",
                  backgroundColor: "background.paper",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color .3s ease, box-shadow .3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: "0 18px 40px -28px rgba(0,179,126,0.9)",
                  },
                  "&::before": group.featured
                    ? {
                        content: '""',
                        position: "absolute",
                        insetInline: 0,
                        top: 0,
                        height: 2,
                        background:
                          "linear-gradient(90deg, #00B37E, transparent)",
                      }
                    : undefined,
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box display="flex" alignItems="center" gap={1.5} mb={0.5}>
                    <Box
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        width: 38,
                        height: 38,
                        borderRadius: 2,
                        backgroundColor: "rgba(0,179,126,0.12)",
                        color: "primary.main",
                        flexShrink: 0,
                      }}
                    >
                      {GROUP_ICONS[group.icon]}
                    </Box>
                    <Box>
                      <Typography variant="h4" color="text.primary">
                        {t(group.title)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {t(group.caption)}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    display="flex"
                    flexWrap="wrap"
                    gap={0.9}
                    mt={2.5}
                    component={motion.div}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.03 } },
                    }}
                  >
                    {group.items.map((item) => (
                      <Chip
                        key={item}
                        component={motion.div}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        label={item}
                        size="small"
                        sx={{
                          borderRadius: 999,
                          backgroundColor: "rgba(255,255,255,0.045)",
                          border: "1px solid",
                          borderColor: "divider",
                          color: "text.primary",
                          transition:
                            "background-color .2s ease, border-color .2s ease, color .2s ease",
                          "&:hover": {
                            backgroundColor: "rgba(0,179,126,0.14)",
                            borderColor: "primary.main",
                            color: "primary.light",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </RevealGroup>
    </Section>
  );
}
