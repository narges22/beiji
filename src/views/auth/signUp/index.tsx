import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { NextPageWithLayout } from "../../../layout/types";
import { addUser, IUser } from "../../../store/user";
import { validate } from "../../../utils";

const SignUp: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = React.useState<IUser>({
    name: "",
    surname: "",
    password: "",
    email: "",
  });

  const [errors, setErros] = React.useState<Record<string, string>>({
    password: "",
    email: "",
  });

  const onSubmit = () => {
    const result = validate(user);
    if (Object.keys(result).length > 0) {
      setErros(result);
    } else {
      dispatch(addUser(user));
      router.push("/panel");
    }
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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ p: 1 }}>
        <TextField
          fullWidth
          value={user.name}
          onChange={(e) => onChangeFrom("name", e)}
          id="name"
          label="name"
          variant="outlined"
          type={"text"}
        />
      </Box>
      <Box sx={{ p: 1 }}>
        <TextField
          fullWidth
          value={user.surname}
          onChange={(e) => onChangeFrom("surname", e)}
          id="surname"
          label="surname"
          variant="outlined"
          type={"text"}
        />
      </Box>
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
          sign up
        </Button>
      </Box>
    </Box>
  );
};
export default SignUp;
