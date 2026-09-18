import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination as MuiPagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { RingLoader } from "react-spinners";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { CardProject } from "./CardProject";
import { SectionTitle } from "../../components/SectionTitle";
import { RevealGroup, revealItemVariants } from "../../components/motion/Reveal";
import { motion } from "framer-motion";
import { useLang } from "../../i18n";

export interface Repository {
  name: string;
  url: string;
  ssh_url: string;
  language: string;
  created_at: string;
  updated_at: string;
}

const PER_PAGE = 12;

const copy = {
  pt: {
    title: "Repositórios",
    kicker: "Projetos pessoais e estudos publicados no meu GitHub",
    search: "Filtrar por nome ou linguagem",
    back: "Voltar ao início",
    empty: "Nenhum repositório encontrado com esse filtro.",
  },
  en: {
    title: "Repositories",
    kicker: "Personal projects and experiments published on my GitHub",
    search: "Filter by name or language",
    back: "Back to home",
    empty: "No repository matches that filter.",
  },
};

export function Projects() {
  const { lang } = useLang();
  const text = copy[lang];

  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0 });
    axios
      .get(
        "https://api.github.com/users/Vinicius-Holtman/repos?per_page=100&sort=updated"
      )
      .then((response) => setRepos(response.data))
      .catch(() => setRepos([]))
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return repos;
    return repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(term) ||
        (repo.language ?? "").toLowerCase().includes(term)
    );
  }, [repos, query]);

  useEffect(() => setPage(1), [query]);

  const pageCount = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

  const handleChangePage = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 10, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <SectionTitle title={text.title} kicker={text.kicker} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          mb={4}
        >
          <Button component={Link} to="/" startIcon={<ArrowBackIcon />}>
            {text.back}
          </Button>
          <TextField
            size="small"
            variant="outlined"
            label={text.search}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            sx={{ minWidth: { xs: "100%", sm: 300 } }}
          />
        </Stack>

        {isLoading ? (
          <Box display="flex" justifyContent="center" py={10}>
            <RingLoader color="#00B37E" />
          </Box>
        ) : visible.length === 0 ? (
          <Typography textAlign="center" color="text.secondary" py={8}>
            {text.empty}
          </Typography>
        ) : (
          <>
            <Box
              key={page}
              component={motion.div}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
            >
              <Grid container spacing={3}>
                {visible.map((repo) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={repo.name}
                    sx={{ display: "flex" }}
                  >
                    <Box
                      component={motion.div}
                      variants={revealItemVariants}
                      sx={{ width: "100%" }}
                    >
                      <CardProject repository={repo} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Stack alignItems="center" mt={5}>
              <MuiPagination
                count={pageCount}
                color="primary"
                page={page}
                onChange={handleChangePage}
              />
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}
