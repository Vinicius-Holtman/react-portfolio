import { Box, colors, Typography, useTheme } from "@mui/material";
import { Icon } from '@iconify/react';
import { tokens } from "../styles/theme";
import SAPIcon from '../assets/skills/sap_icon.png';

interface CardSkillProps {
  name: string;
  icon: string;
}

export function CardSkill({ name, icon }: CardSkillProps) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      borderRadius: "50px",
      display: "flex",
      alignItems: "center",
      gap: 1,
      padding: "5px 20px 5px 30px",
      flex: 1,
      minHeight: 45,
      backgroundColor: colors.grey[900],
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
    }}>
      {icon === '' ? <img src={SAPIcon} width="50px" /> : <Icon icon={icon} width={30} />}
      <Typography color={colors.grey[300]}>{name}</Typography>
    </Box>

  )
}