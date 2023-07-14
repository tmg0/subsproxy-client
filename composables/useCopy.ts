import { nanoid } from 'nanoid'

const id = nanoid()

export const useCopy = (text: string) => {
  const exist = document.querySelector(`#${id}`)
  if (exist) { document.body.removeChild(exist) }
  const dom = document.createElement('input')
  dom.id = id
  dom.value = text
  dom.ariaHidden = 'true'
  dom.style.clip = 'rect(0, 0, 0, 0)'
  dom.style.position = 'fixed'
  dom.style.zIndex = '-999'
  dom.style.top = '0'
  dom.style.transform = 'tanslateY(-100%)'
  dom.style.opacity = '0'
  document.body.appendChild(dom)
  dom.select()
  document.execCommand('copy')
  document.body.removeChild(dom)
}
