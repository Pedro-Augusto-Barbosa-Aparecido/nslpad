import { Router, Route } from "electron-router-dom";
import { BlankPage } from "./pages";
import { MainLayout } from "./pages/layouts";

export function Routes() {
  return (
    <Router
      main={
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<BlankPage />} />
        </Route>
      }
    />
  );
}
