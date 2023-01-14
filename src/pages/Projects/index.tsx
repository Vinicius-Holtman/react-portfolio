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
import { RingLoader } from "react-spinners";

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
    setTimeout(() => {
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
    }, 4000)
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
      <BackgroundParticle height="830px" />
      <Box sx={{
        width: "100%",
        height: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: isLoading ? "center" : "flex-start",
      }}>
        {isLoading ? (
          <RingLoader color="#00875f" />
        ) : (
          <Box sx={{
            width: "1120px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
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
        )}
      </Box >
      <Footbar />
    </>
  )
}