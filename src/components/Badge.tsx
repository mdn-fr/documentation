import { JSX } from "react"

type BadgeProps = {
  text: string
  color: string
}

const Badge = ({ text, color }: BadgeProps): JSX.Element => (
  <div className={'badge'} style={{ backgroundColor: color }}>
    <span className={'badge__label'}>{text}</span>
  </div>
)

export { Badge }
