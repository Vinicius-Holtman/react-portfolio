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
import { educations } from '../data/data-qualification';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export function TimelineEducation() {
  return (

    <Timeline position="alternate">
      {educations.map((education) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
              <Typography textAlign="left">{education.courseName}</Typography>
              <Typography textAlign="left">{education.name}</Typography>
              <Box display="flex" gap={1} justifyContent="flex-start">
                <CalendarTodayIcon color="secondary" />
                <Typography>{education.date}</Typography>
              </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}