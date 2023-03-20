import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { SearchProvider } from "./contexts/SearchContext";
import { ShowProvider } from "./contexts/ShowContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ShowProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ShowProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
