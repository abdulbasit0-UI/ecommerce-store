import getBillBoards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import BillBoard from "@/components/BillBoard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillBoards(
    "252e9ec2-1bd2-4975-b376-14e1b7196048"
  );
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillBoard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
