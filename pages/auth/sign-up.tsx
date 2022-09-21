import { ReactElement } from "react";
import WithAuth from "../../src/layout/withAuth";
import SignUp from "../../src/views/auth/signUp";

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <WithAuth>{page}</WithAuth>;
};
export default SignUp;
