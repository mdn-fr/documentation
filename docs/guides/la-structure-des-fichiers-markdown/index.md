---
title: La structure des fichiers Markdown
slug: /guides/la-structure-des-fichiers-markdown
tags: [guides, markdown]
---

Jusqu'en 2022, les pages de la documentation étaient écrites en HTML. En fin de l'année 2021 et jusqu'au début de l'année 2022, un grand chantier de conversion des pages a été réalisé pour utiliser le format Markdown.

Le Markdown n'est pas un langage de programmation, mais un langage à balisage léger qui permet de structurer des documents de texte pour un usage web, sans écrire le moindre élément HTML.

## Différences entre HTML et Markdown

Une page HTML se structure de manière à comporter un titre, des éléments de métadonnées, et un contenu divisé en bloc.
Ces blocs doivent être définis à chaque fois que vous écivez une nouvelle ligne d'un paragraphe, un titre, etc.

```html title="HTML"
<p class="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate neque quam, nec viverra nulla hendrerit dignissim.</p>

<h2 id="my-title">Mon titre</h2>

<p>Je suis <em>une description</em> complète qui <strong>met en avant un contenu</strong> pour l'expliquer.</p>
```

Le markdown vient alégrer le processus en utilisant des balises simplifiées.

```markdown title="Markdown"
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate neque quam, nec viverra nulla hendrerit dignissim.

## Mon titre

Je suis _une description_ complète qui **met en avant un contenu** pour l'expliquer.
```

À partir de cette grande différence, nous obtenons un résultat identique, pour une écriture claire et rapide de la page à modifier.

### Le balisage Markdown

Voici une présentation des différentes valises Markdown (et GitHub Flavored Markdown qui est une version étendue de Markdown avec des fonctionnalités personnalisées) utilisées dans la documentation.

#### Le markdown classique

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
      <td>`> `</td>
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
      <td>L'élément de donnée<br />(créé par le MDN)</td>
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
      <td>
        Notes mises en avant (par Github) et Appel à l'action (créé par le MDN)
      </td>
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
  </tbody>
</table>

## Résumé

Nous avons vu que les pages utilisent un format allégé nommé Markdown, pour remplacer le HTML. Pour que les pages continuent de prendre en charge les éléments de SEO du HTML, il existe un autre élément qui est nommé le « Front Matter » que nous verrons par la suite.
