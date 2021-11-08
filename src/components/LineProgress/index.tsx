import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material";
import { keyframes } from "@mui/styled-engine";

const slide = keyframes`
from {
    left: -200px;
  }

  to {
    left: 100%;
  }

`;
const Load = styled(Box)(() => ({
  width: "50px",
  height: "4px",
  position: "relative",
  background: `linear-gradient(
    to right,
    transparent,
    rgba(255,255,255,0.8),
    transparent
  )`,
  animation: `${slide} 10s infinite`,
  overflow: "hidden",
}));

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = Math.random() * 40;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box position="absolute" width="100%">
        <LinearProgress value={progress} variant="determinate" />
      </Box>
      {progress === 100 && (
        <Box sx={{ overflow: "hidden" }}>
          <Load />
        </Box>
      )}
    </Box>
  );
}
