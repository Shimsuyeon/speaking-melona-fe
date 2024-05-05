import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage";
import ResultPage from "./pages/result/ResultPage";
import ScanPage from "./pages/scan/ScanPage";
import Layout from "./template/layout/Layout";
import Paths from "./types/paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="*" element={<Navigate to={Paths.Landing} replace />} />,
      <Route path={Paths.Landing} element={<LandingPage />} />,
      <Route path={Paths.Scan} element={<ScanPage />} />,
      <Route path={Paths.Result} element={<ResultPage />} />,
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
