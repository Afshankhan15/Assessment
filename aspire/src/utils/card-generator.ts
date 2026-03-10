import type { Card } from "../types/card";

const generateId = (): string =>
  `card_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

const generateCardNumber = (): string => {
  const groups = Array.from({ length: 4 }, () =>
    Math.floor(1000 + Math.random() * 9000).toString(),
  );
  return groups.join(" ");
};

const maskCardNumber = (number: string): string => {
  const parts = number.split(" ");
  return parts
    .map((part, index) => (index < 3 ? "•••• " : part))
    .join("")
    .trim();
};

const generateExpiry = (): string => {
  const month = Math.floor(1 + Math.random() * 12)
    .toString()
    .padStart(2, "0");
  const year = (new Date().getFullYear() + Math.floor(1 + Math.random() * 5))
    .toString()
    .slice(2);
  return `${month}/${year}`;
};

const generateCvv = (): string =>
  Math.floor(100 + Math.random() * 900).toString();

export const buildCard = (holderName: string): Card => {
  const number = generateCardNumber();
  return {
    id: generateId(),
    holderName,
    number,
    maskedNumber: maskCardNumber(number),
    expiry: generateExpiry(),
    cvv: generateCvv(),
    scheme: "VISA",
    frozen: false,
    createdAt: new Date().toISOString(),
  };
};
