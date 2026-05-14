import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import {
  ShieldAlert,
  FileX,
  Landmark,
  PackageX,
  Truck,
  FileWarning,
  Plane,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ButtonReflexo from "../interactives/ButtonReflexo";

function Consumidor({ colorMode }) {
  let backgroundMode, text, textOpacity, buttonClass, cardBg;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-terciary/60";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      cardBg = "bg-white";
      buttonClass = "bg-primaryDark text-white hover:bg-opacity-90";
      break;
    case "dark":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      cardBg = "bg-gray-900/50";
      buttonClass = "bg-primaryLight text-primaryDark hover:bg-opacity-90";
      break;
    default:
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      cardBg = "bg-white";
      buttonClass = "bg-primaryDark text-white hover:bg-opacity-90";
  }

  const servicos = [
    {
      titulo: "Cobranças e Fraudes",
      descricao:
        "Recuperação de valores cobrados injustamente e defesa contra golpes bancários.",
      icone: (
        <ShieldAlert strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />
      ),
    },
    {
      titulo: "Negativação Indevida",
      descricao:
        "Limpeza do seu nome no SPC/Serasa e busca por indenizações justas.",
      icone: <FileX strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />,
    },
    {
      titulo: "Problemas Bancários",
      descricao:
        "Resolução de juros abusivos, bloqueios de conta e falhas em cartões.",
      icone: (
        <Landmark strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />
      ),
    },
    {
      titulo: "Produtos com Defeito",
      descricao:
        "Exigência de troca, devolução do dinheiro ou reparo na garantia.",
      icone: (
        <PackageX strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />
      ),
    },
    {
      titulo: "Atrasos e Descumprimentos",
      descricao:
        "Garantia da entrega do produto, cumprimento da oferta ou reembolso.",
      icone: <Truck strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />,
    },
    {
      titulo: "Cancelamentos Abusivos",
      descricao:
        "Defesa contra multas excessivas e quebras de contrato irregulares.",
      icone: (
        <FileWarning strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />
      ),
    },
    {
      titulo: "Problemas com Voos",
      descricao:
        "Indenizações por atrasos, cancelamentos, extravio de bagagem e reembolso.",
      icone: <Plane strokeWidth={1.5} className="w-8 h-8 text-primaryDark" />,
    },
  ];

  return (
    <SectionArea
      className={`${backgroundMode} py-16 transition-colors duration-500`}
    >
      <SectionWrapper>
        {/* --- GRID DE SERVIÇOS --- */}
        <SectionHeaderNovo
          title="Atuação especializada nas principais demandas de consumo:"
          colorMode={colorMode}
        />

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 mx-auto font-medium font-secondFont md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, index) => (
            <MotionDivDownToUp key={index}>
              <div
                className={`flex flex-col h-full items-center p-8 text-center transition-all duration-300 ${cardBg} border border-gray-200/50 shadow-sm rounded-2xl hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-4 mb-6 bg-gray-100 rounded-2xl">
                  {servico.icone}
                </div>
                <h3 className="mb-3 text-xl font-bold text-primaryDark">
                  {servico.titulo}
                </h3>
                <p className={`text-sm leading-relaxed opacity-80`}>
                  {servico.descricao}
                </p>
              </div>
            </MotionDivDownToUp>
          ))}
        </div>

        {/* --- SEÇÃO DE FECHAMENTO E CTA --- */}
        <div className="max-w-5xl px-4 mx-auto mt-24">
          <div className="relative p-8 overflow-hidden shadow-2xl md:p-12 bg-primaryDark rounded-3xl">
            {/* Elemento Decorativo de Fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 rounded-full bg-white/5 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-left md:max-w-[60%]">
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  Pronto para garantir seus direitos?
                </h3>
                <p className="text-lg text-white/80">
                  Busco soluções jurídicas seguras e eficazes para reparar seus
                  prejuízos. Entre em contato agora para uma análise detalhada
                  do seu caso.
                </p>
              </div>

              <a
                href="#contato"
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg ${buttonClass}`}
              >
                <ButtonReflexo
                  label="Falar com especialista"
                  icon={content.texts.svgs.wpp}
                  link={content.texts.links.ctaWhatsapp}
                  className={`clickevent`}
                />
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Consumidor;
