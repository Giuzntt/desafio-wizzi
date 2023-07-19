import { Banner } from "@/components/Banner";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/Card";
import { HorizontalDivider } from "@/components/Divider";
import CardSearch from "@/components/CardSearch";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import Head from "next/head";

const formSchema = z.object({
  dataIda: z.date({
    required_error: "Data de ida é obrigatória",
  }),
  dataVolta: z.date({
    required_error: "Data de volta é obrigatória",
  }),
  origem: z.string().nonempty({
    message: "Origem é obrigatória",
  }),
  destino: z.string().nonempty({
    message: "Destino é obrigatório",
  }),
  quantidadePessoas: z.string().nonempty({
    message: "Quantidade de Pessoas é obrigatória",
  }),
  nomePassageiro: z.string().nonempty({
    message: "Nome é obrigatório",
  }),
  emailPassageiro: z
    .string()
    .nonempty({
      message: "Email é obrigatório",
    })
    .email({
      message: "Email inválido",
    }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      origem: "",
      destino: "",
      quantidadePessoas: "",
      nomePassageiro: "",
      emailPassageiro: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Busca realizada com sucesso!");
    alert(JSON.stringify(values, null, 2));
  }

  // scroll animation to id
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>DevJourney - Encontre a sua próxima jornada</title>
      </Head>
      <Banner />

      <section className="container mx-auto px-8">
        <h3
          className="text-4xl font-poppins font-bold text-start text-blue-nav my-5"
          id="journey"
        >
          Encontre a sua próxima jornada
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full ">
              <div className="col-span-4 md:col-span-2 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="dataIda"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left  font-poppins",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", {
                                  locale: ptBR,
                                })
                              ) : (
                                <span>Data de Ida</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            locale={ptBR}
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="dataVolta"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left  font-poppins",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", {
                                  locale: ptBR,
                                })
                              ) : (
                                <span>Data de Volta</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            locale={ptBR}
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4 md:col-span-2 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="origem"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Origem"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="destino"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Destino"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-4">
                <FormField
                  control={form.control}
                  name="quantidadePessoas"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Quantidade de Pessoas"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="nomePassageiro"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Nome do Passageiro Principal"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-2">
                <FormField
                  control={form.control}
                  name="emailPassageiro"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="E-mail do Passageiro Principal"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4 md:col-span-2 lg:col-span-4">
                <button
                  type="submit"
                  className="bg-blue-nav hover:bg-blue-200 text-white font-poppins py-3 font-bold px-2 mt-8 rounded transition duration-300 uppercase w-full"
                >
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </Form>
      </section>

      <section className="container mx-auto px-8">
        <h3 className="text-4xl font-poppins font-bold text-start text-blue-nav my-5">
          Resultados da busca
        </h3>
        <HorizontalDivider />
        <div className="flex flex-col flex-wrap justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <CardSearch
              location="Front-end Developer at São Paulo"
              price="2500"
              level="Pleno"
              time="2"
              to="/Travel"
            />

            <CardSearch
              location="Back-end Developer at New York"
              price="15000"
              level="Pleno"
              src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              time="12"
              to="/Travel"
            />

            <CardSearch
              location="C# Developer at Paris"
              price="25000"
              level="Senior+"
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80 820w"
              time="24"
              to="/Travel"
            />
            <CardSearch
              location="Front-end Developer at Sydney"
              price="6500"
              level="Pleno"
              time="6"
              to="/Travel"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <h3 className="text-4xl font-poppins font-bold text-start text-blue-nav my-5">
          Artigos sobre viagens e trabalho
          <span className="font-poppins font-bold text-blue-nav-light ml-2">
            remoto!
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <Card
            title="São Paulo"
            date="2021-10-10"
            image="/images/default-placeholder.png"
            description="São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
            to="https://www.partiusernomade.com.br/2022/08/29/5-lugares-tranquilos-em-sao-paulo-para-trabalhar-remotamente/"
          />
          <Card
            title="Paris"
            date="2021-10-10"
            image="/images/default-placeholder.png"
            description="Paris e o trabalho remoto"
            to="https://vagaspelomundo.com.br/carreira/trabalhar-em-paris/"
          />
          <Card
            title="New York"
            date="2021-10-10"
            image="/images/sao-paulo.jpg"
            description="New York e o trabalho remoto"
            to="https://www.folhape.com.br/economia/estados-unidos-confira-os-estados-com-maior-salario-medio/279382/"
          />
          <Card
            title="Sydney"
            date="2021-10-10"
            image="/images/default-placeholder.png"
            description="São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América do Sul. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul."
            to="https://vagaspelomundo.com.br/morar-fora/melhor-cidade-do-mundo-para-morar/"
          />
        </div>
      </section>
    </>
  );
}
