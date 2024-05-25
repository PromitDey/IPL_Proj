import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
} from "../utils/brandPartner";

const OffPartner = () => {
  return (
    <div className="mt-12">
      <h2 className="font-extrabold text-4xl text-center text-white">
        Offical <span className="app-logo">Partner</span>
      </h2>
      <div className="flex p-2 space-x-4 justify-center mt-4">
        <div className="border-2 border-white h-[100px] w-[125px] rounded-lg bg-white flex justify-center items-center hover:drop-shadow-xl">
          <img src={logo1} alt="TATA-IPL-LOGO" />
        </div>
        <div className="border-2 border-white h-[100px] w-[125px] rounded-lg bg-white flex justify-center items-center hover:drop-shadow-xl">
          <img src={logo2} alt="STAR_SPORTS_LOGO" />
        </div>
        <div className="border-2 border-white h-[100px] w-[125px] rounded-lg bg-white flex justify-center items-center p-2 hover:drop-shadow-xl">
          <img src={logo3} alt="CEAT-LOGO" />
        </div>
        <div className="border-2 border-white h-[100px] w-[125px] rounded-lg bg-white flex justify-center items-center p-2 hover:drop-shadow-xl">
          <img src={logo4} alt="ZERODHA-LOGO" />
        </div>
      </div>
      <div className="flex p-2 space-x-4 justify-center mt-4">
        <div className="border-2 border-white h-[100px] w-[125px] rounded-lg bg-white flex justify-center items-center hover:drop-shadow-xl">
          <img src={logo5} className="h-20" />
        </div>
        <div className="border-2 border-white h-[100px] w-[125px] rounded-lg bg-white flex justify-center items-center hover:drop-shadow-xl">
          <img src={logo6} className="h-[100px]" />
        </div>
        <div className="border-2 border-white h-[100px] w-[125px] rounded-lg bg-white flex justify-center items-center hover:drop-shadow-xl">
          <img src={logo7} className="h-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default OffPartner;
