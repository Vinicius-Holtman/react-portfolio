import { Box } from '@mui/material'
import React from 'react'
import ParticleBackground from 'react-particle-backgrounds'

interface BackgroundParticleProps {
  height?: string
}

export function BackgroundParticle({ height }: BackgroundParticleProps) {

  const settings = {
    particle: {
      particleCount: 150,
      color: "#e3d5d5",
      maxSize: 2
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.1
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 10000
    }
  }

  return (
    <Box sx={{
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: -1
    }}>
      <ParticleBackground settings={settings} />
    </Box>
  )
}