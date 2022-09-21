import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { NextPageWithLayout } from "../../../layout/types";
import { addUser, IUser } from "../../../store/user";

const SignUp: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = React.useState<IUser>({
    name: "",
    surname: "",
    password: "",
    email: "",
  });

  const onSubmit = () => {
    dispatch(addUser(user));
    router.push("/panel");
  };

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

  return (
    <Box>
      <div>
        <TextField
          value={user.name}
          onChange={(e) => onChangeFrom("name", e)}
          id="name"
          label="name"
          variant="outlined"
          type={"text"}
        />
      </div>
      <div>
        <TextField
          value={user.surname}
          onChange={(e) => onChangeFrom("surname", e)}
          id="surname"
          label="surname"
          variant="outlined"
          type={"text"}
        />
      </div>
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
          sign up
        </Button>
      </div>
    </Box>
  );
};
export default SignUp;
