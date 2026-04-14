import { JSX } from 'react'
import { Badge } from '../Badge'
import './previsionTable.css'

interface PrevisionRowProps {
  children?: React.ReactNode
  weekStart: string
  weekEnd: string
  status: number | null
  objective: number
  break?: boolean
}

const statusBadge = (status: number | null) => {
  if (status === null || status === 0) {
    return (<Badge text={'Pas démarré'} color={'#fa3e3e'} />)
  } else if (status > 0 && status < 100) {
    return (`${status} %`)
  } else if (status === 100) {
    return (<Badge text={'Terminé'} color={'#54c7ec'} />)
  } else {
    return '-'
  }
}

const PrevisionRow = ({ children, ...props }: PrevisionRowProps): JSX.Element => (
  <div className={'prevision-table__row'}>
    <div className={'prevision-table__row__cell'}>
      <div className={'prevision-table__row__cell__head'}>Thème</div>
      <div className={'prevision-table__row__cell__data'}>
        {props.break ? 'Pas de thème' : children}
      </div>
    </div>
    <div className={'prevision-table__row__cell'}>
      <div className={'prevision-table__row__cell__head'}>Début</div>
      <div className={'prevision-table__row__cell__data'}>
        {props.weekStart}
      </div>
    </div>
    <div className={'prevision-table__row__cell'}>
      <div className={'prevision-table__row__cell__head'}>Fin</div>
      <div className={'prevision-table__row__cell__data'}>
        {props.weekEnd}
      </div>
    </div>
    <div className={'prevision-table__row__cell'}>
      <div className={'prevision-table__row__cell__head'}>Statut</div>
      <div className={'prevision-table__row__cell__data'}>
        {statusBadge(props.status)}
      </div>
    </div>
    <div className={'prevision-table__row__cell'}>
      <div className={'prevision-table__row__cell__head'}>Cible</div>
      <div className={'prevision-table__row__cell__data'}>
        {props.objective > 0 && props.objective <= 100 ? `${props.objective} %` : '-'}
      </div>
    </div>
  </div>
)

const PrevisionHeader = (): JSX.Element => (
  <div className={'prevision-table__header'}>
    <div className={'prevision-table__header__cell'}>Thème</div>
    <div className={'prevision-table__header__cell'}>Début</div>
    <div className={'prevision-table__header__cell'}>Fin</div>
    <div className={'prevision-table__header__cell'}>Statut</div>
    <div className={'prevision-table__header__cell'}>Cible</div>
  </div>
)

const PrevisionTable = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div className={'prevision-table'}>
    {children}
  </div>
)

export { PrevisionHeader, PrevisionRow, PrevisionTable }
