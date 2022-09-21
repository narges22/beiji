import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import Router, { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const WithAuth: FC<IProps> = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(value);
    setValue(newValue);
    if (value === 1) {
      router.push("/auth/login");
    } else {
      router.push("/auth/sign-up");
    }
  };
  return (
    <Container>
      <Typography variant="h3">Merhaba</Typography>
      <Typography variant="caption">some text</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="login" />
          <Tab label="sign up" />
        </Tabs>
        <>{children}</>
      </Box>
    </Container>
  );
};

export default WithAuth;
