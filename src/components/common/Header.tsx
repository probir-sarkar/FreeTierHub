import { Search, UserIcon } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavUser from "./NavUser";
import { MENU_ITEMS } from "@/utils/data";

const Header = () => {
  return (
    <header className=" py-4 px-6 md:px-8 flex items-center justify-between container border-b">
      <MobileMenu />
      <div className="flex items-center">
        <Link className="text-xl font-bold ml-6 md:ml-0" href="/">
          FreeHubTier
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        {MENU_ITEMS.map((item, index) => (
          <Link key={index} className="" href={item.slug}>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Link className="hover:text-gray-400" href="#">
          <Search className="w-6 h-6" />
        </Link>
        <NavUser />
      </div>
    </header>
  );
};

export default Header;
