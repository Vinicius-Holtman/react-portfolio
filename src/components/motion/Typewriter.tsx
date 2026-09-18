import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Box } from "@mui/material";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

/** Digita e apaga uma lista de frases, em loop. */
export function Typewriter({
  words,
  typingSpeed = 65,
  deletingSpeed = 32,
  pause = 1800,
}: TypewriterProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Se a lista muda (troca de idioma), recomeça do primeiro item.
  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [words.join("|")]);

  useEffect(() => {
    if (reduced) {
      setText(words[0] ?? "");
      return;
    }

    const current = words[index % words.length] ?? "";

    if (!deleting && text === current) {
      const timer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timer);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause, reduced]);

  return (
    <Box component="span" sx={{ display: "inline-flex", alignItems: "center" }}>
      {text || " "}
      <Box
        component="span"
        aria-hidden
        sx={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          ml: "3px",
          backgroundColor: "primary.main",
          animation: "blinkCaret 1s steps(2, start) infinite",
          "@keyframes blinkCaret": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0 },
          },
        }}
      />
    </Box>
  );
}
