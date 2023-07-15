import Image from "next/image";

import { Banner } from "@/components/Banner";
import DatePicker from "@/components/Datepicker";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <>
      <Banner />

      <section className="container mx-auto px-8">
        <h3 className="text-4xl font-poppins font-bold text-start text-blue-nav my-5">
          Encontre a sua próxima jornada
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <DatePicker placeholder="Data de Ida" className="w-full" />
          <DatePicker placeholder="Data de Volta" className="w-full" />
          <Input type="text" placeholder="Origem" className="w-full" />
          <Input type="text" placeholder="Destino" className="w-full" />

          <div className="col-span-4 md:col-span-2 lg:col-span-4">
            <Input type="text" placeholder="Quantidade de Pessoas" />
          </div>
          <div className="col-span-2">
            <Input type="text" placeholder="Nome do Passageiro Principal" />
          </div>
          <div className="col-span-2">
            <Input type="text" placeholder="E-mail do Passageiro Principal" />
          </div>

          <div className="col-span-4 md:col-span-2 lg:col-span-4">
            <button
              className="bg-blue-nav hover:bg-blue-200 text-white font-poppins py-3    font-bold px-2 mt-8
              rounded transition duration-300 uppercase
              w-full
            "
            >
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <h3 className="text-4xl font-poppins font-bold text-start text-blue-nav my-5">
          Recomendados para{" "}
          <span className="font-poppins font-bold text-blue-nav-light">
            você!
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <Card
            title="São Paulo"
            date="2021-10-10"
            image="/images/sao-paulo.jpg"
            description="São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
            to="/sao-paulo"
          />
          <Card
            title="São Paulo"
            date="2021-10-10"
            image="/images/sao-paulo.jpg"
            description="São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
            to="/sao-paulo"
          />
          <Card
            title="São Paulo"
            date="2021-10-10"
            image="/images/sao-paulo.jpg"
            description="São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
            to="/sao-paulo"
          />
          <Card
            title="São Paulo"
            date="2021-10-10"
            image="/images/sao-paulo.jpg"
            description="São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
            to="/sao-paulo"
          />
        </div>
      </section>
    </>
  );
}
