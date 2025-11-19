// 'use client'

// import Masonry from 'react-masonry-css'
// import {photogallerydata} from '@/data/dataportfolio'
// import Image from 'next/image'


// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1,
// }


// const PhotoGallery = () => {
//   return (
//     <section className="bg-white py-16 px-6" id="photography">
//       <h2 className="text-3xl font-bold text-center mb-10">My Photography</h2>

//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="flex gap-6"
//         columnClassName="my-masonry-column"
//       >
//         {photogallerydata.map((item, index) => (
//           <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
//             {/* <Image
//               src={`/${item.img}`}
//               alt={item.title}
//               width={400}
//               height={400}
//               layout="responsive"
//               objectFit="cover"
//               className="transition-transform duration-300 group-hover:scale-105"
//             /> */}
//             <img
//   src={`/${item.img}`}
//   alt={item.title}
//   className="w-full h-auto object-cover rounded-lg"
// />


//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
//               {item.title}
//             </div>
//           </div>
//         ))}
//       </Masonry>
//     </section>
//   )
// }

// export default PhotoGallery
