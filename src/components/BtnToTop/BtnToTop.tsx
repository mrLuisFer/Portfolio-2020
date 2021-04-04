export default function BtnToTop() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button className='BtnToTop' onClick={scrollToTop} type='button'>
      <i className='fas fa-arrow-up BtnToTop__arrow-icon' />
    </button>
  )
}
