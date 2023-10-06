
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ProductDetails({ product, onClose }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-white p-4 shadow-md rounded-lg w-[40%]">
        <div className="flex justify-between items-center mb-4 p-2 border-b border-red-500">
          <h1 className="text-2xl font-semibold text-red-500">Product Card</h1>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600"
          >
            Back
          </button>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-full h-full object-cover"
              onClick={() => window.open(product.image, '_blank')}
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-black font-semibold mb-2">
              Price: ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-800 text-sm mb-4">
              Description:{' '}
              {product.description.length > 20
                ? `${product.description.substring(0, 60)}...`
                : product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: 0,
    image: '',
  });
  const [sortOrder, setSortOrder] = useState('low-to-high');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleCardDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    const updatedProducts = [...products];
    const newId = Math.max(...products.map((p) => p.id)) + 1;
    updatedProducts.push({
      id: newId,
      ...newProduct,
    });
    setProducts(updatedProducts);
    setShowModal(false);
    setNewProduct({
      id: '',
      title: '',
      description: '',
      price: 0,
      image: '',
    });
  };

  const sortProducts = () => {
    if (sortOrder === 'low-to-high') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-blue-500 via-green-500 p-4">
        <nav className="container mx-auto flex justify-between items-center text-white">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-4">PRODUCTS CART</h1>
          </div>
          <div className="space-x-4 font-semibold mr-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Add Product
            </button>
            <select
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </nav>
      </div>

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-4 gap-4">
          {sortProducts().map((product) => (
            <div
              key={product.id}
              className="rounded-md bg-white-200 p-4 shadow-lg border-solid border-2 relative hover:bg-gradient-to-r from-blue-500 via-green-500 p-4 hover:rounded-3xl"
            >
              <div className="w-full h-40 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg max-h-full object-cover"
                />
              </div>
              <h2
                className="text-lg font-semibold my-2 cursor-pointer"
                onClick={() => openProductDetails(product)}
              >
                {product.title}
              </h2>
              <p className="text-black font-semibold">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-800 text-sm">
                Description:{' '}
                {product.description.length > 20
                  ? `${product.description.substring(0, 20)}...`
                  : product.description}
              </p>
              <button
                onClick={() => handleCardDelete(product.id)}
                className="delete-button text-red-600 font-bold text-lg absolute bottom-2 right-2"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white p-4 shadow-md rounded-lg w-[50%]">
            <div className=' flex justify-between'>
              <h2 className="text-2xl font-semibold mb-2">ADD PRODUCTS</h2>
              <button
                onClick={() => setShowModal(false)}
                className="close-button px-4 py-2 bg-blue-500 font-semibold text-lg text-white rounded-lg hover-bg-blue-600"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleAddProduct}>
              <label className='text-lg font-normal'>
                Title:
                <input
                  type="text"
                  placeholder="Title"
                  value={newProduct.title}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, title: e.target.value })
                  }
                  className="w-full border p-2 mb-2"
                  required
                />
              </label>
              <label className='text-lg font-normal'>
                Description:
                <input
                  type="text"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, description: e.target.value })
                  }
                  className="w-full border p-2 mb-2"
                  required
                />
              </label>

              <label className='text-lg font-normal'>
                Price:
                <input
                  type="number"
                  placeholder="Product Price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: parseFloat(e.target.value),
                    })
                  }
                  className="w-full border p-2 mb-2"
                  required
                  min="0"
                />
              </label>
              <label className='text-lg font-normal'>
                Image Upload:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        setNewProduct({
                          ...newProduct,
                          image: event.target.result,
                        });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full border p-2 mb-2"
                />
              </label>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold text-lg rounded-lg hover-bg-blue-600"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}


      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
    </div>
  );
}

export default App;
