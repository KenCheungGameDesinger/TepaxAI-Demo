import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/global/search";
import { UserNav } from "@/components/global/user-nav";
import TeamSwitcher from "@/components/global/team-switcher";
import { Sidebar } from "../../components/component-zn/sidebar";
import { playlists } from "@/data/playlists";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />

            </div>
          </div>
        </div>
      </div>
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background ">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists}/>
          </div>
        </div>
      </div>
      </div>
      {/* <Button>Test Button</Button> */}
    </>
  );
}
