import getBillBoards from "@/actions/get-billboards";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import BillBoard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
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
        <div className="grid grid-rows-6 grid-cols-12  h-[350px] grid-flow-col gap-4 mt-5">
          <div
            style={{ backgroundImage: "url('/banner-1.jpg')" }}
            className="row-span-6 col-span-4 border bg-cover"
          ></div>
          <div
            style={{ backgroundImage: "url('/banner-2.png')" }}
            className="col-span-3 bg-cover  row-span-3"
          >
            02
          </div>
          <div
            style={{ backgroundImage: "url('/banner-4.png')" }}
            className="col-span-3  row-span-3 bg-cover"
          >
            03
          </div>
          <div
            style={{ backgroundImage: "url('/banner-3.png')" }}
            className="row-span-6 col-span-6 bg-cover"
          >
            04
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {getCategorie.map((cat) => {
            return (
              <div className="flex flex-col items-center">
                <div
                  className="h-28 w-28 bg-cover  rounded-full border"
                  style={{ backgroundImage: `url(${cat.imageUrl})` }}
                ></div>
                <p className="mt-3 font-semibold">{cat.name}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
