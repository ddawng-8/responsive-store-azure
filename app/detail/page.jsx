/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import Card from './carddetail';
import { getProductById } from './actions';

export default function page() {
  const productID = 2;
  const product = getProductById(productID);

  return (
    <>
      <div className="bg-gray-100">
        {product && <Card product={product} />}
      </div>
    </>
  );
}
