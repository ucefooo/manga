"use client";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const ButtonSearch = () => {
  return (
    <div className="w-[10%] flex justify-between items-center">
      <button
        className="bg-white text-inherit p-2 rounded-[20px] transition duration-200 hover:bg-black hover:text-white"
        onClick={() => {
          console.log("gfgf");
        }}
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
      <Link href="/" passHref className="text-white">
        متقدم
      </Link>
    </div>
  );
};

export default ButtonSearch;
