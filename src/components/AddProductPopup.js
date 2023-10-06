// import React, { useState } from 'react';

// const AddProductPopup = ({setShowModal} ) => {
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const addNewProduct = () => {
   
//     const updatedProducts = [...products];
  
//     updatedProducts.push({
//       Image:" ",
//       Heading:" ",
//       price:" ",
//       description:" "
//     });
  
//     setProducts(updatedProducts);
//   };
  


//   const handleAddProduct = () => {
//     const newProduct = {
//       name: productName,
//       price: productPrice,
//     };
    
//     setProductName('');
//     setProductPrice('');

   
//     setShowModal(false);
//   };

//   return (

//       <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
//         <div className="bg-white p-4 rounded-lg">
//         <button
//               onClick={() =>setShowModal(false)}
//               className="cancel-button2 text-red-600 font-bold text-lg font:right"
//             >
//               X
//             </button>

//           <h2 className="text-lg font-semibold mb-2">Add Product</h2>
          
//           <label>Image :
//           <input
//             type="text"
//             placeholder="Image"
//             value={Image}
//             onChange={(e) => setProductName(e.target.value)}
//             className="w-full border p-2 mb-2" />
//           </label>
//           <label> Heading
//           <input
//             type="number"
//             placeholder="Product Price"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//             className="w-full border p-2 mb-2"
//           />
//           </label>
//           <label> description
//           <input
//             type="number"
//             placeholder="Product Price"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//             className="w-full border p-2 mb-2"
//           />
//           </label>
          
//        <label>Price
//           <input
//             type="number"
//             placeholder="Product Price"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//             className="w-full border p-2 mb-2"
//           />
//          </label>
//           <button
//             onClick={handleAddProduct}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             Save
//           </button>
          
//         </div>
//       </div>
    
//   );
// };

// export default AddProductPopup;


