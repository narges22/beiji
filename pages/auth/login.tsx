import { ReactElement } from "react";
import WithAuth from "../../src/layout/withAuth";
import Login from "../../src/views/auth/login";

Login.getLayout = function getLayout(page: ReactElement) {
  return <WithAuth>{page}</WithAuth>;
};
export default Login;
