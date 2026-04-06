import {themes as prismThemes} from 'prism-react-renderer'
import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Documentation de traduction francophone du MDN',
  tagline: 'Comprendre et traduire le MDN facilement',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://mdn-fr.github.io/',
  baseUrl: '/documentation/',

  organizationName: 'mdn-fr',
  projectName: 'documentation',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/mdn-fr/documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/mdn-fr/documentation/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    navbar: {
      title: 'Le MDN Francophone',
      logo: {
        alt: 'Logo de la Documentation des traducteurs MDN Francophone',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/team', label: 'Équipe', position: 'left'},
        {
          href: 'https://github.com/mdn-fr/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Documentation',
              to: '/docs/home',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/Ms6FzTrnYT',
            },
            {
              label: 'Dépôt des traductions',
              href: 'https://github.com/mdn/translated-content',
            },
          ],
        },
        {
          title: 'Plus de pages',
          items: [
            {
              label: 'GitHub de la documentation',
              href: 'https://github.com/mdn-fr/documentation',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
            {
              label: 'GitHub de Docusaurus',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} — Documentation des traducteur·ice·s MDN francophone.<br />Propulsé par Docusaurus.`,
    },
    prism: {
      additionalLanguages: [
        'bash',
        'diff'
      ],
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block code-block-bad-example',
          line: 'bad-example',
          block: {start: 'bad-example-start', end: 'bad-example-end'},
        },
        {
          className: 'code-block code-block-good-example',
          line: 'good-example',
          block: {start: 'good-example-start', end: 'good-example-end'},
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_rA8oUST2KQnixsSBGEdi6CLA6Gz7cWGWzDwmupTGtsxZ",
        appUrl: "https://eu.i.posthog.com",
        enableInDevelopment: false,
      },
    ],
  ],
}

export default config
