"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-row justify-between items-center w-screen h-[10vh] px-[25vw] bg-gray-950">
        <li>
          <Link
            href="/"
            className={`text-lg py-2 px-2 rounded ${
              pathname === "/"
                ? "text-gray-100 bg-gray-600"
                : "text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 transition-colors"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contribute"
            className={`text-lg py-2 px-2 rounded ${
              pathname === "/contribute"
                ? "text-gray-100 bg-gray-600"
                : "text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 transition-colors"
            }`}
          >
            Contribute
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className={`text-lg py-2 px-2 rounded ${
              pathname === "/dashboard"
                ? "text-gray-100 bg-gray-600"
                : "text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 transition-colors"
            }`}
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
