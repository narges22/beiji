import { ReactElement } from "react";
import AuthLayout from "../../src/layout/AuthLayout";
import Login from "../../src/views/auth/login";

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
export default Login;
