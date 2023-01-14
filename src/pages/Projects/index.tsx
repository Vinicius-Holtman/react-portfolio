import {
  Box,
  Button,
  Pagination as MuiPagination,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
  styled,
  useTheme
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { BackgroundParticle } from "../../lib/BackgroundParticle";
import { CardProject } from "./CardProject";
import { dateFormatter } from "../../utils/formatter";
import { tokens } from "../../styles/theme";
import { Footbar } from "../../components/Footbar";

export interface Repository {
  name: string;
  url: string;
  sshUrl: string;
  language: string;
  created_at: string;
  updated_at: string;
}

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

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

  const countPages = () => {
    const totalCertificates = repos.length
    const quantityPage = totalCertificates / 12
    const roundPage = Math.ceil(quantityPage)
    return roundPage
  }

  const handleChangePage = (
    event: ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const countInitalPagination = (page * 12) - 12
  const cardProjectPagination = repos.slice(countInitalPagination, countInitalPagination + 12)

  return (
    <>
      <Box sx={{
        width: "100%",

        display: "flex",
        justifyContent: "center",
        position: "relative"
      }}>
        <BackgroundParticle />

        <Box sx={{
          width: "1120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          gap: 2
        }}>
          <Grid container spacing={4}>
            {cardProjectPagination.map((repo) => (
              <Grid item xs={4}>
                <CardProject repository={repo} />
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2}>
            <MuiPagination
              count={countPages()}
              color="secondary"
              onChange={handleChangePage}
              page={page}
            />
          </Stack>
        </Box>
      </Box >
      <Footbar />
    </>
  )
}