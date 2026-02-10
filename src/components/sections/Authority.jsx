import React from 'react'
import SectionArea from '../sectionElements/SectionArea'
import SectionWrapper from '../sectionElements/SectionWrapper'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'
import CardsImportants from '../cards/CardsImportants'
import content from '../../content/content'
import ButtonReflexo from '../../components/interactives/ButtonReflexo'
import MotionDivDownUp from '../animation/MotionDivDownToUp'

function Authority({ colorMode }) {
  const listCards = Object.values(content.texts.authority.cards)
  let backgroundMode, text, textOpacity, textDestaque

  switch (colorMode) {
    case 'light':
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosPreto'
      textOpacity = 'text-corOutrosTextosPreto'
      textDestaque = 'text-primaryDark'
      break
    case 'dark':
      backgroundMode = 'bg-darkOpacity'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
      break
    default:
      backgroundMode = 'bg-secondary/60'
      text = 'text-corTitulosBranca'
      textOpacity = 'text-corOutrosTextosBranca'
      textDestaque = 'text-primaryDark'
  }

  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.authority.miniTag}
          title={content.texts.authority.title}
          subtitle={content.texts.authority.subtitle}
          colorMode={colorMode}
        />

        <div className="grid gap-12 tablet1:grid-cols-2">
          {listCards.map((item) => (
            <CardsImportants
              title={item.title}
              paragraph={item.paragraph}
              colorMode={colorMode}
            />
          ))}
        </div>

        <MotionDivDownUp>
          <p
            className={`flex justify-center font-secondFont text-center w-full my-12 ${textOpacity}`}
          >
            {content.texts.authority.fraseObs}
          </p>
        </MotionDivDownUp>

        <MotionDivDownUp>
          <ButtonReflexo
            label={content.texts.authority.ctaButtonText}
            icon={content.texts.svgs.wpp}
            link={content.texts.links.ctaWhatsapp}
          />
        </MotionDivDownUp>
      </SectionWrapper>
    </SectionArea>
  )
}

export default Authority
