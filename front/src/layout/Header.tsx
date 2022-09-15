import { Avatar, Grid, Stack } from "@mui/material";
import { useHref, useLocation, useRoutes } from "react-router-dom";

export default function Home() {
  return (
    <Stack component={"header"} direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Avatar alt="BigScreen logo" src="logo.svg" sx={{ width: 56, height: 56 }} />
      <nav>
        <ul>
          <li>Lien 1</li>
        </ul>
      </nav>
    </Stack>
  );
}
