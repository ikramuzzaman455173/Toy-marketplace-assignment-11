// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const isFirstPage = currentPage === 1;
//   const isLastPage = currentPage === totalPages;

//   const handlePageChange = (page) => {
//     if (page === currentPage) return;
//     onPageChange(page);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     const maxVisiblePages = 5; // Number of visible page numbers

//     let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

//     if (endPage - startPage < maxVisiblePages - 1) {
//       startPage = Math.max(1, endPage - maxVisiblePages + 1);
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       pageNumbers.push(
//         <li key={i}>
//           <button
//             className={`${
//               i === currentPage ? 'bg-blue-500 text-white' : 'text-blue-500'
//             } px-3 py-2 rounded-md`}
//             onClick={() => handlePageChange(i)}
//           >
//             {i}
//           </button>
//         </li>
//       );
//     }

//     return pageNumbers;
//   };

//   return (
//     <nav>
//       <ul className="flex justify-center my-4">
//         <li>
//           <button
//             className={`${
//               isFirstPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'
//             } text-white px-3 py-2 rounded-l-md`}
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={isFirstPage}
//           >
//             Previous
//           </button>
//         </li>
//         {renderPageNumbers()}
//         <li>
//           <button
//             className={`${
//               isLastPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'
//             } text-white px-3 py-2 rounded-r-md`}
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={isLastPage}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
