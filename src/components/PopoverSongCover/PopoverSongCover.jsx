import React, { useState } from 'react'
import { RiArrowDropDownFill, RiStarSFill, RiEditBoxLine, RiDeleteBinLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { Popover } from 'react-tiny-popover'
import { CoverMenuIcon, PopMenu, PopCoverItems, PopItems } from '../../ui/index'
import PopoverNavbar from '../PopoverNavbar/PopoverNavbar'



const PopoverSongCover = () => {
  const [isPopOpen, setIsPopOpen] = useState(false)
  const navigate = useNavigate();

  return (
        <Popover
          isOpen={isPopOpen}
          onClickOutside={() => setIsPopOpen(false)}
          positions={['bottom']} // preferred positions by priority
          content={
            <PopMenu>
              <PopCoverItems>
                <PopItems><RiStarSFill /> Favorite</PopItems>
                <PopItems><RiEditBoxLine /> Edit</PopItems>
                <PopItems><RiDeleteBinLine /> Delete</PopItems>
              </PopCoverItems>
            </PopMenu>
          }
        >
          <CoverMenuIcon onClick={() => setIsPopOpen(!isPopOpen)}>
            <RiArrowDropDownFill />
          </CoverMenuIcon>

        </Popover>
  )
}

export default PopoverSongCover