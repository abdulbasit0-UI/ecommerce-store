"use client";

import useCart from "@/hooks/use-cart";
import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";
import Summery from "./Summery";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
        <div className="lg:col-span-7">
          {cart.items.length === 0 && (
            <p className="text-neutral-500">No items added to cart</p>
          )}
          <ul>
            {cart.items.map((item) => {
              return <CartItems key={item.id} data={item} />;
            })}
          </ul>
        </div>
        <Summery />
      </div>
    </div>
  );
};

export default Cart;
