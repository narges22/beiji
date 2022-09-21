import { Router } from "next/router";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loading from "../Loading";

interface IProps {
  children: ReactNode;
  router: Router;
}
const isBrowser = () => typeof window !== "undefined";
const AuthProvider = ({ children, router }: IProps) => {
  const email = useSelector((state: RootState) => state?.user?.email);

  if (isBrowser() && !email && router.pathname === "/panel") {
    router.push("/auth/login");
    return (
      <>
        <Loading />
      </>
    );
  }

  return <>{children}</>;
};
export default AuthProvider;
