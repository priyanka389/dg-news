// // src/components/Navbar.jsx
// import { useState, useEffect } from "react";
// import {
//   FaHome,
//   FaInfoCircle,
//   FaThLarge,
//   FaNewspaper,
//   FaEnvelope,
//   FaNewspaper as LogoIcon,
// } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [active, setActive] = useState("Home");
//   const [links, setLinks] = useState([]);

//   useEffect(() => {
//     setLinks([
//       { name: "Home", href: "#home", icon: <FaHome /> },
//       { name: "About", href: "#about", icon: <FaInfoCircle /> },
//       { name: "Categories", href: "#services", icon: <FaThLarge /> },
//       { name: "News", href: "#news", icon: <FaNewspaper /> },
//       { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
//     ]);
//   }, []);

//   return (
//     <nav className="fixed w-full z-50 bg-slate-800/95 backdrop-blur-md shadow-md transition-all duration-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
//         {/* Logo with icon */}
//         <div className="flex items-center gap-2">
//           <LogoIcon className="text-3xl text-orange-400" />
//           <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent">
//             DGNews
//           </div>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6 items-center">
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setActive(link.name)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
//                 ${
//                   active === link.name
//                     ? "bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 text-white shadow-lg"
//                     : "bg-slate-700/60 text-slate-200 shadow-md"
//                 }`}
//             >
//               <span className="text-lg">{link.icon}</span>
//               <span>{link.name}</span>
//             </a>
//           ))}
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-slate-200 focus:outline-none text-3xl"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-slate-800/95 backdrop-blur-md shadow-lg px-4 py-4 space-y-3 animate-slide-down rounded-b-xl">
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => {
//                 setActive(link.name);
//                 setIsOpen(false);
//               }}
//               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300
//                 ${
//                   active === link.name
//                     ? "bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 text-white shadow-lg"
//                     : "bg-slate-700/60 text-slate-200 shadow-sm"
//                 }`}
//             >
//               <span className="text-xl">{link.icon}</span>
//               <span>{link.name}</span>
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaThLarge,
  FaNewspaper,
  FaEnvelope,
  FaNewspaper as LogoIcon,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks([
      { name: "Home", href: "#home", icon: <FaHome /> },
      { name: "About", href: "#about", icon: <FaInfoCircle /> },
      { name: "Categories", href: "#services", icon: <FaThLarge /> },
      { name: "News", href: "#news", icon: <FaNewspaper /> },
      { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
    ]);
  }, []);

  return (
    /* Humne 'fixed' hata diya hai taaki niche ka content (Red Ticker) saaf dikhe */
    <nav className="relative z-50 bg-slate-800 shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo with icon */}
        <div className="flex items-center gap-2">
          <LogoIcon className="text-3xl text-orange-400" />
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent">
            DGNews
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  active === link.name
                    ? "bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 text-white shadow-lg"
                    : "bg-slate-700/60 text-slate-200 shadow-md"
                }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-200 focus:outline-none text-3xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md shadow-lg px-4 py-4 space-y-3 rounded-b-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300
                ${
                  active === link.name
                    ? "bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 text-white shadow-lg"
                    : "bg-slate-700/60 text-slate-200 shadow-sm"
                }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;