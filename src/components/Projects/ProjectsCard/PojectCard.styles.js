import styled from 'styled-components'
import { ipad, large } from '../../../styles/screens'

export const ProjectCardContainer = styled.div`
  border-radius: var(--radius);
  box-shadow: 2px 1.5px 7px var(--shadow-color);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237cb4f4' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-color: var(--oxford-dark-blue);
  position: relative;
  margin: 0 auto;
  transition: var(--transition);
  padding: 1.8rem 0.8rem;
  margin-bottom: 2.5rem;
  max-width: 300px;

  @media (min-width: ${ipad}) {
    width: auto;
    margin: 0 auto;
    width: 260px;
  }

  @media (min-width: ${large}) {
    width: 100%;
  }

  &:hover {
    box-shadow: 3px 3px 7px var(--shadow-color);
    background-color: var(--oxford-blue);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%237cb4f4' fill-opacity='0.045'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E");
    transform: scale(1.01);

    @media (min-width: ${ipad}) {
      transform: scale(1.05);
    }
  }
`

export const ProjectCardTitle = styled.h2`
  font-size: 1rem;
  color: var(--gainsboro);
  text-transform: uppercase;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  font-family: var(--inter-font);
  font-weight: 700;

  &:hover {
    color: var(--powder-blue);
  }

  i {
    margin-right: 0.3rem;
    font-size: 0.5rem;
  }
`

export const ProjectCardDescription = styled.p`
  margin-top: 1rem;
  color: var(--light-gray);
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  line-height: 1.5;
  font-size: 1.05rem;
  letter-spacing: 0.1px;
  margin-bottom: 2rem;

  @media (min-width: ${ipad}) {
    font-size: 1rem;
    height: 130px;
    margin-bottom: 0;
    text-align: left;
  }

  @media (min-width: ${large}) {
    height: 140px;
  }
`

export const ProjectCardAnchorIcon = styled.i`
  font-size: 1.05rem;
  transition: var(--transition);
  margin-right: 0.35rem;
  color: var(--powder-blue);
`

export const ProjectCardAnchorSpan = styled.span`
  visibility: visible;
`

export const ProjectCardAnchor = styled.a`
  text-decoration: none;
  font-family: var(--inter-font);
  color: var(--powder-blue);
  transition: var(--transition);
  display: inline-block;

  :hover {
    color: var(--green);

    ${ProjectCardAnchorSpan} {
      text-decoration: underline;
    }

    ${ProjectCardAnchorIcon} {
      text-decoration: none;
      color: var(--green);
    }
  }
`

export const ProjectCardDateIcon = styled.i`
  margin-right: 0.35rem;
  font-size: 1rem;
  color: var(--powder-blue);
  transition: var(--transition);
`

export const ProjectCardDateText = styled.div`
  margin-top: 1rem;
  font-size: 0.75rem;
  font-family: var(--open-sans-font);
  color: var(--powder-blue);
  transition: var(--transition);
  font-weight: 600;
  display: inline-block;

  &:hover {
    color: var(--green);

    ${ProjectCardDateIcon} {
      color: var(--green);
    }
  }
`

export const ProjectsCardLangIcon = styled.i`
  margin-right: 0.5rem;
  font-size: 1.1rem;
  color: var(--powder-blue);
`

export const ProjectCardLang = styled.p`
  padding-top: 1rem;
  font-family: var(--inter-font);
  color: var(--powder-blue);
  font-size: 0.85rem;
  transition: var(--transition);
  display: inline-block;

  &:hover {
    color: var(--green);
    transition: var(--transition);

    ${ProjectsCardLangIcon} {
      transition: var(--transition);

      color: var(--green);
    }
  }
`