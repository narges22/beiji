import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { NextPageWithLayout } from "../../../layout/types";

const Login: NextPageWithLayout = () => {
  return (
    <Box>
      <div>
        <TextField id="email" label="email" variant="outlined" type={"email"} />
      </div>
      <div>
        <TextField
          id="email"
          label="password"
          variant="outlined"
          type={"password"}
        />
      </div>
      <div>
        <Button variant="contained" type="submit">
          Text
        </Button>
      </div>
    </Box>
  );
};
export default Login;
