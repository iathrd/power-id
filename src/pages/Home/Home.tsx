import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppFotter } from "../../components/AppFotter/AppFotter";

export const Home: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main style={{ height: "23vh" }}></main>
      <AppFotter />
    </>
  );
};
