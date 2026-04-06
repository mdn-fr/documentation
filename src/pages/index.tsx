import type {ReactNode} from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './index.module.css'

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <h2>La documentation du MDN en français</h2>

        <p>Bienvenue sur la documentation du MDN en français, vous trouverez ici tous les éléments nécessaires pour comprendre comment contribuer à la documentation du MDN en français.</p>

        <h2>Contribuer à la documentation</h2>

        <p>Cette documentation sert de guide pour les contributeur·ice·s qui souhaitent participer à la documentation du MDN en français.</p>

        <p>Vous pouvez y contribuer en proposant de nouvelles informations ou en corrigeant des erreurs présentes dans la documentation. N'hésitez pas à faire des propositions d'amélioration, que ce soit sur le fond ou la forme de la documentation.</p>
      </main>
    </Layout>
  )
}
