import { Box, colors, Typography } from "@mui/material";
import { Icon } from '@iconify/react';

interface CardSkillProps {
  name: string;
  icon: string;
}

export function CardSkill({ name, icon }: CardSkillProps) {
  return (
    <Box sx={{
      borderRadius: "50px",
      display: "flex",
      alignItems: "center",
      gap: 1,
      padding: "5px 20px 5px 30px",
      width: "90%",
      backgroundColor: colors.grey[900]
    }}>
      <Icon icon={icon} width={30} />
      <Typography>{name}</Typography>
    </Box>

  )
}