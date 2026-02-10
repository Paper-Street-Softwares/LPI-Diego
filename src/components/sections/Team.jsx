import { useState } from 'react'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import SectionArea from '../sectionElements/SectionArea'
import SectionHeader from '../sectionElements/SectionHeader'
import SectionWrapper from '../sectionElements/SectionWrapper'
import content from '../../content/content'
import TeamMember from '../cards/TeamMember'
import { Dialog } from 'primereact/dialog'
import { X } from 'lucide-react'
import SectionHeaderNovo from '../sectionElements/SectionHeaderNovo'

export default function Team({ colorMode }) {
  const team = Object.values(content.texts.team.cards)

  const [visible, setVisible] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')

  const openModal = (member) => {
    setModalTitle(member.name)
    setModalContent(member.description)
    setVisible(true)
  }

  return (
    <>
      <SectionArea className="bg-darkOpacity" paddingtop id="team">
        <SectionHeaderNovo
          miniTitle={content.texts.team.miniTag}
          title={content.texts.team.title}
          subtitle={content.texts.team.subtitle}
          colorMode={colorMode}
        />

        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp>
            <div className="flex flex-wrap justify-center gap-10">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  img={member.img}
                  alt={member.alt}
                  name={member.name}
                  role={member.title}
                  work={member.work}
                  onClick={() => openModal(member)}
                />
              ))}
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>

      {/* MODAL PRIME */}
      <Dialog
        className="font-secondFont bg-white p-4 rounded-md"
        closeIcon={<X size={20} />}
        header={<span className="font-secondFont px-4">{modalTitle}</span>}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: '50vw' }}
        breakpoints={{
          '4000px': '641px',
          '1024px': '641px',
          '641px': '85vw',
        }}
      >
        <div className="text-paragraph3 px-4 pb-4">
          <p className="mt-[15px] mb-[20px] text-black/80">{modalContent}</p>
        </div>
      </Dialog>
    </>
  )
}
