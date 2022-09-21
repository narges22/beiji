import { ReactElement } from "react";
import AuthLayout from "../../src/layout/AuthLayout";
import SignUp from "../../src/views/auth/signUp";

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
export default SignUp;
