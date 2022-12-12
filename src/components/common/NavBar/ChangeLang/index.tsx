import {
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Portal,
} from '@chakra-ui/react'
import Image from 'next/image'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Tooltip from '../../custom/Tooltip'
import { useTranslation } from 'src/hooks/useTranslation'
import { useState, useRef } from 'react'
import { localesList } from 'src/constants/locales'

export default function ChangeLang() {
  const [showLanguages, setShowLanguages] = useState<boolean>(false)
  const { t, changeLanguage } = useTranslation()

  const initRef = useRef<any>()

  return (
    <Popover closeOnBlur={false} placement='bottom' initialFocusRef={initRef}>
      <PopoverTrigger>
        <Box as='button'>
          <Tooltip label={t('changeLanguage')}>
            <Box
              display='flex'
              alignItems='center'
              gap='5px'
              borderRadius='15px'
              padding='10px'
              cursor='pointer'
              onClick={() => setShowLanguages((prevState) => !prevState)}
              boxShadow={showLanguages ? '1px 2px 5px rgb(79, 79, 79)' : ''}
              _hover={{
                boxShadow: '1px 2px 5px rgb(53, 53, 53)',
              }}
              _active={{
                boxShadow: '1px 2px 5px rgb(79, 79, 79)',
              }}>
              <Image src='/assets/navbar/world.svg' width={20} height={20} />
              <Box transform={showLanguages ? 'rotate(180deg)' : ''}>
                <MdKeyboardArrowDown />
              </Box>
            </Box>
          </Tooltip>
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          background='black'
          border='none'
          boxShadow='2px 2px 10px rgb(114, 114, 114)'
          fontWeight='bold'
          w='80px'>
          <PopoverArrow bg='black' />
          <PopoverBody p='0' borderRadius='15px'>
            <Box
              borderRadius='15px'
              top='3rem'
              zIndex='9'
              display='flex'
              flexDirection='column'
              justifyContent='center'
              background='black'
              alignItems='center'
              alignContent='center'
              right='0'
              left='0'>
              {localesList.map((locale) => (
                <Box
                  key={locale}
                  p='10px 5px'
                  borderRadius='15px'
                  w='100%'
                  textAlign='center'
                  _hover={{
                    background: 'rgb(18, 18, 18)',
                  }}
                  cursor='pointer'
                  onClick={() => changeLanguage(locale)}>
                  <Text fontSize='xl'>{locale}</Text>
                </Box>
              ))}
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}