import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./NavbarActions";
import { font } from "@/app/layout";
import Image from "next/image";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex justify-between w-full h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 flex ">
            <Image src="/defaultUser.png" className="rounded-full border-2  bg-yellow-300 me-3 hover:bg-yellow-500 cursor-pointer" alt="image" width={40} height={20} />
            <p className={`text-3xl ${font.className}`}>PARTY SHOPE</p>
          </Link>
          <form action="" className="bg-black/[0.075] ml-10 px-3 w-1/4  rounded-full text-sm transition">

          <input type="text" placeholder="Search Products" className=" py-2 px-3 w-full bg-transparent focus:outline-none" name="" id="" />
          </form>
          {/* <MainNav data={categories} /> */}
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
