import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackgroundParticle } from "../../lib/BackgroundParticle";

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
        {/* {repos.map((repo) => {

        })} */}
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div" color="primary">
              Hoolbook
            </Typography>
            <Box display="flex" justifyContent="space-between" gap={4}>
              <Typography variant="h6" color="secondary">
                Typescript
              </Typography>
              <Button variant="outlined" size="small">Clone</Button>
            </Box>
            <Box display="flex" justifyContent="space-between" gap={4}>
              <Typography variant="body2" color="secondary">
                Created:
              </Typography>
              <Typography variant="body2" color="secondary">
                Last_updated:
              </Typography>
            </Box>
          </CardContent>
        </Card>

      </Box>
    </Box>
  )
}