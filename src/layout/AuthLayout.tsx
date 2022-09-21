import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Router, { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import useAuthLayout from "./layout.styles";

interface IProps {
  children: ReactNode;
}
const WithAuth: FC<IProps> = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { paper } = useAuthLayout();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (value === 1) {
      router.push("/auth/login");
    } else {
      router.push("/auth/sign-up");
    }
  };
  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid item md={6} xs={10}>
          <Paper elevation={3} sx={{ p: 3, m: 5, ...paper }}>
            <Typography variant="h3">Merhaba</Typography>
            <Typography variant="caption">some text</Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Tabs value={value} onChange={handleChange}>
                <Tab label="login" />
                <Tab label="sign up" />
              </Tabs>
              <>{children}</>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithAuth;
