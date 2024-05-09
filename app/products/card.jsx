/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import Link from "next/link";

export default function Card({ product }) {
  const { globals, setGlobals } = useContext(GlobalContext);
  const isInCart = (id) => {
    return globals.cartItems.filter((item) => item.id === id).length > 0;
  };

  return (
    <Link href={`/detail`}>

      {<div className="group relative block overflow-hidden bg-white">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <div className="w-full">
          <img
            src={product.image}
            alt=""
            className="py-3 h-72 w-64 mx-auto transition duration-500 group-hover:scale-105 sm:h-72"
          />
        </div>
        <div className="relative border border-gray-100  p-6">
          <h3 className="text-lg font-medium text-gray-900 overflow-hidden overflow-ellipsis whitespace-nowrap hover:overflow-visible hover:whitespace-normal">{product.title}</h3>

          <p className="mt-1.5 text-sm text-gray-700">${product.price}</p>
        </div>
      </div>}

    </Link>


  );
}
