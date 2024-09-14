import { Button } from "@/components/ui/button";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { MENU_ITEMS } from "@/utils/data";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b">
          <SheetTitle className="text-start text-2xl bo">MENU</SheetTitle>
        </SheetHeader>
        <nav className="pl-2">
          {MENU_ITEMS.map((item, index) => (
            <SheetClose key={item.slug} asChild>
              <Link className="block border-b pt-4 pb-2 text-xl font-semibold" href={item.slug}>
                {item.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
        {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
