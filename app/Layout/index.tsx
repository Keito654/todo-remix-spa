import { Container } from "@mui/material";
import type React from "react";
import type { FC } from "react";
import Toolbar from "./Toolbar";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {
  children: React.ReactNode;
};

const index: FC<Props> = ({ children }) => {
  return (
    <>
      <Toolbar />
      <Container sx={{ paddingTop: (theme) => theme.spacing(2) }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {children}
        </Grid>
      </Container>
    </>
  );
};
export default index;
