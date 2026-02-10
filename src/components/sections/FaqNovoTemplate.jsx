import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../interactives/FaqNovo'
import content from '../../content/content'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import ButtonReflexo from '../../components/interactives/ButtonReflexo'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'

function FaqNovoTemplate({ colorMode }) {
  const faqs = Object.values(content.texts.faq.questions)

  // Classes dinâmicas conforme colorMode
  let text, textOpacity, hoverText, backgroundMode
  switch (colorMode) {
    case 'light':
      text = 'text-corTitulosPreto'
      text = 'text-corTitulosPreto'
      hoverText = 'hover:text-primaryDark'
      backgroundMode = 'bg-transparent'

      break
    case 'dark':
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      hoverText = 'hover:text-primaryLight'
      backgroundMode = 'bg-transparent'
      break

    case 'defaultDark':
      text = 'text-corTitulosPreto'
      text = 'text-corTitulosPreto'
      hoverText = 'hover:text-primaryDark'
      backgroundMode = 'bg-transparent'
      break

    case 'defaultLight':
      text = 'text-corTitulosPreto'
      text = 'text-corTitulosPreto'
      hoverText = 'hover:text-primaryDark'
      backgroundMode = 'bg-transparent'
  }

  return (
    <SectionArea className={`${backgroundMode}`} id="faq">
      <SectionWrapper>
        <section className={` w-full`}>
          <div className="container mx-auto max-w-3xl">
            {/* Header */}
            <SectionHeaderNovo
              miniTitle={content.texts.faq.miniTag}
              title={content.texts.faq.title}
              subtitle={content.texts.faq.subtitle}
              colorMode={colorMode}
            />
            {/* Accordion */}
            <MotionDivDownToUp>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-0"
              >
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger
                      colorMode={colorMode}
                      className={`text-lg font-medium font-secondFont text-left py-6 ${text}`}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className={`font-secondFont font-light pb-6 leading-relaxed ${textOpacity}`}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </MotionDivDownToUp>
          </div>

          <div
            className={`flex justify-center mx-auto mt-12 scale-100 hover:scale-90 duration-500 w-fit transition-all cursor-pointer ${textOpacity}`}
          >
            <a
              href={content.texts.links.ctaWhatsapp}
              className="clickevent w-fit"
              target="_blank"
            >
              Clique aqui caso tenha mais dúvidas
            </a>
            {/* <ButtonReflexo
              icon={content.texts.svgs.wpp}
              link={content.texts.links.ctaWhatsapp}
              label={content.texts.hero.ctaButtonText}
              colorMode={colorMode}
              className="clickevent my-0"
            /> */}
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  )
}

export default FaqNovoTemplate
