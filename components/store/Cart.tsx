/* eslint-disable @next/next/no-img-element */
"use client";

import { useDispatch } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";

import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "@/store/CartSlice";
import { CartItem } from "@/store/CartSlice";
import Link from "next/link";

interface CartProps {
  cart: { items: CartItem[] };
}

const Cart = ({ cart }: CartProps) => {
  const dispatch = useDispatch();

  // functions
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item: CartItem) => {
    dispatch(removeItem(item));
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    dispatch(decreaseQuantity(item));
  };

  // calculate sub-total price
  const subTotal =
    cart?.items?.reduce((total: number, item: CartItem) => {
      return total + item.price * item.quantity;
    }, 0) || 0;

  // calculate VAT
  const vatAmount = subTotal * 0.14;

  // calculate total price
  const totalPriceWithVAT = subTotal + vatAmount;
  return (
    <>
      <div className="bg-white h-screen pt-4 rounded-xl overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          {cart.items.length > 0 ? (
            <>
              <div className="mb-6">
                <h2 className="text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Your Cart
                </h2>
              </div>
              {cart.items.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
                    {/* product - start */}
                    <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border gap-y-4 lg:gap-6">
                      <span className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40">
                        <img
                          src={item.image}
                          loading="lazy"
                          alt={item.name}
                          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                      </span>
                      <div className="flex flex-1 flex-col justify-between py-4">
                        <div>
                          <span className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                            {item.name}
                          </span>
                          <span className="block text-gray-500">Size: S</span>
                        </div>
                        <div>
                          <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                            Unit Price: ${item.price}
                          </span>
                        </div>
                      </div>
                      <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                        <div className="flex flex-col items-start gap-2">
                          <div className="flex h-12 w-20 overflow-hidden rounded border">
                            <input
                              type="number"
                              value={item.quantity}
                              readOnly
                              className="w-full px-4 py-2 outline-none ring-inset ring-green-300 transition duration-100 focus:ring"
                            />
                            <div className="flex flex-col divide-y border-l">
                              <button
                                onClick={() => handleIncreaseQuantity(item)}
                                className="flex w-6 flex-1 text-xs select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                                <Plus />
                              </button>
                              <button
                                onClick={() => handleDecreaseQuantity(item)}
                                className="flex w-6 flex-1 text-xs select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                                <Minus />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item)}
                            className="select-none text-sm font-semibold text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">
                            <Trash2 />
                          </button>
                        </div>
                        <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                          <span className="block font-bold text-gray-800 md:text-lg">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* product - end */}
                  </div>
                </>
              ))}

              {/* totals - start */}
              <div className="flex flex-col items-end gap-4 mb-8">
                <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                  <div className="space-y-1">
                    <div className="flex justify-between gap-4 text-gray-500">
                      <span>Subtotal</span>
                      <span>${subTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between gap-4 text-gray-500">
                      <span>TAX (14%)</span>
                      <span>${vatAmount.toFixed(2)} </span>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-start justify-between gap-4 text-gray-800">
                      <span className="text-lg font-bold">Total</span>
                      <span className="flex flex-col items-end">
                        <span className="text-lg font-bold">
                          ${totalPriceWithVAT.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">
                          Including TAX
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* totals - end */}
                <div className="flex gap-4">
                  <button
                    onClick={handleClearCart}
                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-gray-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:bg-gray-300 md:text-base">
                    Clear Cart
                  </button>
                  <Link href="/checkout" className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-700 focus-visible:ring active:bg-green-700 md:text-base">
                    Check out
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <h1 className="text-4xl font-bold text-center pt-24 md:pt-48">
              Cart is empty!
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
