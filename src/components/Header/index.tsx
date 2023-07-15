import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItem = [
    {
      name: "inicio",
      link: "/",
    },
    {
      name: "sobre nos",
      link: "/about",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-blue-nav  z-50">
      <div
        className="flex items-center justify-between h-full px-8 container mx-auto
      
      "
      >
        <div className="flex items-center space-x-4">
          <Image
            src="/images/Logo.png"
            alt="Picture of the author"
            width={168}
            height={88}
          />
        </div>
        <nav className="flex items-center gap-5">
          {navItem.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-white text-xl font-poppins hover:text-blue-200 transition duration-300 font-bold
              
              "
            >
              {item.name}
            </Link>
          ))}

          <button
            className="bg-none hover:bg-blue-700 text-white font-poppins py-1 px-5  font-bold text-xl
            border-2 border-white transition duration-300 rounded-full 
          
          "
          >
            quero voar!
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
