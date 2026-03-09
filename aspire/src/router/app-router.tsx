import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../components/layout/main-layout";
import CardsPage from "../pages/cards-page";
import PlaceholderPage from "../pages/placeholder-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/cards" replace />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/home" element={<PlaceholderPage title="Home" />} />
          <Route
            path="/payments"
            element={<PlaceholderPage title="Payments" />}
          />
          <Route path="/credit" element={<PlaceholderPage title="Credit" />} />
          <Route
            path="/settings"
            element={<PlaceholderPage title="Settings" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
