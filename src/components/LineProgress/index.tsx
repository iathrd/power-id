import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Load } from "./styled";

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
