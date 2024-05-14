import "./index.css";
import "./locales/index.ts";

import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <App />
    <Toaster />
  </RecoilRoot>,
);
