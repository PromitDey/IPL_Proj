import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="rounded-lg h-20 header-custom flex justify-between items-center px-[50px]">
      <div>
        <Link to="/">
          <li className="list-none text-xl font-extrabold app-logo drop-shadow-2xl">
            Fantasy XI
          </li>
        </Link>
      </div>
      <div className="flex items-center space-x-8 list-none text-xl font-semibold text-white">
        <Link to="/">
          <li className="">Home</li>
        </Link>
        <Link to="/about">
          <li className="">About Us</li>
        </Link>
        <Link to="/predict">
          <li className="">Predict</li>
        </Link>
        <Link to="/faq">
          <li className="">FAQs</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
