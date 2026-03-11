import { useCallback, useEffect, useMemo, useState } from "react";

import { createCard, fetchCards, toggleCardFreezeById } from "../api/cards-api";
import type { Card } from "../types/card";

interface UseCardsReturn {
  cards: Card[];
  activeCard: Card | null;
  activeCardId: string;
  isLoading: boolean;
  showCardNumber: boolean;
  setActiveCardId: (id: string) => void;
  setShowCardNumber: React.Dispatch<React.SetStateAction<boolean>>;
  addCard: (name: string) => Promise<Card | undefined>;
  toggleFreeze: () => Promise<void>;
}

export const useCards = (): UseCardsReturn => {
  const [cards, setCards] = useState<Card[]>([]);
  const [activeCardId, setActiveCardId] = useState<string>("");
  const [showCardNumber, setShowCardNumber] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      const initialCards = await fetchCards();
      setCards(initialCards);
      setActiveCardId(initialCards[0]?.id ?? "");
      setIsLoading(false);
    };
    init();
  }, []);

  const addCard = useCallback(
    async (name: string): Promise<Card | undefined> => {
      const updated = await createCard(name);
      const last = updated[updated.length - 1];
      setCards(updated);
      setActiveCardId(last?.id ?? "");
      return last;
    },
    [],
  );

  const toggleFreeze = useCallback(async (): Promise<void> => {
    if (!activeCardId) return;
    const updated = await toggleCardFreezeById(activeCardId);
    setCards(updated);
  }, [activeCardId]);

  const activeCard = useMemo(
    () => cards.find((c) => c.id === activeCardId) ?? null,
    [cards, activeCardId],
  );

  return {
    cards,
    activeCard,
    activeCardId,
    isLoading,
    showCardNumber,
    setActiveCardId,
    setShowCardNumber,
    addCard,
    toggleFreeze,
  };
};
