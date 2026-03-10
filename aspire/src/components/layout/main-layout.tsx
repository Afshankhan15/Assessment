import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";

export const MainLayout: FC = () => {
  return (
    <div className="min-h-screen bg-aspire-white" data-testid="main-layout">
      <div className="flex min-h-screen w-full flex-col md:flex-row">
        <AppSidebar />
        <main
          className="flex-1 overflow-x-hidden"
          data-testid="main-layout-content"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
