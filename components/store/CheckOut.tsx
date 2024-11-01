"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

import { RootState } from "@/store/Store";

function CheckoutContent() {
  const cart = useSelector((state: RootState) => state.cart);

  const router = useRouter();

  const { user } = useUser();

  const fullName = user?.firstName + " " + user?.lastName;

  // calculate sub-total price
  const subTotal =
    cart?.items?.reduce((total: number, item) => {
      return total + item.price * item.quantity;
    }, 0) || 0;

  // calculate VAT
  const vatAmount = subTotal * 0.14;

  // calculate total price
  const totalPriceWithVAT = subTotal + vatAmount;

  const handleGoBack = () => {
    router.back(); // Navigates the user to the previous page
    // router.push("/shop");
  };
  return (
    <>
      <div className="py-24">
        <h1 className="text-center text-5xl font-extrabold text-red-600 animate-pulse ">
          NONE OPERATIONAL
          <br />
          CHECKOUT PAGE
        </h1>
        <p className="text-center text-xl uppercase text-red-500">
          *** <b>DO NOT</b> ENTER REAL PAYMENT INFO ***
        </p>
      </div>
      <div className="p-4">
        <div className="lg:max-w-7xl max-w-xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 max-lg:order-1">
              {/* Checkout Step */}
              <div className="flex items-start">
                <div className="w-full">
                  <div className="flex items-center w-full">
                    <div className="w-8 h-8 shrink-0 mx-[-1px] bg-green-500 p-1.5 flex items-center justify-center rounded-full">
                      <span className="text-base text-white font-bold">1</span>
                    </div>
                    <div className="w-full h-[3px] mx-4 rounded-lg bg-green-500" />
                  </div>
                  <div className="mt-2 mr-4">
                    <h6 className="text-base font-bold text-black">Shopping</h6>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center w-full">
                    <div className="w-8 h-8 shrink-0 mx-[-1px] bg-green-500 p-1.5 flex items-center justify-center rounded-full">
                      <span className="text-base text-white font-bold">2</span>
                    </div>
                    <div className="w-full h-[3px] mx-4 rounded-lg bg-gray-300" />
                  </div>
                  <div className="mt-2 mr-4">
                    <h6 className="text-base font-bold text-black">Payment</h6>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full">
                      <span className="text-base text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6 className="text-base font-bold text-gray-400">
                      Confirm
                    </h6>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <form className="mt-16 max-w-lg">
                <div className="grid gap-6 mt-8">
                  <input
                    type="text"
                    placeholder="Cardholder's Name"
                    defaultValue={fullName}
                    className="px-4 py-3.5 bg-white text-black w-full text-sm rounded-xl border border-green-500 outline-none"
                  />
                  <div className="flex bg-white rounded-xl border border-green-500 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 ml-3"
                      viewBox="0 0 291.764 291.764">
                      <path
                        fill="#2394bc"
                        d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                        data-original="#2394bc"
                      />
                      <path
                        fill="#efc75e"
                        d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                        data-original="#efc75e"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Card Number"
                      defaultValue="4242 4242 4242 4242"
                      className="px-4 py-3.5 bg-white text-black rounded-xl w-full text-sm outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="EXP."
                      defaultValue="12/28"
                      className="px-4 py-3.5 bg-white text-black w-full text-sm rounded-xl border border-green-500 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="CVV"
                      defaultValue="123"
                      className="px-4 py-3.5 bg-white text-black w-full text-sm rounded-xl border border-green-500 outline-none"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                      I accept the{" "}
                      <Link
                        href="#"
                        className="text-green-600 font-semibold hover:underline ml-1">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-black rounded-xl hover:bg-gray-200"
                    onClick={handleGoBack}>
                    Back
                  </button>
                  <button
                    type="button"
                    className="min-w-[150px] px-6 py-3.5 text-sm bg-green-500 text-white rounded-xl hover:bg-transparent hover:text-green-500 hover:border hover:border-green-500">
                    Confirm Payment
                  </button>
                </div>
              </form>
            </div>

            {/* Summary */}
            <div className="bg-gray-100 px-6 py-8 rounded-xl">
              <h2 className="text-5xl font-extrabold underline underline-offset-8">
                Summary
              </h2>
              {cart.items.length > 0 ? (
                <>
                  {cart.items.map((item) => (
                    <ul key={item.id} className="text-black mt-10 space-y-6">
                      <li className="flex flex-wrap gap-4 text-base">
                        {item.name}
                        <span className="ml-auto font-bold">
                          P{item.price} × {item.quantity}
                        </span>
                      </li>
                      <li className="flex flex-wrap gap-4 text-base border-t-2 pt-4">
                        Sub Total{" "}
                        <span className="ml-auto font-bold">
                          ${subTotal.toFixed(2)}
                        </span>
                      </li>
                      <li className="flex flex-wrap gap-4 text-base ">
                        TAX(14%){" "}
                        <span className="ml-auto font-bold">
                          ${vatAmount.toFixed(2)}
                        </span>
                      </li>
                      <li className="flex flex-wrap gap-4 text-3xl font-bold">
                        Total{" "}
                        <span className="ml-auto truncate">
                          ${totalPriceWithVAT.toFixed(2)}
                        </span>
                      </li>
                    </ul>
                  ))}
                </>
              ) : (
                <>
                  <p className="flex items-center justify-center py-24 text-black text-center">Your cart is empty!</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutContent;
