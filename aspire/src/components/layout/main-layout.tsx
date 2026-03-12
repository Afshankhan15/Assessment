import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";

export const MainLayout: FC = () => {
  return (
    <div
      className="h-screen overflow-hidden bg-aspire-white"
      data-testid="main-layout"
    >
      <div className="flex h-full w-full flex-col md:flex-row">
        <AppSidebar />
        <main
          className="flex-1 overflow-y-auto overflow-x-hidden"
          data-testid="main-layout-content"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
