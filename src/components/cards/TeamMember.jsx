import { ArrowRight } from 'lucide-react'

export default function TeamMember(props) {
  const { img, alt, name, role, work, onClick } = props

  return (
    <div className="flex flex-col items-center p-[20px] w-full tablet1:w-[45%] desktop1:w-[30%] text-white font-secondFont">
      <img
        alt={alt}
        src={img}
        width={215}
        height={215}
        className="w-[215px] h-[215px] rounded-full mb-[24px]"
      />

      <p className="text-center mb-[8px] font-bold">{role}</p>
      <h1 className="font-medium text-center">{name}</h1>

      <div className="mt-2 flex flex-col items-center">
        <p className="text-center">{work}</p>

        <button
          onClick={onClick}
          className="text-primaryLight/70 hover:scale-95 transition-all flex gap-2 items-center"
        >
          Saiba mais
          <span>
            <ArrowRight width={18} />
          </span>{' '}
        </button>
      </div>
    </div>
  )
}
