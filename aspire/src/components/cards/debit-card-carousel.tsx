import AspireLogo from "../../assets/images/Aspire Logo@3x.png";
import VisaLogo from "../../assets/images/Visa Logo@3x.png";
import RemoveEyeLogo from "../../assets/images/remove_red_eye-24px@3x.png";
import type { Card } from "../../types/card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    onCardChange(cards[emblaApi.selectedScrollSnap()].id);
  }, [emblaApi, cards, onCardChange]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    if (emblaApi.selectedScrollSnap() !== currentIndex) {
      emblaApi.scrollTo(currentIndex);
    }
  }, [emblaApi, currentIndex]);

  return (
    <section data-testid="debit-card-carousel">
      <div className="flex items-center gap-2 text-aspire-green justify-end">
        <img
          src={RemoveEyeLogo}
          alt="eye logo"
          onClick={onToggleNumber}
          className={`w-4 h-4 cursor-pointer transition-opacity duration-300 ${
            showCardNumber ? "opacity-30" : "opacity-100"
          }`}
        />
        <button
          type="button"
          className="text-xxs leading-description font-bold text-aspire-green"
        >
          {showCardNumber ? "Hide card number" : "Show card number"}
        </button>
      </div>

      <div className="mt-3 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card) => (
            <div key={card.id} className="flex-[0_0_100%] min-w-0 relative">
              {/* Card body */}
              <div
                className={`flex flex-col p-7 rounded-xl transition-all duration-500 ease-in-out ${
                  card.frozen
                    ? "bg-aspire-green opacity-30"
                    : "bg-aspire-green opacity-100 shadow-[0_20px_40px_rgba(1,209,103,0.28)]"
                }`}
              >
                <div className="flex justify-end">
                  <img
                    src={AspireLogo}
                    alt="Aspire logo"
                    className="w-20 h-6"
                  />
                </div>

                <p className="text-lg leading-description tracking-wide font-bold text-aspire-white mt-7">
                  {card.holderName}
                </p>

                <p className="mt-7 text-sm leading-card text-aspire-white font-bold tracking-[0.96em]">
                  {showCardNumber ? card.number : card.maskedNumber}
                </p>

                <div className="mt-4 flex items-center gap-12 text-xs text-aspire-white font-bold">
                  <div className="flex gap-2 leading-sm">
                    <p className="tracking-[0.05em]">Thru:</p>
                    <p className="tracking-[0.25em]">{card.expiry}</p>
                  </div>
                  <div className="flex items-center gap-2 leading-lg">
                    <p className="tracking-[0.05em]">CVV: </p>
                    <p className="text-lg tracking-[0.45em]">***</p>
                  </div>
                </div>

                <div className="flex justify-end mt-1">
                  <img
                    src={VisaLogo}
                    alt="Visa logo"
                    className="max-w-16 h-5"
                  />
                </div>
              </div>

              {/* Frozen overlay — only shown when this card is frozen */}
              {card.frozen && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-aspire-navy/40 font-bold leading-title text-description">
                    Card Frozen
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-2 mt-4"
        data-testid="carousel-indicator-row"
      >
        {cards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex
                ? "w-4 bg-aspire-green"
                : "w-2 bg-aspire-green/20"
            }`}
            aria-label={`Go to card ${index + 1}`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
};
