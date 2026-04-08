---
title: La structure des fichiers Markdown
slug: /guides/la-structure-des-fichiers-markdown
keywords: [documentation, html, markdown, mdn, traductions]
tags: [guides, markdown]
---

Le **Markdown** n'est pas un langage de programmation, mais un langage de balisage léger qui permet de structurer des documents de texte, pour un usage web, sans écrire le moindre élément HTML. Il favorise la lisibilité et la sémantique, chaque balise Markdown sert à organiser l'information plutôt que de définir son style.

Dans ce guide, nous allons voir à quoi ressemble le Markdown dans un fichier et quelles sont les balises qui sont utilisées dans la documentation du MDN.

## Comment le MDN a adopté le Markdown

Jusqu'en septembre 2021, les pages de la documentation étaient écrites en HTML. [En juin 2021 et jusqu'en septembre de la même année <sup>(angl.)</sup>](https://hacks.mozilla.org/2022/09/the-100-percent-markdown-expedition/), un grand chantier de conversion des pages a été réalisé pour utiliser le format Markdown.

Cela a eu pour objectif de fournir une syntaxe plus simple à lire et à écrire que l'éditeur « <i lang="en">What You See Is What You Get (<abbr>WYSIWYG</abbr>)</i> » du MediaWiki de l'époque.

Le changement a été opéré après la première action majeure qui a été annoncée en décembre 2020, avec [l'arrivée de Yari, le moteur de la documentation qui est venu remplacer Kuma <sup>(angl.)</sup>](https://hacks.mozilla.org/2020/12/welcome-yari-mdn-web-docs-has-a-new-platform/).

## Différences entre HTML et Markdown

Une page HTML se structure de manière à comporter un titre, des éléments de métadonnées, et un contenu divisé en bloc.
Ces blocs doivent être définis à chaque fois que vous écrivez une nouvelle ligne d'un paragraphe, un titre, etc.

```html title="HTML"
<p class="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate neque quam, nec viverra nulla hendrerit dignissim.</p>

<h2 id="my-title">Mon titre</h2>

<p>Je suis <em>une description</em> complète qui <strong>met en avant un contenu</strong> pour l'expliquer.</p>
```

Le Markdown vient alléger le processus en utilisant des balises simplifiées.

```markdown title="Markdown"
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate neque quam, nec viverra nulla hendrerit dignissim.

## Mon titre

Je suis _une description_ complète qui **met en avant un contenu** pour l'expliquer.
```

Cette grande différence nous permet d'obtenir un rendu identique, pour une écriture claire et rapide de la page à modifier.

### Le balisage Markdown

Les tableaux suivants présentent les différentes balises Markdown (et GitHub Flavored Markdown, qui est une version étendue de Markdown avec des fonctionnalités personnalisées) utilisées dans la documentation du MDN.

#### Le Markdown classique

Les éléments présentés dans ce tableau, sont les éléments qui composent la base du Markdown et qui représentent des éléments HTML communs, tels que les titres, les listes, le gras, le code, etc.

<table>
  <caption>Les différentes balises Markdown utilisées dans la documentation</caption>
  <thead>
    <tr>
      <th>Balise</th>
      <th>Type</th>
      <th>Équivalent en HTML</th>
      <th>Exemple en Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`#`</td>
      <td>Titres</td>
      <td>
        ```html
        <h2>Titre</h2>
        ```
      </td>
      <td>
        ```markdown
        ## Titre de niveau 2
        ```
      </td>
    </tr>
    <tr>
      <td>`**`</td>
      <td>Gras</td>
      <td>
        ```html
        <strong>Texte</strong>
        ```
      </td>
      <td>
        ```markdown
        **Texte en gras**
        ```
      </td>
    </tr>
    <tr>
      <td>`_`</td>
      <td>Italique</td>
      <td>
        ```html
        <em>Texte</em>
        ```
      </td>
      <td>
        ```markdown
        _Texte en italique_
        ```
      </td>
    </tr>
    <tr>
      <td>`-`</td>
      <td>Liste à puces</td>
      <td>
        ```html
        <ul>
          <li>Élément de liste</li>
        </ul>
        ```
      </td>
      <td>
        ```markdown
        - Élément de liste
        ```
      </td>
    </tr>
    <tr>
      <td>`1.`</td>
      <td>Liste ordonnée</td>
      <td>
        ```html
        <ol>
          <li>Premier élément</li>
        </ol>
        ```
      </td>
      <td>
        ```markdown
        1. Premier élément
        ```
      </td>
    </tr>
    <tr>
      <td>`[texte](url)`</td>
      <td>Lien</td>
      <td>
        ```html
        <a href="url">Texte</a>
        ```
      </td>
      <td>
        ```markdown
        [Texte du lien](https://example.com)
        ```
      </td>
    </tr>
    <tr>
      <td>`![alt](url)`</td>
      <td>Image</td>
      <td>
        ```html
        <img src="url" alt="Texte">
        ```
      </td>
      <td>
        ```markdown
        ![Texte alternatif](https://example.com/image.png)
        ```
      </td>
    </tr>
    <tr>
      <td>`` ` ``</td>
      <td>Code en ligne</td>
      <td>
        ```html
        <code>code</code>
        ```
      </td>
      <td>
        ```markdown
        `code en ligne`
        ```
      </td>
    </tr>
    <tr>
      <td>` ``` `</td>
      <td>Bloc de code</td>
      <td>
        ```html
        <pre class="language-markdown"><code>code</code></pre>
        ```
      </td>
      <td>
        ````markdown
        ```markdown
        code
        ```
        ````
      </td>
    </tr>
    <tr>
      <td>`>`</td>
      <td>Bloc de citation</td>
      <td>
        ```html
        <blockquote>
          <p>Texte</p>
        </blockquote>
        ```
      </td>
      <td>
        ```markdown
        > Texte de la citation
        ```
      </td>
    </tr>
  </tbody>
</table>

#### Le Markdown étendu

Ces éléments ne sont pas standard au Markdown, mais sont des extensions qui sont créés par les moteurs de rendu qui étendent le Markdown pour fournir des fonctionnalités complémentaires.

<table>
  <caption>Les différentes balises GitHub Flavored Markdown utilisées dans la documentation</caption>
  <thead>
    <tr>
      <th>Balise</th>
      <th>Type</th>
      <th>Équivalent en HTML</th>
      <th>Exemple en Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`- :`</td>
      <td>Définitions</td>
      <td>
        ```html
        <dl>
          <dt>Terme</dt>
          <dd>Définition</dd>
        </dl>
        ```
      </td>
      <td>
        ```markdown
        - Terme
          - : Définition
        ```
      </td>
    </tr>
    <tr>
      <td>
        `> [!NOTE]`<br />
        `> [!WARNING]`<br />
        `> [!CALLOUT]`
      </td>
      <td>Alertes</td>
      <td>
        N'est pas un élément HTML
      </td>
      <td>
        ```markdown
        > [!NOTE]
        > Ceci est une note
        ```
      </td>
    </tr>
    <tr>
      <td>`| |`<br />`| - |`</td>
      <td>Tableaux</td>
      <td>
        ```html
        <table>
          <thead>
            <tr>
              <th>En-tête 1</th>
              <th>En-tête 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Donnée 1</td>
              <td>Donnée 2</td>
            </tr>
          </tbody>
        </table>
        ```
      </td>
      <td>
        ```markdown
        | En-tête 1 | En-tête 2 |
        | --------- | --------- |
        | Donnée 1  | Donnée 2  |
        ```
      </td>
    </tr>
  </tbody>
</table>

## Résumé

Nous avons vu que les pages utilisent un format allégé nommé Markdown et les différentes balises que nous utilisons sur le MDN. Vous pouvez utiliser ce guide comme référence explicative des balises Markdown que vous croiserez dans la documentation. Dans le guide suivant, nous verrons comment fonctionne la « Page de garde » (<i lang="en">Front Matter</i> en anglais) des fichiers Markdown du MDN, représentant les métadonnées d'une page.
