import { HorizontalDivider } from "@/components/Divider";
import {
  LucideArrowLeft,
  LucideBriefcase,
  LucideCircleDollarSign,
  LucideMapPin,
  LucideStar,
} from "lucide-react";
import { useRouter } from "next/router";

const Travel = () => {
  const router = useRouter();
  return (
    <>
      <section className="container mx-auto  px-8    h-full w-full flex items-center justify-center">
        <div className="flex flex-col justify-start items-start h-full w-full py-20">
          <button
            className="bg-none hover:bg-blue-200 text-blue-nav font-poppins py-5 font-bold px-8 mt-8 rounded-full transition duration-300 uppercase"
            onClick={() => {
              router.push("/")
            }}
          >
            <span className="flex items-center justify-center">
              <span className="flex items-center">
                <LucideArrowLeft className="h-5 w-5" />
                <span className="ml-2">Voltar</span>
              </span>
            </span>
          </button>
          <h3 className="text-5xl font-poppins text-gray-800 font-semibold text-start">
            Desenvolvedor Front-end (Remoto)
          </h3>
          <HorizontalDivider className="w-full h-1 bg-white" />

          <div className="flex justify-start items-center w-full  gap-3">
            <div className="flex items-center justify-start gap-2">
              <LucideMapPin className="h-5 w-5 text-blue-nav" />
              <h3 className="text-2xl font-poppins text-gray-800 font-semibold text-start">
                São Paulo, SP
              </h3>
            </div>

            <div className="flex items-center justify-start gap-2">
              <LucideCircleDollarSign className="h-5 w-5 text-blue-nav" />
              <h3 className="text-2xl font-poppins text-gray-800 font-semibold text-start">
                {
                  // Intl format R$
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(5000)
                }
              </h3>
            </div>

            <div className="flex items-center justify-start gap-2">
              <LucideBriefcase className="h-5 w-5 text-blue-nav" />
              <h3 className="text-2xl font-poppins text-gray-800 font-semibold text-start">
                Senior
              </h3>
            </div>
          </div>
          <HorizontalDivider className="w-full h-1 bg-white" />

          <h3 className="text-2xl font-poppins text-blue-nav font-semibold text-start">
            Gostou da vaga? Mostre o seu perfil para a empresa!
          </h3>
          <button className="bg-blue-nav hover:bg-blue-200 text-white font-poppins py-5 font-bold px-8 mt-8 rounded transition duration-300 uppercase">
            <span className="flex items-center justify-center">
              <span className="flex items-center">
                <LucideStar className="h-5 w-5" />
                <span className="ml-2">Quero me candidatar</span>
              </span>
            </span>
          </button>
        </div>
      </section>
      <section className="container  mx-auto px-8 h-full w-full flex items-center justify-center"></section>

      <section className="container  mx-auto px-8 h-full w-full flex items-center justify-center">
        <div className="w-full px-5 py-24">
          <div>
            <div className="max-w-2xl">
              <p className="text-4xl text-black">
                Por que trabalhar na Empresa XPTO?
              </p>
              <p className="max-w-2xl mt-4 text-lg tracking-tight text-gray-600">
                A XPTO Financial Solutions é uma empresa fictícia de serviços
                financeiros que oferece soluções abrangentes e inovadoras para
                atender às necessidades do mercado financeiro. Com uma equipe
                altamente qualificada e experiente, a XPTO se destaca como uma
                líder em seu setor, fornecendo serviços personalizados e de alta
                qualidade para indivíduos e empresas.
              </p>
            </div>
          </div>
          <div className="w-full mx-auto mt-12 text-left">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="p-4 mx-auto lg:max-w-7xl lg:p-0">
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-4 list-none lg:grid-cols-3 lg:gap-12"
                >
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Quais são os requisitos para trabalhar na XPTO Financial
                        Solutions?
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      A XPTO Financial Solutions valoriza a experiência,
                      qualificações e habilidades dos candidatos. Normalmente,
                      procuramos profissionais com formação acadêmica em áreas
                      relacionadas ao mercado financeiro, como Finanças,
                      Economia ou Administração. Experiência prévia em serviços
                      financeiros, consultoria ou gestão de investimentos é
                      altamente valorizada. Além disso, habilidades analíticas,
                      conhecimento do mercado financeiro atual, capacidade de
                      trabalho em equipe e excelentes habilidades de comunicação
                      são importantes para desempenhar um papel eficaz na
                      empresa.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Quais são as oportunidades de crescimento profissional
                        na XPTO Financial Solutions?
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Na XPTO Financial Solutions, valorizamos o desenvolvimento
                      profissional contínuo de nossos funcionários. Oferecemos
                      oportunidades de crescimento em várias áreas, incluindo
                      consultoria financeira, gestão de investimentos,
                      planejamento de aposentadoria e gerenciamento de riscos.
                      Promovemos um ambiente de aprendizado contínuo, fornecendo
                      treinamento interno, acesso a recursos educacionais e
                      programas de mentoria. Além disso, encorajamos a
                      participação em conferências e seminários do setor para
                      expandir conhecimentos e habilidades.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Qual é a cultura de trabalho na XPTO Financial
                        Solutions?
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      A cultura de trabalho na XPTO Financial Solutions é
                      baseada na colaboração, inovação e excelência. Fomentamos
                      um ambiente de trabalho dinâmico e inclusivo, onde as
                      ideias são valorizadas e a diversidade é celebrada.
                      Encorajamos a iniciativa individual e a colaboração em
                      equipe, buscando constantemente aprimorar nossos processos
                      e serviços. Nossos funcionários são incentivados a manter
                      um equilíbrio saudável entre trabalho e vida pessoal, pois
                      acreditamos que isso contribui para um desempenho eficaz e
                      uma satisfação geral no trabalho.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Quais são os benefícios oferecidos aos funcionários da
                        XPTO Financial Solutions?
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      A XPTO Financial Solutions se preocupa com o bem-estar de
                      seus funcionários e oferece benefícios competitivos. Isso
                      pode incluir pacotes abrangentes de assistência médica e
                      odontológica, planos de previdência privada, programas de
                      participação nos lucros, subsídios para educação e
                      desenvolvimento profissional, além de incentivos
                      adicionais com base no desempenho individual e da empresa.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Como posso me candidatar a uma vaga na XPTO Financial
                        Solutions?
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Para se candidatar a uma vaga na XPTO Financial Solutions,
                      você pode visitar nosso site oficial e verificar se há
                      vagas disponíveis na seção de carreiras. Caso haja uma
                      vaga adequada ao seu perfil, você pode enviar seu
                      currículo e preencher um formulário de inscrição online. A
                      XPTO Financial Solutions revisará todas as inscrições e
                      entrará em contato com os candidatos selecionados para dar
                      continuidade ao processo seletivo.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Travel;
