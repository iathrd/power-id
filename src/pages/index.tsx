import React, { Suspense, lazy } from "react";
import Box from "@mui/material/Box";
import LinearBuffer from "@components/LineProgress";

const Suspensed = (Element: React.FC) =>
  function suspense(
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
  ) {
    return (
      <Suspense
        fallback={
          <Box height="100vh">
            <LinearBuffer />
          </Box>
        }
      >
        <Element {...props} />
      </Suspense>
    );
  };

export default {
  Home: Suspensed(lazy(() => import("@pages/Home"))),
  LandingPage: Suspensed(lazy(() => import("@pages/LandingPage/LandingPage"))),
  Login: Suspensed(lazy(() => import("@pages/Login/Login"))),
  Register: Suspensed(lazy(() => import("@pages/Register/Register"))),
};
