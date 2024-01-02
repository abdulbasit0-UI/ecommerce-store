import getBillBoards from "@/actions/get-billboards";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import BillBoard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillBoards(
    "ec0f8dab-439b-4c25-ae32-7e374cda9f5e"
  );
  const products = await getProducts({ isFeatured: true });
  const getCategorie = await getCategories();
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <BillBoard data={billboards} /> */}
        <div className="flex items-center justify-between h-[400px] px-4">
          <div>
            <h1 className="text-8xl font-bold">
              Premium <br />
              Items
            </h1>
            <p>
              Buy the best high-quality home decor items from us. More than 100
              types of assortment.
            </p>
            <Button className="mt-5">shop now</Button>
          </div>
          <div>
            <Image alt="leaves" src="/leaves.png" height={400} width={300} />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
