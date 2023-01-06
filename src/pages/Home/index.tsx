import { Box, Button, Card, CardContent, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography, useTheme } from "@mui/material";
import { AboutMeSection } from "./AboutMeSection";
import { HomeSection } from "./HomeSection";


export function Home() {

  return (
    <Box>
      <HomeSection />
      <AboutMeSection />
      
      <Box>
        
      </Box>
    </Box>
  )
}