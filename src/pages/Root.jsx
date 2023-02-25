import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav/MainNav";

function RootLayout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
