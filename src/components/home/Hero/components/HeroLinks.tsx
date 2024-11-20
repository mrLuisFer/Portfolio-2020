import SocialMediaItem from '@/components/common/NavBar/SocialMedia/SocialMediaItem'
import { Button } from '@/components/ui/button'
import { socialMedia } from '@/constants/socialMedia'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

export default function HeroLinks() {
  const { t } = useTranslation()
  const socialMediaFiltered = socialMedia.filter(
    (social) =>
      social.label?.toLowerCase() === 'linkedin' ||
      social.label?.toLowerCase() === 'github'
  )

  return (
    <section className='mt-8 flex w-full flex-wrap items-center justify-center gap-5 md:justify-start md:gap-0 md:space-x-8 md:pl-0 lg:flex-nowrap'>
      {socialMediaFiltered.map((social, id) => (
        <SocialMediaItem key={social.label} item={social} id={id} />
      ))}
      <Button asChild className='hidden md:block'>
        <Link href='/#about'>
          <FaUser />
          {t('aboutMe')}
        </Link>
      </Button>
      <Link
        href='/#about'
        className='flex items-center gap-2 rounded-lg bg-neutral-800 p-2 text-sm md:hidden'>
        <FaUser />
        {t('aboutMe')}
      </Link>
    </section>
  )
}
