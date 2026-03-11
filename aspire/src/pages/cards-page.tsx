import { useState } from "react";
import BoxIcon from "../assets/images/box@3x.png";
import { useCards } from "../hooks/use-cards";
import { AddCardDialog } from "../components/cards/add-card-dialog";
import { DebitCardCarousel } from "../components/cards/debit-card-carousel";

const CardsPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");

  const {
    cards,
    activeCard,
    activeCardId,
    isLoading,
    showCardNumber,
    setShowCardNumber,
    setActiveCardId,
    addCard,
    toggleFreeze,
  } = useCards();

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  const handleAddCard = async (name: string) => {
    await addCard(name);
    setIsDialogOpen(false);
    showToast("New card added successfully!");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-aspire-black opacity-70">
          Loading your cards...
        </p>
      </div>
    );
  }

  return (
    <section className="p-16">
      {/* Toast notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 rounded-lg bg-aspire-green px-5 py-3 text-sm font-semibold text-white shadow-lg">
          {toast}
        </div>
      )}

      {/* HEADER SECTION */}
      <header className="flex flex-col">
        <p className="text-sm leading-xs">Available balance</p>

        <div className="flex flex-wrap justify-between items-center mt-2.5">
          <div className="flex gap-3 items-center">
            <span className="text-xs leading-xs bg-aspire-green text-aspire-white px-3 py-1 rounded-sm">
              S$
            </span>
            <span className="text-title leading-xs font-bold">3,000</span>
          </div>

          {/* Add Card modal */}
          <button
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className="flex bg-aspire-blue text-aspire-white font-bold items-center gap-2 px-3 py-2 rounded-lg hover:bg-aspire-blue/90 transition-colors cursor-pointer duration-20"
          >
            <img className="h-5 w-5" src={BoxIcon} alt="box icon" />
            <span className="text-xs leading-sm">New card</span>
          </button>
        </div>
      </header>

      {/* tab section */}
      <div className="flex gap-8 mt-9 text-sm leading-description text-aspire-black">
        <button className="font-semibold border-b-2 border-aspire-blue-light pb-1">
          My debit cards
        </button>
        <button className="opacity-30">All company cards</button>
      </div>

      {/* ── MAIN PANEL*/}
      <div className="bg-aspire-white grid grid-cols-2 px-10 py-8 mt-4 border border-aspire-white-light shadow-aspire-shadow rounded-2xl shadow-[0_20px_40px_rgba(1,209,103,0.28)] transition-opacity duration-300">
        {/* LEFT COLUMN: carousel + action bar */}
        <div className="flex flex-col">
          {/* NEW: replaces the static card — same visual, dynamic data + carousel */}
          <DebitCardCarousel
            cards={cards}
            activeCard={activeCard}
            showCardNumber={showCardNumber}
            onToggleNumber={() => setShowCardNumber((v) => !v)}
            onCardChange={setActiveCardId}
          />
        </div>

        {/* RIGHT COLUMN: card details + transactions */}
        <div className="bg-orange-500">Transaction div</div>
      </div>

      {/* Add Card modal*/}
      <AddCardDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleAddCard}
      />
    </section>
  );
};

export default CardsPage;
