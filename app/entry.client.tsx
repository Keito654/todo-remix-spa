import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ThemeProvider theme={{}}>
        <CssBaseline />
        <RemixBrowser />
      </ThemeProvider>
    </StrictMode>
  );
});
