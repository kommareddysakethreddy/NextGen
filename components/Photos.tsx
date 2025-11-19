// "use client";

// import React from "react";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { dataportfolio } from '../data/dataportfolio'

// const PhotoGallery = () => {
//   return (
//     <HelmetProvider>
//       <div className="min-h-screen bg-white text-black px-6 py-16">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Portfolio | Saketh Reddy</title>
//           <meta
//             name="description"
//             content="A gallery of my best work and projects."
//           />
//         </Helmet>

//         <h2 className="text-4xl font-bold mb-10 text-center">My Photography</h2>

//         <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
//           {dataportfolio.map((data, i) => (
//             <div
//               key={i}
//               className="relative overflow-hidden rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition duration-300"
//             >
//               <img
//                 src={data.img}
//                 alt={data.description || "Portfolio image"}
//                 className="w-full h-auto object-cover"
//               />    
//               <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="mb-2 text-lg px-4 text-center">{data.description}</p>
//                 {/* <a
//                   href={data.link}
//                   className="bg-white text-black px-4 py-2 text-sm font-medium rounded hover:bg-gray-200"
//                 >
//                   View Project
//                 </a> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </HelmetProvider>
//   );
// };

// export default PhotoGallery;
