import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; // Navbar komponentini import qilish
import Proyekt from './Proyekt'; // Proyekt komponentini import qilish

const CategoryPage = () => {
  const { category } = useParams(); // Dinamik kategoriyani olish
  const [products, setProducts] = useState([]); // Mahsulotlar state

  useEffect(() => {
    fetch(`http://localhost:5000/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [category]);

  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />

      {/* Mahsulotlar sahifasi */}
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">{category} Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              {/* Product Image */}
              <div className="w-full h-36 mb-4 rounded overflow-hidden">
                <img 
                  src={product.imgUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                  onError={(e) => e.target.src = 'https://via.placeholder.com/150'} 
                />
              </div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>{product.about}</p> 
              <p className="text-green-600 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proyekt bo'limi */}
      <Proyekt />
    </div>
  );
};

export default CategoryPage;
