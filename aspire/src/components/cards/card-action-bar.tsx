import type { Card } from "../../types/card";
import FreezeCardIcon from "../../assets/images/Freeze.png";
import SetSpendIcon from "../../assets/images/Set.png";
import GPayIcon from "../../assets/images/GPay.png";
import ReplaceIcon from "../../assets/images/Replace.png";
import DeactivateIcon from "../../assets/images/Deactivate.png";

interface CardActionBarProps {
  activeCard: Card | null;
  onToggleFreeze: () => Promise<void>;
}

export const CardActionBar = ({
  activeCard,
  onToggleFreeze,
}: CardActionBarProps) => {
  const actions: {
    id: string;
    label: string;
    icon: string;
    onClick?: () => void;
    isPrimary?: boolean;
  }[] = [
    {
      id: "freeze-toggle",
      label: activeCard?.frozen ? "Unfreeze card" : "Freeze card",
      icon: FreezeCardIcon,
      onClick: onToggleFreeze,
      isPrimary: true,
    },
    { id: "spend-limit", label: "Set spend limit", icon: SetSpendIcon },
    { id: "gpay", label: "Add to GPay", icon: GPayIcon },
    { id: "replace", label: "Replace card", icon: ReplaceIcon },
    { id: "cancel", label: "Cancel card", icon: DeactivateIcon },
  ];

  return (
    <div className="flex mt-8 bg-aspire-background-light gap-7 py-5 px-8 rounded-xl">
      {actions.map(({ id, label, icon, onClick, isPrimary }) => (
        <button
          key={id}
          type="button"
          onClick={onClick}
          className={`flex flex-col items-center justify-center gap-2 transition-all duration-300 ease-in-out cursor-pointer `}
          data-testid={`card-action-${id}`}
        >
          <span className="flex items-center h-8 w-8 rounded-full">
            <img src={icon} alt={label} className="h-8 w-8" />
          </span>
          <span className="text-aspire-navy text-xs leading-xxs text-center">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};
