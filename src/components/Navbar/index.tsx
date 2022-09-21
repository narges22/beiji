import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { removeUser } from "../../store/user";
import { useRouter } from "next/router";

export default function ButtonAppBar() {
  const router = useRouter();
  const email = useSelector((state: RootState) => state.user?.email);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(removeUser());
    router.push("/auth/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {email}
          </Typography>
          <Button color="inherit" onClick={onLogOut}>
            log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
