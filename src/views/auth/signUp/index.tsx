import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { NextPageWithLayout } from "../../../layout/types";
import { addUser } from "../../../store/user";

const SignUp: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(
      addUser({
        name: "narges",
        surname: "shaker",
        password: "1232",
        email: "djfhjkdh",
      })
    );
  };
  return (
    <Box>
      <div>
        <TextField id="name" label="name" variant="outlined" type={"text"} />
      </div>
      <div>
        <TextField
          id="surname"
          label="surname"
          variant="outlined"
          type={"text"}
        />
      </div>
      <div>
        <TextField id="email" label="email" variant="outlined" type={"email"} />
      </div>
      <div>
        <TextField
          id="password"
          label="password"
          variant="outlined"
          type={"password"}
        />
      </div>
      <div>
        <Button variant="contained" type="submit" onClick={onSubmit}>
          Text
        </Button>
      </div>
    </Box>
  );
};
export default SignUp;
