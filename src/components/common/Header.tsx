import { Search, UserIcon } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className=" py-4 px-6 md:px-8 flex items-center justify-between container border-b">
      <MobileMenu />
      <div className="flex items-center">
        <Link className="text-xl font-bold ml-6 md:ml-0" href="#">
          FreeHubTier
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link className="" href="#">
          Categories
        </Link>
        <Link className="" href="#">
          Products
        </Link>
        <Link className="" href="#">
          About
        </Link>
        <Link className="" href="#">
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link className="hover:text-gray-400" href="#">
          <Search className="w-6 h-6" />
        </Link>
        <Link className="hover:text-gray-400" href="#">
          <UserIcon className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
