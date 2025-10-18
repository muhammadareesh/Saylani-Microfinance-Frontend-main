import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
    <header className="w-full border-b-dark-imperial-blue-border bg-white absolute">
        <nav className="container flex justify-between items-center mx-auto pt-8">
          <h3 className="logo text-2xl font-bold text-dark-imperial-blue ">
            Saylani Welfare
          </h3>
          <ul className="flex items-center gap-5 text-dark-imperial-blue outline-none">
            <li>
              <Link to={"/"} className="font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/loan"} className="font-semibold ">
                Loan Calculator
              </Link>
            </li>
            <li className="flex gap-4 ml-4">
              <Link
                to={"/login"}
                className="border-ufo-green border-2 px-4 py-1 rounded font-semibold transition duration-200 hover:bg-ufo-green"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-ufo-green px-4 py-1 rounded font-semibold border-2 border-ufo-green hover:bg-white transition duration-200"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
