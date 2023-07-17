import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-30 bg-blue-nav flex justify-center items-center">
      <div
        className="container flex justify-between items-center mx-auto px-8
       "
      >
        <div className="flex justify-center items-center">
          <Image src="/images/Logo.png" width={168} height={88} alt="logo" />
        </div>
        <h3 className="text-white font-poppins font-semibold text-xl">
          Todos os direitos reservados - 2023
        </h3>
      </div>
    </footer>
  );
}
