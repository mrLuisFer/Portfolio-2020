import { GradientColors } from 'src/utils/gradientColors'
import { SocialMedia } from '@/constants/socialMedia'

export interface FooterLink {
  label: string
  href: string
  isExternal: boolean
}

export interface FooterElements {
  title: string
  titleColor: keyof GradientColors
  links: FooterLink[]
}

export const getFooterElements = (t: (key: string) => string): FooterElements[] => [
  {
    title: t('social'),
    titleColor: 'darkBlue',
    links: [
      { label: 'Twitter', href: SocialMedia.twitter, isExternal: true },
      { label: 'GitHub', href: SocialMedia.github, isExternal: true },
      { label: 'LinkedIn', href: SocialMedia.linkedin, isExternal: true },
      { label: 'Gitlab', href: SocialMedia.gitlab, isExternal: true },
    ],
  },
  {
    title: t('navigateTo'),
    titleColor: 'orange',
    links: [
      {
        label: 'Contact me',
        href: SocialMedia.linkedin,
        isExternal: true,
      },
      {
        label: 'More projects',
        href: SocialMedia.githubRepositories,
        isExternal: true,
      },
      {
        label: 'Blog (Deprecated)',
        href: 'https://mrluisfer-blog.netlify.app/',
        isExternal: true,
      },
    ],
  },
  {
    title: t('other'),
    titleColor: 'yellow',
    links: [
      {
        label: 'Seo Generator',
        href: 'https://seo-generator.vercel.app/',
        isExternal: true,
      },
      {
        label: 'Linktry',
        href: 'https://linktry-mrluisfer.vercel.app/',
        isExternal: true,
      },
      {
        label: 'GitHub User Finder',
        href: 'https://gh-find.netlify.app/',
        isExternal: true,
      },
      {
        label: 'Git Basic Guide',
        href: 'https://git-guia.netlify.app/',
        isExternal: true,
      },
      {
        label: 'SVGL (Used in this site)',
        href: 'https://svgl.app',
        isExternal: true,
      },
    ],
  },
]
