import HomeIcon from "../assets/images/Home.svg";
import CardIcon from "../assets/images/Card.svg";
import PaymentsIcon from "../assets/images/Payments.svg";
import CreditIcon from "../assets/images/Credit.svg";
import SettingsIcon from "../assets/images/Account.svg";
import type { NavItem } from "../types/navigation";

export const sidebarNavigation: NavItem[] = [
  { id: "home", label: "Home", path: "/home", icon: HomeIcon },
  { id: "cards", label: "Cards", path: "/cards", icon: CardIcon },
  { id: "payments", label: "Payments", path: "/payments", icon: PaymentsIcon },
  { id: "credit", label: "Credit", path: "/credit", icon: CreditIcon },
  { id: "settings", label: "Settings", path: "/settings", icon: SettingsIcon },
];
