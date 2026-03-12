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
    line1: string;
    line2: string;
    icon: string;
    onClick?: () => void;
  }[] = [
    {
      id: "freeze-toggle",
      line1: activeCard?.frozen ? "Unfreeze" : "Freeze",
      line2: "card",
      icon: FreezeCardIcon,
      onClick: onToggleFreeze,
    },
    {
      id: "spend-limit",
      line1: "Set spend",
      line2: "limit",
      icon: SetSpendIcon,
    },
    { id: "gpay", line1: "Add to", line2: "GPay", icon: GPayIcon },
    { id: "replace", line1: "Replace", line2: "card", icon: ReplaceIcon },
    { id: "cancel", line1: "Cancel", line2: "card", icon: DeactivateIcon },
  ];

  return (
    <div className="flex mt-6 xl:mt-8 justify-between py-5 px-6 xl:px-8 bg-aspire-background-light rounded-xl">
      {actions.map(({ id, line1, line2, icon, onClick }) => (
        <button
          key={id}
          type="button"
          onClick={onClick}
          className="flex flex-col items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-70 cursor-pointer"
          data-testid={`card-action-${id}`}
        >
          <img
            src={icon}
            alt={`${line1} ${line2}`}
            className="h-8 w-8 object-contain"
          />
          <span className="flex flex-col items-center text-aspire-navy text-xs leading-tight text-center">
            <span>{line1}</span>
            <span>{line2}</span>
          </span>
        </button>
      ))}
    </div>
  );
};
