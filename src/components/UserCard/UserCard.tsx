import { JSX } from 'react'

import './userCard.css'

interface UserCardProps {
  /**
   * GitHub profile name to get avatar from the profile.
   */
  github: string
  /**
   * Is team leader ?
   * @default false
   */
  lead?: boolean
  /**
   * Started and active activity since.
   */
  since?: string
  /**
   * Start date of their activity.
   * For retired members.
   */
  from?: string
  /**
   * End date of their activity.
   * For retired members.
   */
  to?: string
}

const UserCard = ({ github, lead = false, since, from, to }: UserCardProps): JSX.Element => (
  <div className={'user-card'}>
    <img src={`https://github.com/${github}.png`} alt={`${github}'s avatar`} className={'user-card__avatar'} />
    <h3 className={'user-card__username'} id={github}>{github}</h3>
    {since && <p className={'user-card__since'}>
      Relecteur·ice MDN depuis le&nbsp;:<br />{since}
      {lead && <><br/><strong>(Tête d'équipe)</strong></>}
    </p>}
    {from && to &&
      <p className={'user-card__from-to'}>
        {from} au {to}{lead && <><br/><strong>(Tête d'équipe)</strong></>}
      </p>
    }
  </div>
)

export { UserCard }
