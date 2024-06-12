'use server';

import Image from "next/image";
import Link from "next/link";
import ButtonSearch from "./ButtonSearch";
import ListHeader from "./ListHeader";

const Header = () => {
  return (
    <header className="w-full h-[15%] px-5 py-4 bg-blue-600">
      <div className="flex w-full h-full justify-around items-center">
        <div className="w-[25%] min-w-40  flex justify-center items-center">
            <Link href="/" passHref>
                    <Image src="/mangalek.png" alt="manga" width={200} height={200} />
            </Link>
        </div>
        <ListHeader />
        <ButtonSearch />
      </div>
    </header>
  );
};

export default Header;
