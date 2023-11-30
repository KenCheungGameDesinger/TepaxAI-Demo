"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-lg font-bold">TepaxAI</div>
        <div className="flex items-center">
          <Link href={"/marketplace"}>
            <button
              className="text-white mr-4"
              //   onClick={() => setPage('marketplace')}
            >
              Marketplace
            </button>
          </Link>
          <Link href={"/admin"}>
            <button
              className="text-white mr-4"
              //   onClick={() => setPage('marketplace')}
            >
              Admin
            </button>
          </Link>
          {/* <button
            className="text-white"
            //   onClick={() => setPage('admin')}
          >
            Admin
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
