"use client";
import Image from "next/image";
import Header from "../components/global/header";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/global/search";
import { UserNav } from "@/components/global/user-nav";
import TeamSwitcher from "@/components/global/team-switcher";
import { SidebarExample } from "@/components/examples/sidebar-example";
import { playlists } from "@/data/playlists";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { DemoPaymentMethod } from "@/components/form/payment-method";
import { CategorySelectForm } from "@/components/form/category-select";
import React from "react";
import ProgressBarExample from "@/components/examples/progress-bar-example";
import { Input as NInput, Tooltip } from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import { SheetExample } from "@/components/examples/sheet-example";
import LocationInput from "@/components/form/location-input";
import { Metadata } from "next";
import { motion } from "framer-motion";
import DestinationForm from "@/content/initialize/destination-form";
import { TabsContent } from "@radix-ui/react-tabs";
import { ThemeToggle } from "@/components/global/ThemeToggle";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SidebarNav } from "@/components/global/sidebar-nav";
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

// export const metadata: Metadata = {
//   title: "TourGo | Trip planner AI",
//   description: "Generated complete travel plan for free with AI powered!",
//   keywords: [
//     "Trip",
//     "Travel",
//     "AI",
//     "Planning",
//     "TourGo",
//     "TepaxAI",
//     "Trip planner",
//     "Tourism",
//     "Travel Planner",
//   ],
//   verification: { google: "7AjQ2sQF0QQYSO3ZbDrdT4WgccEBeNoFXuWV_QmaZjQ" },
// };

export default function Home() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            {/* <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              <Search />
              <ConnectButton label="Connect Wallet" />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      {/* <Header /> */}
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
              <SidebarExample playlists={playlists} />
              <div className="w-full col-span-3 lg:col-span-4 lg:border-l">
                <ProgressBarExample />
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Step 1
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Step 2</TabsTrigger>
                        <TabsTrigger value="live" disabled>
                          Step 3
                        </TabsTrigger>
                      </TabsList>

                      <div className="ml-auto mr-4 space-x-4">
                        <Tooltip
                          showArrow={true}
                          // color="primary"
                          placement="bottom"
                          content="Coming soon!"
                        >
                          <Button>
                            <PlusCircledIcon className="mr-2 h-4 w-4" />
                            Generate with AI
                          </Button>
                        </Tooltip>
                        <SheetExample />
                      </div>
                    </div>
                    <TabsContent value="music">
                      <div className="grid v-screen place-items-center py-6 space-y-9">
                        {/* Main Content */}
                        <CategorySelectForm />
                      </div>
                      <DestinationForm />
                      {/* <LocationInput /> */}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Button>Test Button</Button> */}
    </>
  );
}
