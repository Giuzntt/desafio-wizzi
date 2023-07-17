import Image from "next/image";

import { Banner } from "@/components/Banner";
import DatePicker from "@/components/Datepicker";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/Card";
import { HorizontalDivider } from "@/components/Divider";
import CardSearch from "@/components/CardSearch";

export default function Home() {
  return (
    <>
      <Banner />

      <section className="container mx-auto px-8">
        <h3 className="text-4xl font-poppins font-bold text-start text-blue-nav my-5">
          Encontre a sua próxima jornada
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full ">
          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <DatePicker placeholder="Data de Ida" className="w-full" />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <DatePicker placeholder="Data de Volta" className="w-full" />
          </div>

          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <Input type="text" placeholder="Origem" className="w-full" />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <Input type="text" placeholder="Destino" className="w-full" />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-4">
            <Input
              type="text"
              placeholder="Quantidade de Pessoas"
              className="w-full"
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <Input
              type="text"
              placeholder="Nome do Passageiro Principal"
              className="w-full"
            />
          </div>
          <div className="col-span-4 md:col-span-2 lg:col-span-2">
            <Input
              type="text"
              placeholder="E-mail do Passageiro Principal"
              className="w-full"
            />
          </div>

          <div className="col-span-4 md:col-span-2 lg:col-span-4">
            <button className="bg-blue-nav hover:bg-blue-200 text-white font-poppins py-3 font-bold px-2 mt-8 rounded transition duration-300 uppercase w-full">
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <h3 className="text-4xl font-poppins font-bold text-start text-blue-nav my-5">
          Resultados da busca
        </h3>
        <HorizontalDivider />
        <div className="flex flex-col flex-wrap justify-center items-center">
          {/* // TODO: create card component  Horizontal*/}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <CardSearch
              location="Front-end Developer at São Paulo"
              price="2500"
              level="Pleno"
              time="2"
            />

            <CardSearch
              location="Back-end Developer at New York"
              price="15000"
              level="Pleno"
              src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80 387w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80 687w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80 774w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80 987w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80 1287w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80 1374w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80 1587w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80 1887w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80 1974w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80 2187w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80 2487w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80 2574w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80 2787w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80 3087w, https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3094&q=80 3094w"
              time="12"
            />

            <CardSearch
              location="C# Developer at Paris"
              price="25000"
              level="Senior+"
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80 820w"
              time="24"
            />
            <CardSearch
              location="Front-end Developer at Sydney"
              price="6500"
              level="Pleno"
              time="6"
            />
          </div>
        </div>

        {/* create divider */}
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
