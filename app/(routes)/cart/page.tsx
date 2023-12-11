import Cart from "@/components/Cart";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const CartPage = () => {
  return (
    <div className="bg-white">
      <Container>
        <Cart />
      </Container>
    </div>
  );
};

export default CartPage;
