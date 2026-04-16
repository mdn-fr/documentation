import { JSX } from 'react'

interface GridProps {
  children: JSX.Element | JSX.Element[]
  cols?: number
  gap?: string
}

const Grid = ({
  children,
  cols = 2,
  gap = '1rem'
}: GridProps): JSX.Element => (
  <div className={'jsx-grid'} style={{
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: gap
  }}>
    {children}
  </div>
)

export { Grid }
