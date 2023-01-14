import {
  Typography,
  Box,
  Button,
  Tooltip,
  Paper,
  styled
} from "@mui/material";
import { dateFormatter } from "../../utils/formatter";
import { tokens } from "../../styles/theme";
import { Repository } from ".";

const Item = styled(Paper)(({ theme }) => {
  const colors = tokens(theme.palette.mode)

  return {
    backgroundColor: colors.grey[800],
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }
});

interface CardProjectProps {
  repository: Repository
}

export function CardProject({ repository }: CardProjectProps) {
  return (
    <Item>
      <Tooltip title={repository.name}>
        <Typography sx={{
          whiteSpace: "nowrap",
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
          gutterBottom
          variant="h3"
          component="div"
          color="primary"
        >
          {repository.name}
        </Typography>
      </Tooltip>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} gap={4}>
        <Typography variant="h6" color="secondary">
          {repository.language}
        </Typography>
        <Button color="secondary" variant="outlined" size="small">SSH Clone</Button>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={4} mt={2}>
        <Typography variant="body2" color="text.secondary">
          Created: {dateFormatter.format(new Date(repository.created_at))}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last_updated: {dateFormatter.format(new Date(repository.updated_at))}
        </Typography>
      </Box>
    </Item>
  )
}