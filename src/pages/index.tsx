import type {ReactNode} from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import { Grid } from '../components/Grid'
import { UserCard } from '../components/UserCard/UserCard'

import styles from './index.module.css'

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={'container'}>
        <Heading as={'h1'} className={'hero__title'}>
          {siteConfig.title}
        </Heading>
        <p className={'hero__subtitle'}>{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation du MDN en français, guide pour les contributrices et contributeurs.">
      <HomepageHeader />
      <main style={{marginBlock: '3rem'}}>
        <section>
          <Heading as={'h2'}>La documentation du MDN en français</Heading>
          <p>Bienvenue sur la documentation du MDN en français, vous trouverez ici tous les éléments nécessaires pour comprendre comment contribuer à la documentation du MDN en français.</p>
        </section>
        <section>
          <Heading as={'h2'}>Contribuer à la documentation</Heading>
          <p>Cette documentation sert <a href={'./docs'}>de guide pour les contributeur·ice·s</a> qui souhaitent participer à la documentation du MDN en français.</p>
          <p>Vous pouvez y contribuer en proposant de nouvelles informations ou en corrigeant des erreurs présentes dans la documentation. N'hésitez pas à faire des propositions d'amélioration, que ce soit sur le fond ou la forme de la documentation.</p>
        </section>
        <section>
          <Heading as={'h2'}>Rejoindre la communauté</Heading>
          <p>Rejoignez-nous pour discuter et partager avec les autres contributeur·ice·s sur <a href={'https://chat.mozilla.org/#/room/#l10n-fr:mozilla.org'}>le Matrix #l10n-fr</a>.</p>
          <Heading as={'h3'}>L'équipe vous accueille</Heading>
          <Grid>
            <UserCard github={'cw118'} /><UserCard github={'tristantheb'} />
          </Grid>
          <p>… ainsi que les membres des diverses communautés de Mozilla, également présentes.</p>
        </section>
      </main>
    </Layout>
  )
}
