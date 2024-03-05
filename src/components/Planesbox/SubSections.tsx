'use client'
import type { FC } from 'react';
import type { SubSectionsProps } from '../../interfaces/Planexboxprops';
import SubSectionButton from './SubSectionButton';

const SubSections: FC<SubSectionsProps> = ({
  titles,
  selectedIndex,
  setSelectedIndex
}) => {

  return (
    <div
      className='
        sub-sections
        max-md:px-16
        lg:flex
        max-xl:px-28
        xl:py-0
        xl:px-0
      '
    >
      {
        titles.map((item, index) => (
          <SubSectionButton
            key={ index }
            text={ item }
            selected={ index === selectedIndex }
            onClick={ () => setSelectedIndex(index) }
          />
        ))
      }
    </div>
  )
}

export default SubSections
