/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { useDispatch } from "react-redux";
import { ShoppingCartIcon } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import { addItem } from "../../store/CartSlice";
import { CartItem } from "../../store/CartSlice";

import { products } from "@/constants/products/Products";

const ProductContent = () => {
  const dispatch = useDispatch();

  // functions
  const handleAddItem = (item: Omit<CartItem, "quantity">) => {
    dispatch(addItem(item));

    toast.success("Added to cart");
  };
  return (
    <>
      <Toaster />

      {/* List of products */}
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 ">
        {/* product - start */}
        {products.map((product) => (
          <div
            key={product.id}
            className="md:px-4 md:py-4 bg-gray-100 rounded-xl ">
            <div className="grid gap-4 p-6 md:p-0 md:grid-cols-2">
              {/* image - start */}
              <div className="grid gap-2">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 border">
                  <img
                    src={product.image}
                    loading="lazy"
                    alt="Product"
                    className="h-full w-full object-cover object-center hover:scale-110 duration-500"
                  />
                </div>
              </div>
              {/* image - end */}

              {/* content - start */}
              <div className="md:py-8">
                {/* name - start */}
                <div className="mb-2 md:mb-3">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {product.name}
                  </h2>
                </div>
                {/* name - end */}

                {/* size - start */}
                <div className="mb-8 md:mb-10">
                  <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                    Size
                  </span>

                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size, i) => (
                      <button
                        key={i}
                        type="button"
                        className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition hover:bg-gray-100 active:bg-gray-200 hover:scale-110 duration-200">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                {/* size - end */}

                {/* price - start */}
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* price - end */}

                {/* buttons - start */}
                <div className="flex md:flex-col gap-2.5">
                  <button
                    onClick={() => handleAddItem(product)}
                    className="inline-block flex-1 rounded-lg bg-green-500 px-8 py-3 text-center text-xs font-semibold text-white outline-none ring-green-300 transition hover:bg-green-600 focus-visible:ring active:bg-green-700 sm:flex-none md:text-sm hover:scale-105 duration-200">
                    <span className="hidden md:block capitalize">
                      Add to cart
                    </span>
                    <ShoppingCartIcon className="text-lg md:hidden" />
                  </button>
                  <Link
                    href="/checkout"
                    className="capitalize inline-block rounded-lg border border-black px-8 py-3 text-center text-xs font-semibold text-black transition hover:bg-black hover:text-white md:text-sm hover:scale-105 duration-200">
                    Buy now
                  </Link>
                </div>
                {/* buttons - end */}
              </div>
              {/* content - end */}
            </div>
          </div>
        ))}

        {/* product - end */}
      </div>
    </>
  );
};

export default ProductContent;
