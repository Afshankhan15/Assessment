export interface Card {
  id: string;
  holderName: string;
  number: string;
  maskedNumber: string;
  expiry: string;
  cvv: string;
  scheme: "VISA" | "Mastercard";
  frozen: boolean;
  createdAt: string;
}

export interface Transaction {
  id: string;
  merchant: string;
  date: string;
  amount: string;
  type: "credit" | "debit";
  note: string;
}

export interface CardsState {
  cards: Card[];
  activeCardId: string;
  isLoading: boolean;
  showCardNumber: boolean;
}
