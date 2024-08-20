import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-between items-center w-screen h-[10vh] px-[25vw] border-4 border-red-500">
        <li>
          <Link href="/" className="text-xs">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contribute" className="text-xs">
            Contribute
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-xs">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
