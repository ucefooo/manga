"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";

const ListHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative w-[40%]">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
                {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
            <div
        className={`w-[50%] fixed inset-0 bg-gray-800 md:bg-transparent bg-opacity-75 z-50 transform ${
          isOpen ? "translate-x-full" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white md:hidden"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        {/* w-full flex flex-col items-center justify-center gap-x-14 h-full space-y-8 md:space-y-0 md:flex-row md:space-x-14 md:h-auto md:bg-transparent md:static */}
                <ul className="flex flex-col md:flex-row h-full space-y-8 md:space-y-0 justify-center items-center w-[100%] gap-x-14">
                <li>
                    <a href="/" className="text-white">تسجيل الدخول</a>
                </li>
                <li>
                    <a href="/" className="text-white">الرئيسية</a>
                </li>
                <li>
                    <a href="/" className="text-white">قائمة المانجا</a>
                </li>
                </ul>
        </div>
        </div>
    );
};

export default ListHeader;

// "use client";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import { useState } from "react";
// import Link from "next/link";

// const ListHeader = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative w-[30%] flex justify-center items-center">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="text-white md:hidden"
//       >
//         {isOpen ? (
//           <XMarkIcon className="h-6 w-6" />
//         ) : (
//           <Bars3Icon className="h-6 w-6" />
//         )}
//       </button>
//       <div
//         className={`fixed inset-0 bg-gray-800 md:bg-transparent bg-opacity-75 z-50 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-white md:hidden"
//         >
//           <XMarkIcon className="h-6 w-6" />
//         </button>
//         <ul className="w-full flex flex-col items-center justify-center gap-x-14 h-full space-y-8 md:space-y-0 md:flex-row md:space-x-14 md:h-auto md:bg-transparent md:static">
//           <li>
//             <Link href="/" passHref className="text-white">
//               تسجيل الدخول
//             </Link>
//           </li>
//           <li>
//             <Link href="/" passHref className="text-white">
//               الرئيسية
//             </Link>
//           </li>
//           <li className="text-white flex justify-center">
//             <Link href="/" passHref>
//               قائمة المانجا
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ListHeader;
