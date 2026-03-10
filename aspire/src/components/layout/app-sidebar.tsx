import { NavLink } from "react-router-dom";
import { sidebarNavigation } from "../../constants/navigation";
import AspireLogo from "../../assets/images/Aspire Logo.svg";
import type { NavItem } from "../../types/navigation";

// ── Sub-component with NavItem ────────────────────────
interface SidebarNavLinkProps {
  item: NavItem;
}

const SidebarNavLink = ({ item }: SidebarNavLinkProps) => (
  <NavLink
    to={item.path}
    data-testid={`sidebar-link-${item.id}`}
    className={({ isActive }) =>
      [
        "flex items-center gap-4 transition-colors duration-200 ease-in-out",
        "text-subtitle leading-subtitle",
        isActive ? "text-aspire-green font-bold" : "text-aspire-white",
      ].join(" ")
    }
  >
    <div
      className="h-6 w-6 nav-icon"
      style={{
        WebkitMaskImage: `url(${item.icon})`,
        maskImage: `url(${item.icon})`,
      }}
      data-testid={`sidebar-icon-${item.id}`}
      aria-hidden="true"
    />
    <span data-testid={`sidebar-label-${item.id}`}>{item.label}</span>
  </NavLink>
);

// ── Main sidebar ─────────────────────────────────────────────
export const AppSidebar = () => {
  return (
    <aside
      className="w-full bg-aspire-navy text-aspire-white md:min-h-screen md:w-[25%]"
      data-testid="app-sidebar"
    >
      <div className="pt-16 pl-16" data-testid="sidebar-brand-block">
        <img
          src={AspireLogo}
          alt="Aspire logo"
          className="w-32 h-9"
          data-testid="sidebar-logo"
        />
        <p
          className="mt-5 text-description leading-description opacity-30 pr-14"
          data-testid="sidebar-tagline"
        >
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>

      <nav
        className="pl-16 grid grid-cols-2 gap-16 md:grid-cols-1 mt-20"
        data-testid="sidebar-nav"
      >
        {sidebarNavigation.map((item: NavItem) => (
          <SidebarNavLink key={item.id} item={item} />
        ))}
      </nav>
    </aside>
  );
};
