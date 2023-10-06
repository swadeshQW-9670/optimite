// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ProductsCards() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

  
//   useEffect(() => {
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then((response) => {
//         setProducts(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   const handleCardDelete = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Delete') {
//         const cardId = event.target.getAttribute('data-card-id');
//         if (cardId) {
//           handleCardDelete(parseInt(cardId, 10));
//         }
//       }
//     };

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [products]);

//   const productsRow1 = products.slice(0, Math.ceil(products.length / 2));

//   return (
//     <div className="card-container m-auto">
      
//       <div className="grid grid-cols-4 gap-4">
//         {productsRow1.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-4 shadow-md relative"
//             data-card-id={product.id}
//           >
//             <h2 className="text-lg font-semibold mb-3">{product.title}</h2>
//             <p className="text-black font-semibold">
//               Price: ${product.price.toFixed(2)}
//             </p>
//             <p className="text-gray-800">
//               {product.description.split(' ').slice(0, 10).join(' ')}...
//             </p>
//             <button
//               onClick={() => handleCardDelete(product.id)} 
//               className="cancel-button2 text-red-600 font-bold text-lg"
//             >
//               X
//             </button>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsCards;

