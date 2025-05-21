import { Routes, Route } from "react-router";
import MainLayout from "./shared/layouts/MainLayout";
import MainPage from "./pages/MainPage";
import TechStackPage from "./pages/TechStackPage";
import ProjectPage from "./pages/ProjectPage";
import MessagePage from "./pages/MessagePage";
import ScrollToTop from "./shared/components/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<MainPage />} />
          <Route index path="/stacks" element={<TechStackPage />} />
          <Route index path="/projects" element={<ProjectPage />} />
          <Route index path="/message" element={<MessagePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
