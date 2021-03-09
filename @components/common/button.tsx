import { transform } from "lodash"
import { MouseEventHandler } from "react"

export type Props = {
  children: Element | string
  tier?: 'primary' | 'secondary' | 'caption'
  size?: 'lg' | 'md' | 'sm'
  transforms?: boolean

  onTap?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, tier, size, transforms, onTap }: Props) {

  const color = () => {
    switch (tier) {
      case "primary":
        return 'bg-black shadow-md hover:bg-gray-600'
      case "secondary":
        return 'bg-gray-500 hover:bg-gray-400'
      default:
        return 'hover:bg-gray-200'
    }
  }

  const caption = () => {
    switch (tier) {
      case 'caption':
        return 'text-black'
      default:
        return 'text-white'
    }
  }

  const transform = () => {
    if (transforms) {
      return 'uppercase'
    } else {
      return ''
    }
  }

  return (
    <button onClick={onTap} className={`py-2 px-3 rounded-${size || 'md'} ${color()} ${caption()} font-semibold text-sm ${transform()} focus:outline-none focus:ring-2 focus:ring-gray-400`}>
      {children}
    </button>
  )
}
