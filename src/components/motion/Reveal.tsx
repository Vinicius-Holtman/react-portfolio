import { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Box, SxProps, Theme } from "@mui/material";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  sx?: SxProps<Theme>;
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

/** Revela o conteúdo quando ele entra na viewport. Respeita prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 28,
  once = true,
  sx,
}: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: reduced
      ? { opacity: 0 }
      : { opacity: 0, ...offsetFor(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0.2 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      sx={sx}
    >
      {children}
    </Box>
  );
}

/** Container que escalona a entrada dos filhos (use com <RevealItem />). */
export function RevealGroup({
  children,
  stagger = 0.08,
  delay = 0,
  sx,
}: {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  sx?: SxProps<Theme>;
}) {
  const reduced = useReducedMotion();

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : delay,
          },
        },
      }}
      sx={sx}
    >
      {children}
    </Box>
  );
}

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
