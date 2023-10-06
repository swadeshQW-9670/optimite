
// // import React, { useState } from 'react';
// // import AddProductPopup from './AddProductPopup';

// // const Navbar = ({setShowModal}) => {

// //   const [productList, setProductList] = useState([]);

// //   const togglePopup = () => {
// //     setShowModal(true);
// //   };

// //   const handleAddProduct = (newProduct) => {
   
// //     setProductList([...productList, newProduct]);
// //   };

// //   return (
// //     <div className="flex items-center justify-between border p-4 bg-gradient-to-r from-blue-500 via-green-500">
// //       <div>
// //         <a href="#" className="border border-blue-500 border-2 text-lg p-2 hover:border-blue-800">
// //           App Name
// //         </a>
// //       </div>
// //       <div className="space-x-4">
// //         <button
// //           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        
// //         >
// //           Sort by price
// //         </button>
// //         <button
// //           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
// //           onClick={togglePopup}
// //         >
// //           Add product
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [productList, setProductList] = useState([]);
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');
//   const [Image, setImage] = useState('');
//   const [Heading, setHeading] = useState('');
//   const [description, setDescription] = useState('');

//   const togglePopup = () => {
//     setShowModal(!showModal);
//   };

//   const handleAddProduct = () => {
//     const newProduct = {
//       name: productName,
//       price: productPrice,
//       Image: Image,
//       Heading: Heading,
//       description: description,
//     };

//     setProductList([...productList, newProduct]);
//     setProductName('');
//     setProductPrice('');
//     setImage('');
//     setHeading('');
//     setDescription('');
//     setShowModal(false);
//   };

//   return (
//     <div>

     
//     </div>
//   );
// };

// export default Navbar;
