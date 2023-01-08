import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { experiences } from '../data/data-qualification';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export function TimelineExperience() {
  return (

    <Timeline position="alternate">
      {experiences.map((experience) => (
        <TimelineItem>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography>Bachrel SI</Typography>
            <Typography>Faculdade da Industria</Typography>
            <Box display="flex" gap={1}>
              <CalendarTodayIcon color="secondary" />
              <Typography>{experience.date}</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}