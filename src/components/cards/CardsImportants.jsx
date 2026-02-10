import React from 'react'
import imgIcon from '../../assets/imgs/icons/exclamation.webp'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'

function CardsImportants({ title, paragraph, colorMode, className }) {
  //precisa fazer colorMode
  let bgCircle, bgCard, titleMode, description
  switch (colorMode) {
    case 'light':
      bgCard = 'bg-white'
      bgCircle = 'bg-terciary'
      titleMode = 'text-corTitulosPreto'
      description = 'text-corOutrosTextosPreto'
      break
    case 'dark':
      bgCard = 'bg-black'
      bgCircle = 'bg-primaryLight'
      titleMode = 'text-corTitulosBranca'
      description = 'text-corOutrosTextosBranca'
      break
    default:
      bgCard = 'bg-white'
      bgCircle = 'bg-primaryLight'
      titleMode = 'text-corTitulosPreto'
      description = 'text-corOutrosTextosPreto'
  }
  return (
    <MotionDivDownToUp>
      <div
        className={`relative h-fit shadow-lg max-w-[400px] py-12 px-10 rounded-[18px] flex flex-col gap-4 font-secondFont group transition-all duration-700 hover:scale-105 ${className ?? bgCard} `}
      >
        <h1
          className={`text-start font-bold duration-700 ${className ?? titleMode}`}
        >
          {title}
        </h1>
        <p className={`text-start ${description} duration-700`}>{paragraph}</p>

        <div
          className={`absolute border-2 border-primaryDark duration-700 transition-all rounded-full p-3 -top-6 left-6 ${bgCircle}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* <circle cx="12" cy="12" r="10" /> */}

            {/* traço principal maior */}
            <line x1="12" y1="0" x2="12" y2="14.5" />

            {/* ponto do ! bem maior */}
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>

          {/* <img
            src={imgIcon}
            width={32}
            height={32}
            alt="Ícone de exclamação"
            className="w-8"
          /> */}
        </div>
      </div>
    </MotionDivDownToUp>
  )
}

export default CardsImportants
