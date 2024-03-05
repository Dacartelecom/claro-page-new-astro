import type { FC } from "react";
import type { SubSectionButtonProps } from "../../interfaces/Planexboxprops";


const SubSectionButton: FC<SubSectionButtonProps> = ({
  text,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={ onClick }
      className={`
        sub-section-button
        ${ selected ? 'selected' : '' }
        appearance-none
        w-full
        p-4
        bg-white
        text-[#FE0000]
        border-[#333333]
        hover:bg-[#FE0000]
        hover:text-slate-100
        duration-500
        ease-linear
        border
      `}
    >
      <span
        className='
          font-semibold
          text-base
        '
      >
        { text }
      </span>
    </button>
  )
};

export default SubSectionButton;
