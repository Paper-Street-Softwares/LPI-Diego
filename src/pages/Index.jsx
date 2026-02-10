import { lazy, Suspense } from 'react'

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import HeroTemplateNovo from '../components/sections/HeroTemplateNovo'
import StepsNovoTemplate from '../components/sections/StepsNovoTemplate'
import FaqNovoTemplate from '../components/sections/FaqNovoTemplate'

// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(
  () => import('../components/sections/FeaturesNovaTemplate'),
)
// const FeaturesSemImage = lazy(() =>
//   import('../components/sections/FeaturesSemImage')
// )
const CtaNovoTemplate = lazy(
  () => import('../components/sections/CtaNovoTemplate'),
)
const AboutNovoTemplate = lazy(
  () => import('../components/sections/AboutNovoTemplate'),
)

const Team = lazy(() => import('../components/sections/Team'))

const SocialMediaTemplate = lazy(
  () => import('../components/sections/SocialMediaTemplate'),
)
const FooterNovoTemplate = lazy(
  () => import('../components/sections/FooterNovoTemplate'),
)
const WhatsappAnimated = lazy(
  () => import('../components/interactives/WhatsAppAnimated'),
)

const BlogPosts = lazy(() => import('../components/sections/BlogPosts'))

import { useContext } from 'react'
import { ColorModeProvider } from '../context/UseContextArchive'
import { useColorMode } from '../context/UseContextArchive'
import Cards from '../components/sections/Cards'
import InventarioComparativo from '../components/sections/Tabela'
import Important from '../components/sections/Important'
import Authority from '../components/sections/Authority'
import Speed from '../components/sections/Speed'
import Emergency from '../components/sections/Emergency'
import { Diferences } from '../components/sections/Diferences'
import { AlternatingSection } from '../components/sectionElements/AlternatingSection'

export default function Index() {
  const { colorMode, setColorMode } = useColorMode()

  return (
    <>
      <ColorModeProvider>
        {/* Render imediato */}
        <NavbarNovaTemplate colorMode={colorMode} />

        <main>
          <AlternatingSection index={0} colorMode={colorMode} forcePrimaryDark>
            <HeroTemplateNovo colorMode={colorMode} obs={true} obsTwo={false} />
          </AlternatingSection>

          <AlternatingSection index={1} colorMode={colorMode}>
            <Important colorMode={colorMode} />
          </AlternatingSection>

          <AlternatingSection index={2} colorMode={colorMode}>
            <Suspense>
              <FeaturesNovaTemplate
                colorMode={colorMode}
                frasesDestaque={true}
                accordion={false}
              />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={3} colorMode={colorMode}>
            <Suspense>
              <AboutNovoTemplate
                colorMode={colorMode}
                ButtonModal={false}
                benefits={false}
              />
              <SocialMediaTemplate colorMode={colorMode} />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={4} colorMode={colorMode} forcePrimaryDark>
            <Suspense>
              <CtaNovoTemplate colorMode={colorMode} container={true} />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={5} colorMode={colorMode}>
            <Suspense>
              <StepsNovoTemplate colorMode={colorMode} />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={6} colorMode={colorMode}>
            <Suspense>
              <FaqNovoTemplate colorMode={colorMode} />
            </Suspense>
          </AlternatingSection>

          <AlternatingSection index={7} colorMode={colorMode} forcePrimaryDark>
            <Suspense>
              <FooterNovoTemplate
                colorMode={colorMode}
                mapa={false}
                phone={true}
                phoneSecond={false}
                expediente={false}
                adress={false}
                email={true}
                emailSecond={false}
                fraseFooter={true} // frase Google LLC
                obs={false}
              />
            </Suspense>
          </AlternatingSection>

          <Suspense fallback={null}>
            <WhatsappAnimated colorMode={colorMode} />

            {/* <Emergency colorMode={colorMode} /> */}
            {/* <Diferences colorMode={colorMode} /> */}
            {/* <Speed colorMode={colorMode} /> */}
            {/* <Cards colorMode={colorMode} /> */}
            {/* <Team colorMode={colorMode} /> */}
            {/* <Authority colorMode={colorMode} /> */}
          </Suspense>
        </main>
      </ColorModeProvider>
    </>
  )
}
