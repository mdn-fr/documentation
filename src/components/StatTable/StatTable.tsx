import { JSX } from 'react'
import './statTable.css'

interface StatRowProps {
  children: React.ReactNode
  translated: number
  outdated: number
  untranslated: number
  isHot?: boolean
  isHelpWanted?: boolean
  isPlanned?: boolean
}

interface StatLegendProps {
  showHighlight: boolean
  showPlanned: boolean
  showHot: boolean
}

const StatRow = ({ children, ...props }: StatRowProps): JSX.Element => {
  const isFullyUpdated = props.outdated === 0 && props.untranslated === 0

  return (
    <div className={'stat-table__row'} data-hot={props.isHot} data-planned={props.isPlanned} data-help-wanted={props.isHelpWanted} data-fully-updated={isFullyUpdated}>
      <div className={'stat-table__row__cell'}>
        <div className={'stat-table__row__cell__data'}>
          {children}
        </div>
      </div>
      {!isFullyUpdated ? (
      <>
        <div className={'stat-table__row__cell'}>
          <div className={'stat-table__row__cell__data'}>
            {props.translated}
          </div>
        </div>
        <div className={'stat-table__row__cell'}>
          <div className={'stat-table__row__cell__data'}>
            {props.outdated}
          </div>
        </div>
        <div className={'stat-table__row__cell'}>
          <div className={'stat-table__row__cell__data'}>
            {props.untranslated}
          </div>
        </div>
      </>
      ) : (
        <div className={'stat-table__row__cell_large'}>
          <div className={'stat-table__row__cell__data'}>
            Section complètement à jour 🎉
          </div>
        </div>
      )}
    </div>
  )
}

const StatHeader = (): JSX.Element => (
  <div className={'stat-table__header'}>
    <div className={'stat-table__header__cell'}>Catégorie</div>
    <div className={'stat-table__header__cell'}>À jour</div>
    <div className={'stat-table__header__cell'}>À actualiser</div>
    <div className={'stat-table__header__cell'}>À traduire</div>
  </div>
)

const StatSubHeader = (props: { name: string }): JSX.Element => (
  <div className={'stat-table__header'}>
    <div className={'stat-table__header__cell'}>Catégorie : {props.name}</div>
    <div className={'stat-table__header__cell'}>À jour</div>
    <div className={'stat-table__header__cell'}>À actualiser</div>
    <div className={'stat-table__header__cell'}>À traduire</div>
  </div>
)

const StatTable = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className={'stat-table'}>
    {children}
  </div>
)

const StatLegend = ({ showHighlight = false, showPlanned = false, showHot = false }: StatLegendProps): JSX.Element => (
  <div className={'stat-table__legend'}>
    {showHighlight && (
      <><div className={'stat-table__row'} style={{display: 'inline-block', height: '25px', verticalAlign: 'middle', width: '40px'}} data-help-wanted></div> = Chantier public mis en avant<br /></>
    )}
    {showPlanned && (
      <><div className={'stat-table__row'} style={{display: 'inline-block', height: '25px', verticalAlign: 'middle', width: '40px'}} data-planned></div> = Chantier réservé par l'équipe<br /></>
    )}
    {showHot && (
      <><div className={'stat-table__row'} style={{display: 'inline-block', height: '25px', verticalAlign: 'middle', width: '40px'}} data-hot></div> = Chantier public prioritaire</>
    )}
  </div>
)

export { StatHeader, StatSubHeader, StatRow, StatTable, StatLegend }
