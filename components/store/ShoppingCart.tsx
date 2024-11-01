"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart, CircleX } from "lucide-react";

import { selectCart } from "../../store/CartSlice";
import Cart from "./Cart";

const ShoppingCartComp = () => {
  // open/close cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Redux stuff for managing the shopping cart
  const cart = useSelector(selectCart);

  return (
    <>
      {/* cart icon */}
      <div
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed bottom-24 end-6 z-50 flex items-center justify-center gap-4 rounded-full bg-green-500 px-4 py-4 text-white hover:scale-110 animate-in ease-in duration-200">
        <ShoppingCart className=" text-lg flex items-center justify-center " />
      </div>

      {/* cart - start */}
      {isCartOpen && (
        <div className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-filter backdrop-blur-lg">
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div
              className="absolute ml-4 mt-4 flex items-center gap-1 cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}>
              <CircleX /> Close
            </div>
            <Cart cart={cart} />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartComp;
