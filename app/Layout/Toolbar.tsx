import {
  Box,
  AppBar,
  Typography,
  Toolbar as MuiToolbar,
  Container,
} from "@mui/material";
import { Link } from "@remix-run/react";
import type { FC } from "react";

const Toolbar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <MuiToolbar sx={{ "&.MuiToolbar-root": { paddingInline: 0 } }}>
          <Container>
            <Typography
              variant="h6"
              color="inherit"
              component={Link}
              to={"/"}
              sx={{ textDecoration: "none" }}
            >
              TODOリスト
            </Typography>
          </Container>
        </MuiToolbar>
      </AppBar>
    </Box>
  );
};
export default Toolbar;
