import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Tooltip, Typography, styled, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackgroundParticle } from "../../lib/BackgroundParticle";
import { CardProject } from "./CardProject";
import { dateFormatter } from "../../utils/formatter";
import { tokens } from "../../styles/theme";
import { Footbar } from "../../components/Footbar";

interface RepoProps {
  name: string;
  url: string;
  sshUrl: string;
  language: string;
  created_at: string;
  updated_at: string;
}

const Item = styled(Paper)(({ theme }) => {
  const colors = tokens(theme.palette.mode)

  return {
    backgroundColor: colors.grey[800],
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }
});

export function Projects() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [repos, setRepos] = useState<RepoProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios({
      method: "GET",
      url: "https://api.github.com/users/Vinicius-Holtman/repos?per_page=100",
    })
      .then((response) => {
        setRepos(response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Box sx={{
      width: "100%",

      display: "flex",
      justifyContent: "center",
    }}>
      <BackgroundParticle />

      <Box sx={{
        width: "1120px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        pb: "100px"
      }}>
        <Grid container spacing={4}>
          {repos.map((repo) => (
            <Grid item xs={4}>
              <Item>
                <Tooltip title={repo.name}>
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
                    {repo.name}
                  </Typography>
                </Tooltip>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} gap={4}>
                  <Typography variant="h6" color="secondary">
                    {repo.language}
                  </Typography>
                  <Button color="secondary" variant="outlined" size="small">SSH Clone</Button>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" gap={4} mt={2}>
                  <Typography variant="body2" color="text.secondary">
                    Created: {dateFormatter.format(new Date(repo.created_at))}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last_updated: {dateFormatter.format(new Date(repo.updated_at))}
                  </Typography>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
        {!isLoading && <Footbar />}
      </Box>
    </Box >
  )
}