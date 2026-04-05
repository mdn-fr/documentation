const Badge = ({ text, color }) => (
  <div className={'badge'} style={{ backgroundColor: color }}>
    <span className={'badge__label'}>{text}</span>
  </div>
)

export { Badge }
