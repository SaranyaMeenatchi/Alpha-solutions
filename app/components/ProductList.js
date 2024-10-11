"use client"; // Add this line to enable client-side rendering in Next.js 13+

import React from 'react';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Stock</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border-b border-gray-200 p-2">{product.name}</td>
              <td className="border-b border-gray-200 p-2">{product.price}</td>
              <td className="border-b border-gray-200 p-2">{product.stock}</td>
              <td className="border-b border-gray-200 p-2">
                <button onClick={() => onDelete(product._id)}>Delete</button> {/* Pass product ID to delete */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
