import BoxIcon from "../assets/images/box@3x.png";

const CardsPage = () => {
  return (
    <section className="p-16">
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
          <button className="flex bg-aspire-blue text-aspire-white font-bold items-center gap-2 px-3 py-2 rounded-md">
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
    </section>
  );
};

export default CardsPage;
