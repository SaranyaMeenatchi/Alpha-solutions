// app/page.js
"use client"; // Add this line to use client-side rendering

import { useState } from 'react';
import Image from 'next/image';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

export default function Home() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDeleteProduct = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Dashboard Logo"
          width={180}
          height={38}
          priority
        />

        <ProductForm onAdd={handleAddProduct} />
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </main>
    </div>
  );
}