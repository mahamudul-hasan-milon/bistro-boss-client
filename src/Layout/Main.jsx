import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <main className="pt-12 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Main;
