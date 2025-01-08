import { NavLink, Link } from "react-router-dom";

import '../../input.css'
import '../../output.css'

const Navbar = (): JSX.Element => {
  return (



    <nav className="flex justify-around items-center w-full bg-black border-gray-200 dark:bg-gray-900 mx-auto p-4">
      <Link to="/" className="text-green-500 text-2xl flex items-center space-x-3 rtl:space-x-reverse">
        Rick & Morty <span className="text-white  self-center text-sm font-semibold whitespace-nowrap dark:text-white">WiKi</span>
      </Link>

      <ul className="gap-15 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-white md:dark:bg-white dark:border-gray-700">
        <NavLink to="/" className="w-24 text-center block py-2 px-3 text-white bg-green-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent rotate-2">
          Characters
        </NavLink>
        <NavLink to="/episodes" className="w-24 text-center block py-2 px-3 text-white bg-green-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent rotate-12">
          Episode
        </NavLink>
        <NavLink to="/location" className="w-24 text-center block py-2 px-3 text-white bg-green-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Location
        </NavLink>
      </ul>

    </nav>

  );
};

export default Navbar;