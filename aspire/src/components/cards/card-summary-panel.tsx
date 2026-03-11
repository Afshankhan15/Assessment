import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import type { Card, Transaction } from "../../types/card";

import FileStorageIcon from "../../assets/images/file-storage@3x.png";
import FlightIcon from "../../assets/images/flights@3x.png";
import MegaPhoneIcon from "../../assets/images/megaphone@3x.png";
import FinanceIcon from "../../assets/images/business-and-finance@3x.png";
import CardDetailsIcon from "../../assets/images/Cards.png";
import TransactionIcon from "../../assets/images/recentTransaction.png";
import DownArrowIcon from "../../assets/images/down-arrow@3x.png";
import NextIcon from "../../assets/images/next@3x.png";

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "t1",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: "150.00",
    type: "credit",
    note: "Refund on debit card",
    iconBg: "#009DFF1A",
    icon: FileStorageIcon,
  },
  {
    id: "t2",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: "150.00",
    type: "debit",
    note: "Charged to debit card",
    iconBg: "#00D6B51A",
    icon: FlightIcon,
  },
  {
    id: "t3",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: "150.00",
    type: "debit",
    note: "Charged to debit card",
    iconBg: "#F251951A",
    icon: MegaPhoneIcon,
  },
  {
    id: "t4",
    merchant: "Hamleys",
    date: "20 May 2020",
    amount: "150.00",
    type: "debit",
    note: "Charged to debit card",
    iconBg: "#009DFF1A",
    icon: FileStorageIcon,
  },
];

const DebitCardChip = ({ note }: { note: string }) => (
  <div className="flex gap-2 items-center mt-3">
    <div className="shrink-0 h-5 w-6 rounded-full flex items-center justify-center bg-aspire-blue">
      <img
        src={FinanceIcon}
        alt="card"
        className="w-2.5 h-[0.49rem] object-contain"
      />
    </div>
    <span className="text-aspire-blue text-xxs leading-sm font-semibold">
      {note}
    </span>
  </div>
);
interface CardSummaryPanelProps {
  activeCard: Card | undefined;
}

export const CardSummaryPanel = ({ activeCard }: CardSummaryPanelProps) => {
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);
  const [transactionsOpen, setTransactionsOpen] = useState(true);

  return (
    <section className="bg-aspire-white mt-[3.782rem]">
      {/* Card Details */}
      <Collapsible.Root
        open={cardDetailsOpen}
        onOpenChange={setCardDetailsOpen}
      >
        <Collapsible.Trigger
          className="bg-aspire-background border border-aspire-border rounded-xl shadow shadow-aspire-shadow-card flex w-full items-center justify-between px-6 py-6 text-left"
          data-testid="card-details-toggle"
        >
          <div className="flex items-center gap-3">
            <img
              src={CardDetailsIcon}
              alt="Card details"
              className="w-6 h-6 object-contain"
            />
            <span className="text-aspire-navy text-sm leading-sm">
              Card details
            </span>
          </div>
          <img
            src={DownArrowIcon}
            alt="toggle"
            className={`w-5 h-5 object-contain transition-transform duration-300 ${
              cardDetailsOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </Collapsible.Trigger>

        {/* <Collapsible.Content className="px-5 pb-5">
          <div
            className="space-y-2 text-sm text-[#53617d]"
            data-testid="card-details-content"
          >
            <p>
              <span className="font-medium">Card holder:</span>{" "}
              {activeCard?.holderName ?? "—"}
            </p>
            <p>
              <span className="font-medium">Card number:</span>{" "}
              {activeCard?.maskedNumber ?? "—"}
            </p>
            <p>
              <span className="font-medium">Expiry:</span>{" "}
              {activeCard?.expiry ?? "—"}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span
                className={
                  activeCard?.frozen ? "text-red-500" : "text-aspire-green"
                }
              >
                {activeCard?.frozen ? "Frozen" : "Active"}
              </span>
            </p>
          </div>
        </Collapsible.Content> */}
      </Collapsible.Root>

      {/* Recent Transactions */}
      <Collapsible.Root
        open={transactionsOpen}
        onOpenChange={setTransactionsOpen}
      >
        <Collapsible.Trigger
          className="bg-aspire-background mt-6 border border-aspire-border rounded-xl shadow shadow-aspire-shadow-card flex w-full items-center justify-between px-6 py-6 text-left"
          data-testid="recent-transactions-toggle"
        >
          <div className="flex items-center gap-3">
            <img
              src={TransactionIcon}
              alt="Recent transactions"
              className="w-6 h-6 object-contain"
            />
            <span className="text-aspire-navy text-sm leading-sm">
              Recent transactions
            </span>
          </div>
          <img
            src={DownArrowIcon}
            alt="toggle"
            className={`w-5 h-5 object-contain transition-transform duration-300 ${
              transactionsOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </Collapsible.Trigger>

        {/* MOCK TRANSACTIONS */}

        <Collapsible.Content className="px-6">
          <div className="flex flex-col">
            {MOCK_TRANSACTIONS.map((item) => (
              <article
                key={item.id}
                className="flex items-start gap-3 bg-aspire-white border-b-2 border-aspire-border pt-5 pb-4.5"
                data-testid={`transaction-item-${item.id}`}
              >
                {/* Left: icon */}
                <div
                  className="shrink-0 h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <img
                    src={item.icon}
                    alt={item.note}
                    className="h-[0.945rem] w-4 object-contain"
                  />
                </div>

                {/* Right: all content */}
                <div className="flex-1 min-w-0">
                  {/* Row 1: merchant name + amount + arrow */}
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm leading-sm font-semibold text-aspire-black">
                      {item.merchant}
                    </p>
                    <div className="flex gap-2.5 items-center shrink-0">
                      <p
                        className={`text-sm leading-sm font-bold whitespace-nowrap ${
                          item.type === "credit"
                            ? "text-aspire-green"
                            : "text-aspire-black"
                        }`}
                      >
                        {item.type === "credit" ? "+ S$" : "- S$"} {item.amount}
                      </p>
                      <img
                        src={NextIcon}
                        alt="view"
                        className="w-[0.41rem] h-3 object-contain"
                      />
                    </div>
                  </div>

                  {/* Row 2: date */}
                  <p className="text-xs leading-sm text-aspire-gray mt-1">
                    {item.date}
                  </p>

                  {/* Row 3: chip */}
                  <DebitCardChip note={item.note} />
                </div>
              </article>
            ))}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </section>
  );
};
