import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Layout from "./template/layout/Layout";
import Paths from "./types/paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="*" element={<Navigate to={Paths.Landing} replace />} />,
      <Route path={Paths.Landing} element={<LandingPage />} />,
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
