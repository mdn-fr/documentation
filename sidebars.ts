import type {SidebarsConfig} from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    'home',
    {
      type: 'category',
      label: 'Guides pour comprendre le MDN',
      link: {
        type: 'generated-index',
        title: 'Guides pour comprendre le MDN',
        slug: '/guides',
        keywords: ['guides'],
      },
      collapsed: true,
      items: [
        'guides/la-structure-des-fichiers-markdown/index',
        'guides/le-front-matter/index',
        'guides/les-ancres-des-liens-internes/index',
        'guides/les-blocs-de-codes/index',
        'guides/les-exemples-interactifs/index',
        'guides/les-macros-et-leur-fonctionnement/index'
      ],
    },
    {
      type: 'category',
      label: 'Guides pour contribuer',
      link: {
        type: 'generated-index',
        title: 'Guides pour contribuer',
        slug: '/contribuer',
        keywords: ['guides'],
      },
      collapsed: true,
      items: [
        'contribuer/mettre-en-place-son-depot-bifurque/index',
        'contribuer/mettre-en-place-un-environnement-de-developpement-local/index',
        'contribuer/methodes-avancees-pour-contribuer-sur-github/index',
      ],
    },
  ],
}

export default sidebars
