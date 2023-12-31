import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { LucideMenu, LucideX } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItem = [
    {
      name: "inicio",
      link: "/",
    },
    {
      name: "sobre nos",
      link: "/",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-blue-nav z-50">
      <div className="flex items-center justify-between h-full px-8 container mx-auto">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/Logo.png"
            alt="Picture of the author"
            width={168}
            height={88}
          />
        </div>
        <nav className="flex items-center gap-5">
          <div className="lg:hidden">
            <button
              className="text-white text-xl font-poppins"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
            </button>
          </div>
          <div
            className={`hidden lg:flex items-center gap-5 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            {navItem.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-white text-xl font-poppins hover:text-blue-200 transition duration-300 font-bold"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-none hover:bg-blue-700 text-white font-poppins py-1 px-5 font-bold text-xl border-2 border-white transition duration-300 rounded-full">
              quero voar!
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full h-28 bg-blue-nav z-50">
              <div
                className="flex flex-col items-center justify-center h-full
               "
              >
                {navItem.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-white text-xl font-poppins hover:text-blue-200 transition duration-300 font-bold uppercase"
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="bg-white hover:bg-blue-500 text-blue-nav font-poppins py-1  font-bold text-xl border-2 border-white transition duration-300 rounded-full w-[250px] mx-3  uppercase">
                  quero voar!
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* create dropdown */}
      </div>
    </header>
  );
};

export default Header;
