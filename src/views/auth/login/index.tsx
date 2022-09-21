import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { NextPageWithLayout } from "../../../layout/types";
import { addUser, IUser } from "../../../store/user";

const Login: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = React.useState<IUser>({
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
    dispatch(addUser(user));
    router.push("/panel");
  };

  return (
    <Box>
      <div>
        <TextField
          value={user.email}
          onChange={(e) => onChangeFrom("email", e)}
          id="email"
          label="email"
          variant="outlined"
          type={"email"}
        />
      </div>
      <div>
        <TextField
          value={user.password}
          onChange={(e) => onChangeFrom("password", e)}
          id="password"
          label="password"
          variant="outlined"
          type={"password"}
        />
      </div>
      <div>
        <Button variant="contained" type="submit" onClick={onSubmit}>
          login
        </Button>
      </div>
    </Box>
  );
};
export default Login;
