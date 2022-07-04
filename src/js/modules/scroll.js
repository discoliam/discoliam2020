import ASScroll from '@ashthornton/asscroll'

export default function () {

  const asscroll = new ASScroll()
  window.addEventListener('load', () => {
      asscroll.enable()
  })
}

