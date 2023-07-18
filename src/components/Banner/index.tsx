import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucidePlane } from "lucide-react";

export const Banner = () => {
  const [phrases, setPhrases] = useState([
    "Viaje além, desenvolva seu futuro!",
    "Descubra novos horizontes!",
    "Aprimore suas habilidades de programação!",
    "Inspire-se e inove!",
    "Explore novas possibilidades!",
    "Construa o futuro com código!",
    "Transforme ideias em realidade!",
    "Aprenda, crie, evolua!",
    "Desenvolva seu potencial!",
    "Descubra seu caminho na programação!",
    "Conquiste novos desafios!",
    "Domine a arte da programação!",
    "Crie soluções inovadoras!",
    "Abra portas para o conhecimento!",
    "Aventure-se no mundo da tecnologia!",
    "Aperfeiçoe suas habilidades!",
    "Explore o poder da programação!",
    "Descubra um universo de possibilidades!",
    "Construa sua carreira de sucesso!",
    "Supere limites, vá além!",
    "Mergulhe no mundo da codificação!",
    "Desbrave o universo do desenvolvimento!",
    "Crie, experimente, transforme!",
    "Seja protagonista da sua jornada!",
    "Encontre inspiração a cada linha de código!",
    "Desenvolva seu potencial criativo!",
    "Aprimore suas habilidades técnicas!",
    "Abra sua mente para a inovação!",
    "Crie projetos incríveis!",
    "Aprenda com paixão, cresça com habilidade!",
    "Explore o fascinante mundo da programação!",
    "Desenvolva soluções que impactam!",
    "Adquira conhecimentos valiosos!",
    "Transforme problemas em oportunidades!",
    "Domine as ferramentas do desenvolvedor!",
    "Inove e surpreenda!",
    "Desperte o desenvolvedor dentro de você!",
    "Explore seu potencial criativo!",
    "Aprenda, compartilhe, evolua!",
    "Descubra o poder do código!",
    "Construa uma base sólida de conhecimento!",
    "Abra as portas para um futuro promissor!",
    "Viva a experiência de criar!",
    "Aventure-se em projetos desafiadores!",
    "Desenvolva sua capacidade de resolver problemas!",
    "Expanda seus horizontes na programação!",
    "Construa sua jornada de sucesso!",
    "Aperfeiçoe suas habilidades de codificação!",
    "Inspire-se com os melhores do ramo!",
    "Desvende os segredos do desenvolvimento!",
    "Aprenda com a comunidade de desenvolvedores!",
    "Descubra o prazer de programar!",
    "Conquiste o mundo com suas habilidades!",
    "Supere barreiras e evolua!",
    "Explore um universo de aprendizado!",
    "Desperte sua criatividade através do código!",
    "Aprenda constantemente e nunca pare de evoluir!",
    "Descubra soluções inovadoras para desafios reais!",
  ]);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(
    phrases[currentPhraseIndex]
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextVisible(true);
    }, 2000); // Tempo em milissegundos para voltar ao normal (5 segundos neste exemplo)

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Intervalo de 3 segundos para mudar a frase

    return () => {
      clearInterval(interval);
    };
  }, [phrases]);

  useEffect(() => {
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [currentPhraseIndex, phrases]);

  const [isTextVisible, setTextVisible] = useState(true);

  const handleIconClick = () => {
    setTextVisible((prevState) => !prevState);
  };

  return (
    <motion.section
      className="bg-[url('/images/banner.jpg')] min-h-[600px] bg-cover bg-center flex items-center justify-center w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between h-full px-8 container mx-auto">
        <motion.div
          className="flex flex-col max-w-[600px] space-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3
            className="text-4xl font-poppins text-white font-semibold text-start"
            key={currentPhrase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {currentPhrase}
          </motion.h3>

          <motion.p
            className="text-white text-md font-poppins text-start leading-relaxed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            O objetivo do projeto Dev Journey é encontrar destinos inspiradores
            e enriquecedores para que desenvolvedores possam viajar e aprimorar
            suas carreiras.
          </motion.p>

          <motion.button
            className="bg-white hover:bg-blue-200 text-blue-nav font-poppins py-5 font-bold px-8 mt-8 rounded-full transition duration-300 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={handleIconClick}
          >
            <motion.span className="flex items-center justify-center" layout>
              <motion.span
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  opacity: isTextVisible ? 1 : 0,
                  scale: isTextVisible ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                {isTextVisible && "Bora embarcar nessa Jornada?"}
                <LucidePlane className="h-6 w-6 mr-2" />
              </motion.span>
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
