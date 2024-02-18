"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export const OrgSidebar = () => {
  return (
    <div className="lg:flex flex-col pace-y-6 w-[206px] pl-5 pt-5 bg-red-500">
      Org SideBar
    </div>
  )
}