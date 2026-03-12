import type { Card } from "../types/card";
import { buildCard } from "../utils/card-generator";

const STORAGE_KEY = "aspire-cards-v1";

const wait = (ms = 80): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const persistCards = (cards: Card[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};

const getSeedCards = (): Card[] => [
  buildCard("Mark Henry"),
  buildCard("Sarah Adams"),
  buildCard("John Doe"),
];

const readCards = (): Card[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = getSeedCards();
    persistCards(seeded);
    return seeded;
  }
  try {
    return JSON.parse(raw) as Card[];
  } catch {
    const seeded = getSeedCards();
    persistCards(seeded);
    return seeded;
  }
};

export const fetchCards = async (): Promise<Card[]> => {
  await wait();
  return readCards();
};

export const createCard = async (holderName: string): Promise<Card[]> => {
  await wait();
  const cards = readCards();
  const newCard = buildCard(holderName);
  const updated = [...cards, newCard];
  persistCards(updated);
  return updated;
};

export const toggleCardFreezeById = async (cardId: string): Promise<Card[]> => {
  await wait();
  const cards = readCards();
  const updated = cards.map((card) =>
    card.id === cardId ? { ...card, frozen: !card.frozen } : card,
  );
  persistCards(updated);
  return updated;
};
