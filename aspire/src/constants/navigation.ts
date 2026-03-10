import HomeIcon from "../assets/images/Home.png";
import CardIcon from "../assets/images/Card.png";
import PaymentsIcon from "../assets/images/Payments.png";
import CreditIcon from "../assets/images/Credit.png";
import SettingsIcon from "../assets/images/Account.png";
import type { NavItem } from "../types/navigation";

export const sidebarNavigation: NavItem[] = [
  { id: "home", label: "Home", path: "/home", icon: HomeIcon },
  { id: "cards", label: "Cards", path: "/cards", icon: CardIcon },
  { id: "payments", label: "Payments", path: "/payments", icon: PaymentsIcon },
  { id: "credit", label: "Credit", path: "/credit", icon: CreditIcon },
  { id: "settings", label: "Settings", path: "/settings", icon: SettingsIcon },
];
