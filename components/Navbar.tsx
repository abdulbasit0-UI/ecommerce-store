import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./NavbarActions";

const Navbar = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 flex gap-x-4">
            <p className="font-bold text-xl">UMARTECH</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
