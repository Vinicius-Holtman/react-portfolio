import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackgroundParticle } from "../../lib/BackgroundParticle";
import { CardProject } from "./CardProject";

interface RepoProps {
  name: string;
  url: string;
  ssh_url: string;
  language: string;
  created_at: string;
  updated_at: string;
}

export function Projects() {
  const [repos, setRepos] = useState<RepoProps[]>([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.github.com/users/Vinicius-Holtman/repos?per_page=100",
    }).then((response) => {
      console.log(response.data)
      setRepos(response.data)
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
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}>
          {repos.map((repo) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h3" component="div" color="primary">
                  {repo.name}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} gap={4}>
                  <Typography variant="h6" color="text.secondary">
                    {repo.language}
                  </Typography>
                  <Button color="secondary" variant="outlined" size="small">SSH Clone</Button>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" gap={4} mt={2}>
                  <Typography variant="body2" color="text.secondary">
                    Created: {repo.created_at}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last_updated: {repo.updated_at}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}