import "./index.css";
import "./locales/index.ts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OverlayProvider } from "@toss/use-overlay";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <App />
        <Toaster />
      </OverlayProvider>
    </QueryClientProvider>
  </RecoilRoot>,
);
