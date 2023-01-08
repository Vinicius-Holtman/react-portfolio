import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import { Box, Typography, useTheme } from '@mui/material';
import { educations } from '../data/data-qualification';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { tokens } from '../styles/theme';

export function TimelineEducation() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Timeline position="alternate">
      {educations.map((education) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Box display="flex" flexDirection="column" gap={0.75}>
              <Typography variant="h5" color="primary" textAlign="left">{education.courseName}</Typography>
              <Typography textAlign="left" color={colors.grey[300]}>{education.name}</Typography>
              <Box display="flex" gap={1} justifyContent="flex-start">
                <CalendarTodayIcon color="secondary" />
                <Typography color={colors.grey[300]}>{education.date}</Typography>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}