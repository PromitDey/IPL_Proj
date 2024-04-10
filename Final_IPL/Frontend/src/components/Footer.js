import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTelegram,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { fairPlayLogo } from "../utils/constants.js";

const Footer = () => {
  return (
    <div className="footer-custom w-full h-[600px] mt-12">
      <div className="px-[200px]">
        <div className="flex justify-between p-8 ">
          <div className="">
            <div className="ml-10">
              <p className="font-semibold text-5xl text-white">
                Fantasy <span className="app-logo">XI</span>
              </p>
              <div className="flex list-none mt-4 mx-8 space-x-3 text-3xl ">
                <li>
                  <FaTwitterSquare
                    style={{
                      color: "#ffffff",
                    }}
                  />
                </li>
                <li>
                  <FaFacebookSquare
                    style={{
                      color: "#ffffff",
                    }}
                  />
                </li>
                <li>
                  <FaLinkedin
                    style={{
                      color: "#ffffff",
                    }}
                  />
                </li>
                <li>
                  <FaTelegram
                    style={{
                      color: "#ffffff",
                    }}
                  />
                </li>
              </div>
            </div>
          </div>
          <div className="ml-[100px] mr-[-100px] space-y-[60px] my-3 text-center">
            <div className="list-none text-white text-2xl font-light space-y-4">
              <li>Fantasy Cricket</li>
              <li>Fantasy Basketball</li>
              <li>Fantasy Football</li>
              <li>Fantasy Kabaddi</li>
            </div>
            <div className="list-none text-white text-2xl font-light space-y-6">
              <li>Help & Support</li>
              <li>Community Guidelines</li>
            </div>
          </div>
          <div className="mr-[-100px]">
            <div className="border-2 border-gray-300 h-[342px] "></div>
          </div>
          <div className="mr-10">
            <div className="space-y-[85px]">
              <img
                src={fairPlayLogo}
                alt="Fair-Play-Logo"
                className="w-[163px] h-[163px]"
              />
              <div className="list-none text-white text-2xl font-light text-center space-y-6">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="border-2 border-white w-[1205px]"></div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center space-x-2">
          <div className="mt-2">
            <FaMapMarkedAlt
              style={{
                color: "#ffffff",
              }}
            />
          </div>
          <span className="font-semibold text-xl text-white">
            Corporate Office
          </span>
        </div>
        <div className="flex justify-center mt-1">
          <p className="text-white text-lg font-light">
            109 Satam Indl Estate, C.g.road, Sahar{" "}
            <span>Mumbai, Maharashtra, 400099</span>
          </p>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex justify-center">
          <p className="text-yellow-300 font-semibold text-sm">
            This game may be habit-forming or financially risky. Play
            responsibly
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-white font-semibold text-light">
            Disclaimer: This website is crafted solely for educational purposes.
            While it may feature multiple brands, it does not endorse or
            denigrate any specific brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
