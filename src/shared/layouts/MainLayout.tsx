import { Outlet } from "react-router";
import Footer from "../components/Footer";
function MainLayout() {
  return (
    <>
      <main className="min-h-screen bg-black flex flex-col pt-14">
        <div className="flex-grow w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainLayout;
