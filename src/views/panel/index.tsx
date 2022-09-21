import { Alert, Container, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const Panel = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (router.query.login) setShowToast(true);
  }, []);

  const handleClose = () => {
    setShowToast(false);
  };
  return (
    <Container disableGutters maxWidth={"xl"}>
      <Navbar />
      <Snackbar open={showToast} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          you successfully loged in
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Panel;
