export default function home() {
  return <></>;
}
export async function getStaticProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/auth/login",
    },
  };
}
