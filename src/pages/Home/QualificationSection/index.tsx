import { Box, Typography, Tab } from "@mui/material";
import { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TimelineEducation } from "../../../components/TimelineEducation";
import { TimelineExperience } from "../../../components/TimelineExperience";
import { BackgroundParticle } from "../../../lib/BackgroundParticle";

export function QualificationSection() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: "100%",
      mt: 20,

      display: "flex",
      justifyContent: "center",
    }}>
      <BackgroundParticle height="765px" />

      <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 2,
      }}>
        <Typography variant="h2" color="primary">
          Qualification
        </Typography>


        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ width: '100%', typography: 'body1' }}
        >
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab icon={<SchoolIcon color="secondary" />} iconPosition="start" label="Education" value="1" />
              <Tab icon={<WorkIcon color="secondary" />} iconPosition="start" label="Experience" value="2" />
            </TabList>

            <TabPanel value="1" sx={{ width: "auto" }}>
              <TimelineEducation />
            </TabPanel>
            <TabPanel value="2" sx={{ width: "auto" }}>
              <TimelineExperience />
            </TabPanel>
          </TabContext>
        </Box>

      </Box>
    </Box>
  )
}