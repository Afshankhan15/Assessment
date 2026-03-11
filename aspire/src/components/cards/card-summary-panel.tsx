import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import type { Card } from "../../types/card";

import CardDetailsIcon from "../../assets/images/Cards.png";
import TransactionIcon from "../../assets/images/recentTransaction.png";
import DownArrowIcon from "../../assets/images/down-arrow@3x.png";

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
      </Collapsible.Root>
    </section>
  );
};
