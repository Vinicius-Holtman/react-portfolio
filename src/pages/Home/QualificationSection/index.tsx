import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  educationTimeline,
  experienceTimeline,
  journeySection,
  TimelineEntry,
} from "../../../data/content";
import { useT } from "../../../i18n";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";

function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  const t = useT();
  const reduced = useReducedMotion();

  return (
    <Box
      component={motion.ol}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
      }}
      sx={{
        listStyle: "none",
        m: 0,
        p: 0,
        pl: { xs: 3, sm: 4 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          left: { xs: 6, sm: 8 },
          top: 6,
          bottom: 6,
          width: 2,
          borderRadius: 2,
          background:
            "linear-gradient(180deg, rgba(0,179,126,0.85) 0%, rgba(0,179,126,0.12) 100%)",
        },
      }}
    >
      {entries.map((entry, index) => (
        <Box
          key={index}
          component={motion.li}
          variants={{
            hidden: { opacity: 0, x: -18 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          sx={{ position: "relative", pb: index === entries.length - 1 ? 0 : 4.5 }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              left: { xs: -22, sm: -28 },
              top: 6,
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "primary.main",
              boxShadow: "0 0 0 4px rgba(0,179,126,0.16)",
            }}
          />

          <Typography variant="h4" color="primary">
            {t(entry.primary)}
          </Typography>
          <Typography variant="h6" color="text.primary" sx={{ mt: 0.3 }}>
            {t(entry.secondary)}
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mt={0.8}>
            <CalendarTodayIcon sx={{ fontSize: 15, color: "text.secondary" }} />
            <Typography variant="caption" color="text.secondary">
              {t(entry.date)}
            </Typography>
          </Box>

          {entry.bullets && (
            <Box component="ul" sx={{ mt: 1.2, mb: 0, pl: 2.2 }}>
              {t(entry.bullets).map((bullet, bulletIndex) => (
                <Typography
                  component="li"
                  key={bulletIndex}
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.75, mb: 0.4 }}
                >
                  {bullet}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}

export function QualificationSection() {
  const t = useT();
  const [tab, setTab] = useState(0);

  return (
    <Section id="journey">
      <SectionTitle
        title={t(journeySection.title)}
        kicker={t(journeySection.kicker)}
      />

      <Box display="flex" justifyContent="center" mb={{ xs: 4, md: 6 }}>
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            icon={<WorkIcon fontSize="small" />}
            iconPosition="start"
            label={t(journeySection.tabExperience)}
            sx={{ minHeight: 48 }}
          />
          <Tab
            icon={<SchoolIcon fontSize="small" />}
            iconPosition="start"
            label={t(journeySection.tabEducation)}
            sx={{ minHeight: 48 }}
          />
        </Tabs>
      </Box>

      <Box sx={{ maxWidth: 780, mx: "auto" }}>
        <AnimatePresence mode="wait">
          <Box
            key={tab}
            component={motion.div}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TimelineList
              entries={tab === 0 ? experienceTimeline : educationTimeline}
            />
          </Box>
        </AnimatePresence>
      </Box>
    </Section>
  );
}
