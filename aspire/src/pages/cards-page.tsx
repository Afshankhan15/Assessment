import BoxIcon from "../assets/images/box@3x.png";
import AspireLogo from "../assets/images/Aspire Logo.png";
import VisaLogo from "../assets/images/Visa Logo@3x.png";
import RemoveEyeLogo from "../assets/images/remove_red_eye-24px@3x.png";

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

      {/* card page content - section */}

      <div className="bg-aspire-white grid grid-cols-2 px-10 py-8 mt-4 border border-aspire-white-light shadow-aspire-shadow rounded-2xl shadow-[0_20px_40px_rgba(1,209,103,0.28)] transition-opacity duration-300">
        {/* 1st div */}
        <div className="flex flex-col">
          {/* show card text */}
          <div className="flex items-center gap-1.5 text-aspire-green justify-end">
            <img src={RemoveEyeLogo} alt="eye logo" className="w-4 h-4" />
            <span className="text-xxs leading-description font-bold">
              Show card number
            </span>
          </div>
          {/* <CompanyCard /> */}
          <div className="mt-3 flex flex-col bg-aspire-green p-7 rounded-xl">
            <div className="flex justify-end">
              <img
                src={AspireLogo}
                alt="Aspire logo"
                className="w-20 h-6 bg-white"
              />
            </div>
            {/* NAME */}
            <p className="text-lg leading-description tracking-wide font-bold text-aspire-white mt-7">
              Mark Henry
            </p>
            {/* CARD NUMBER*/}
            <p className="mt-7 text-sm leading-sm text-aspire-white font-bold tracking-[0.2em]">
              123456789
            </p>
            <div className="mt-4 flex items-center gap-9 text-xs text-aspire-white font-bold">
              <div className="flex gap-1">
                <p className="leading-sm tracking-wide">Thru:</p>
                <p className="leading-sm tracking-wider">12/20</p>
              </div>
              <div className="flex items-center gap-1 leading-lg">
                <p className="tracking-wide">CVV:</p>
                <p className="text-lg tracking-wider">***</p>
              </div>
            </div>
            <div className="flex justify-end">
              <img src={VisaLogo} alt="Visa logo" className="max-w-16 h-5" />
            </div>
          </div>

          <div className=""></div>

          {/* option */}
          <div>OPTIONS</div>
        </div>

        {/* 2nd div: card + transaction */}
        <div className="bg-orange-500">Transaction div</div>
      </div>
    </section>
  );
};

export default CardsPage;
