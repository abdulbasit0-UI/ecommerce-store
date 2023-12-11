import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/Gallery";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";
import { Metadata, ResolvedMetadata } from "next";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params, searchParams }: ProductPageProps,
  parent: ResolvedMetadata
): Promise<Metadata> {
  const id = params.productId;

  const product = await getProduct(id);

  return {
    title: `${product.name} | Umartech`,
    description: `${product.name}`,
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />

            <div className=" mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
