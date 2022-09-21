import { Alert, Box, Button, Snackbar } from "@mui/material";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../../components/Loading";
import { NextPageWithLayout } from "../../../layout/types";
import { addUser, IUser } from "../../../store/user";
import { validate } from "../../../utils";

const Login: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const [user, setUser] = React.useState<IUser>({
    password: "",
    email: "",
  });

  const [errors, setErros] = React.useState<Record<string, string>>({
    password: "",
    email: "",
  });

  const onChangeFrom = (
    title: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser((user) => {
      return {
        ...user,
        [title]: e.target.value,
      };
    });
  };

  const onSubmit = () => {
    const result = validate(user);
    if (Object.keys(result).length > 0) {
      setErros(result);
    } else {
      setLoading(true);
      dispatch(addUser(user));
      setTimeout(() => {
        router.push({
          pathname: "/panel",
          query: { login: true },
        });
      }, 3000);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box sx={{ p: 1, width: "100%" }}>
      <Box sx={{ p: 1 }}>
        <TextField
          fullWidth
          value={user.email}
          onChange={(e) => onChangeFrom("email", e)}
          id="email"
          label="email"
          variant="outlined"
          type={"email"}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>
      <Box sx={{ p: 1 }}>
        <TextField
          fullWidth
          value={user.password}
          onChange={(e) => onChangeFrom("password", e)}
          id="password"
          label="password"
          variant="outlined"
          type={"password"}
          error={!!errors.password}
          helperText={errors.password}
        />
      </Box>
      <Box sx={{ p: 1 }}>
        <Button fullWidth variant="contained" type="submit" onClick={onSubmit}>
          login
        </Button>
      </Box>
    </Box>
  );
};
export default Login;
