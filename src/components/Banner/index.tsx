export const Banner = () => {
  return (
    <section
      className="bg-[url('/images/banner.jpg')]  min-h-[600px] bg-cover bg-center flex items-center justify-center
        w-full
    
    "
    >
      <div
        className="flex items-center justify-between h-full px-8 container mx-auto
      "
      >
        <div
          className="flex flex-col max-w-[600px] space-y-4
        "
        >
          <h3
            className="text-4xl font-poppins text-white font-semibold text-start
          "
          >
            Viaje além, desenvolva seu futuro!
          </h3>

          <p className="text-white text-md font-poppins text-start leading-relaxed">
            O objetivo do projeto Dev Journey é encontrar destinos inspiradores
            e enriquecedores para que desenvolvedores possam viajar e aprimorar
            suas carreiras.
          </p>

          <button
            className="bg-white hover:bg-blue-200 text-blue-nav font-poppins py-5    font-bold px-8 mt-8
            rounded-full transition duration-300 uppercase
          
          "
          >
            Bora embarcar nessa Jornada?
          </button>
        </div>
      </div>
    </section>
  );
};
