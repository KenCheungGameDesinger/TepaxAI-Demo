import React from "react";
import TeamSwitcher from "./team-switcher";
import { ThemeToggle } from "./ThemeToggle";
import { Search } from "lucide-react";
import { UserNav } from "./user-nav";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          {/* <MainNav className="mx-6" /> */}
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <Search/>
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
