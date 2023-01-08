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
      backgroundColor: colors.grey[900],
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
    }}>
      <Icon icon={icon} width={30} />
      <Typography>{name}</Typography>
    </Box>

  )
}