import AspireLogo from "../../assets/images/Aspire Logo@3x.png";
import VisaLogo from "../../assets/images/Visa Logo@3x.png";
import RemoveEyeLogo from "../../assets/images/remove_red_eye-24px@3x.png";
import type { Card } from "../../types/card";

interface DebitCardCarouselProps {
  cards: Card[];
  activeCard: Card | null;
  showCardNumber: boolean;
  onToggleNumber: () => void;
  onCardChange: (id: string) => void;
}

export const DebitCardCarousel = ({
  cards,
  activeCard,
  showCardNumber,
  onToggleNumber,
  onCardChange,
}: DebitCardCarouselProps) => {
  const currentIndex = cards.findIndex((c) => c.id === activeCard?.id);

  const goToCard = (direction: -1 | 1) => {
    const next = (currentIndex + direction + cards.length) % cards.length;
    onCardChange(cards[next].id);
  };

  return (
    <section data-testid="debit-card-carousel">
      <div className="flex items-center gap-2 text-aspire-green justify-end">
        <img src={RemoveEyeLogo} alt="eye logo" className="w-4 h-4" />

        <button
          type="button"
          onClick={onToggleNumber}
          className="text-xxs leading-description font-bold text-aspire-green"
        >
          {showCardNumber ? "Hide card number" : "Show card number"}
        </button>
      </div>

      {/* <CompanyCard /> */}
      <div className="mt-3">
        <div
          className={`flex flex-col p-7 rounded-xl transition-all duration-300 ${
            activeCard?.frozen
              ? "bg-gray-400 opacity-60" // NEW: frozen style
              : "bg-aspire-green shadow-[0_20px_40px_rgba(1,209,103,0.28)]"
          }`}
        >
          {/* Aspire logo — original */}
          <div className="flex justify-end">
            <img src={AspireLogo} alt="Aspire logo" className="w-20 h-6" />
          </div>

          {/* Card holder name */}
          <p className="text-lg leading-description tracking-wide font-bold text-aspire-white mt-7">
            {activeCard?.holderName}
          </p>

          {/* Card number  */}
          <p className="mt-7 text-sm leading-card text-aspire-white font-bold tracking-[0.96em]">
            {showCardNumber ? activeCard?.number : activeCard?.maskedNumber}
          </p>

          {/* Expiry + CVV */}
          <div className="mt-4 flex items-center gap-12 text-xs text-aspire-white font-bold">
            <div className="flex gap-2 leading-sm">
              <p className="tracking-[0.05em]">Thru:</p>
              <p className="tracking-[0.25em]">{activeCard?.expiry}</p>
            </div>
            <div className="flex items-center gap-2 leading-lg">
              <p className="tracking-[0.05em]">CVV: </p>
              <p className="text-lg tracking-[0.45em]">***</p>
            </div>
          </div>

          {/* Visa logo — original */}
          <div className="flex justify-end mt-1">
            <img src={VisaLogo} alt="Visa logo" className="max-w-16 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
